echo "$1"
echo "$2"
echo "$3"

if [ "$3" -ge 30 ]; then
  echo "Timeout on \"$1\""
  qdel -u oliverphil
fi

if qstat | grep -P 'oliverphil\s*(?:(?:[r]+\s*[\d\/\s:\.]+all.q@[A-Za-z\-]+\.ecs)|(?:[qw]+\s*\d)+)' ; then
  echo "Jobs Running"
  echo ./queue_experiment.sh "$1" "$2" $(("$3" + 1)) | at now + 30 minutes
  atq
  exit 1
fi

echo "Delete"
qdel -u oliverphil

if [ "$1" -gt 1 ]; then
  echo "Save Results From $1"
  tar czf /vol/grid-solar/sgeusers/oliverphil/results/output_"$(($1 - 1))".tar.gz /vol/grid-solar/sgeusers/oliverphil/output
  rm /vol/grid-solar/sgeusers/oliverphil/output/*
  ls /vol/grid-solar/sgeusers/oliverphil/results
fi

if [ "$1" -ge "$2" ]; then
  echo "Full Run Complete"
  exit 0
fi

NUMBER=$(($1 + 1))

while [ ! -f ".syntest-"$NUMBER".json" ]; do
    ((NUMBER++))
done

echo "Starting Run For $NUMBER"
node run_per_crash.mjs "$NUMBER"
echo ./queue_experiment.sh "$NUMBER" "$2" 1 | at now + 30 minutes
qstat
atq
echo "Success"
exit 0
