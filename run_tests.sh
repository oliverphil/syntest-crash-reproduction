#!/bin/zsh

mkdir experiment_runs
npm run build

project_array=( 'atom' 'eslint' 'express' 'http-server' 'node' 'standard' 'webpack' );

project_array=( 'atom' 'eslint' 'express' 'http-server' 'node' 'standard' 'webpack' );

for project in "${project_array[@]}"; do
  export SYNTEST_PROJECT=${project};
  export SYNTEST_CRASHES=true
  npm run run > local_results/output_"${project}_syntest".log 2> local_results/stderr_"${project}_syntest".log
#  export SYNTEST_CRASHES=false
#  npm run run > output_"${project}".log 2> stderr_"${project}".log
done
