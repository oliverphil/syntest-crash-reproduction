#!/bin/sh
#
# Force Bourne Shell if not Sun Grid Engine default shell (you never know!)
#
#$ -S /bin/sh
#
# I know I have a directory here so I'll use it as my initial working directory
#
#$ -wd /vol/grid-solar/sgeusers/oliverphil
#
# End of the setup directives
#
# Now let's do something useful, but first change into the job-specific
# directory that should have been created for us
#
# Check we have somewhere to work now and if we don't, exit nicely.
#
if [ -d /local/tmp/oliverphil/$JOB_ID.$SGE_TASK_ID ]; then
        cd /local/tmp/oliverphil/$JOB_ID.$SGE_TASK_ID
else
        echo "Uh oh ! There's no job directory to change into "
        echo "Something is broken. I should inform the programmers"
        echo "Save some information that may be of use to them"
        echo "There's no job directory to change into "
        echo "Here's LOCAL TMP "
        ls -la /local/tmp
        echo "AND LOCAL TMP oliverphil "
        ls -la /local/tmp/oliverphil
        echo "Exiting"
        exit 1
fi
#
# Now we are in the job-specific directory so now can do something useful
#
# Stdout from programs and shell echos will go into the file
#    scriptname.o$JOB_ID.$SGE_TASK_ID
#  so we'll put a few things in there to help us see what went on
#
echo ==UNAME==
uname -n
echo ==WHO AM I and GROUPS==
id
groups
echo ==SGE_O_WORKDIR==
echo $SGE_O_WORKDIR
echo ==/LOCAL/TMP==
ls -ltr /local/tmp/
echo ==/VOL/GRID-SOLAR==
ls -l /vol/grid-solar/sgeusers/
#
# OK, where are we starting from and what's the environment we're in
#
echo ==RUN HOME==
pwd
ls
echo ==ENV==
env
echo ==SET==
set
#
echo == WHATS IN LOCAL/TMP ON THE MACHINE WE ARE RUNNING ON ==
ls -ltra /local/tmp | tail
#
echo == WHATS IN LOCAL TMP oliverphil JOB_ID AT THE START==
ls -la
#
# Copy the input file to the local directory
#
until git clone git@gitlab.ecs.vuw.ac.nz:engr690/syntest-crash-reproduction.git; do
  echo Syntest Crash Reproduction Clone Failed
  sleep 10
done
until git clone git@gitlab.ecs.vuw.ac.nz:engr690/syntest-core.git; do
  echo Syntest Core Clone Failed
  sleep 10
done

echo ==WHATS THERE HAVING COPIED STUFF OVER AS INPUT==
ls -la

# Install NPM packages
export NVM_DIR="/vol/grid-solar/sgeusers/oliverphil/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export npm_config_cache=$(mktemp -d)
nvm install lts/hydrogen
nvm use lts/hydrogen
node --version
which node
cd syntest-core
git checkout 37-feat-run-all-crash-files-at-once
npm i
ls
npm run build
cd ../syntest-crash-reproduction
echo $1
git checkout $1
npm i
ls

#
# Note that we need the full path to this utility, as it is not on the PATH
#
node --version
npm run build
# npm run run > output.log 2> stderr.log

cp -r /vol/grid-solar/sgeusers/oliverphil/extractedTypes/.syntest/ .syntest/
# cp -r /vol/grid-solar/sgeusers/oliverphil/extractedTypes/**/rootContextExtractedTypes*  .syntest/

project_array=( 'atom' 'eslint' 'express' 'http-server' 'node' 'standard' 'webpack' );
# project_array=( 'http-server' 'node' );

# export SYNTEST_SEEDED=false;
sed -i "s/^.*syntest-seeded.*$/  \"syntest-seeded\": \"false\"/" .syntest.json
for project in "${project_array[@]}"; do
  sed -i "s/^.*syntest-project.*$/  \"syntest-project\": \"${project}\",/" .syntest.json
  # export SYNTEST_PROJECT=${project};
  sed -i 's/^.*syntest-crashes.*$/  "syntest-crashes": "true",/' .syntest.json
  # export SYNTEST_CRASHES=true
  cat .syntest.json
  node -r ts-node/register ../syntest-core/tools/cli/bin.ts crash test > output_"${project}_syntest".log 2> stderr_"${project}_syntest".log
  sed -i 's/^.*syntest-crashes.*$/  "syntest-crashes": "false",/' .syntest.json
  # export SYNTEST_CRASHES=false
  BABEL_DISABLE_CACHE=true node -r ts-node/register --max-old-space-size=10000 --stack-size=2000 ../syntest-core/tools/cli/bin.ts crash test > output_"${project}".log 2> stderr_"${project}".log
done

#
echo ==AND NOW, HAVING DONE SOMTHING USEFUL AND CREATED SOME OUTPUT==
ls -la

#rsync -ar .syntest /vol/grid-solar/sgeusers/oliverphil/extractedTypes
cp -r .syntest /vol/grid-solar/sgeusers/oliverphil/extractedTypes/
#
# Now we move the output to a place to pick it up from later
#  noting that we need to distinguish between the TASKS
#  (really should check that directory exists too, but this is just a test)
#
mkdir -p /vol/grid-solar/sgeusers/oliverphil/$JOB_ID
for project in "${project_array[@]}"; do
  cp output_"${project}".log /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/output_"${project}"_$SGE_TASK_ID.log
  cp stderr_"${project}".log /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/stderr_"${project}"_$SGE_TASK_ID.log
  cp output_"${project}_syntest".log /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/output_"${project}"_syntest_$SGE_TASK_ID.log
  cp stderr_"${project}_syntest".log /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/stderr_"${project}"_syntest_$SGE_TASK_ID.log
done
# cp output.log  /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/output_$SGE_TASK_ID.log
# cp stderr.log  /vol/grid-solar/sgeusers/oliverphil/$JOB_ID/stderr_$SGE_TASK_ID.log

#
echo "Ran through OK"
