echo "$1"
echo "$2"
echo "$3"

if [ "$3" -ge 15 ]; then
  qdel -u oliverphil
fi

if qstat | grep -P 'oliverphil\s*[qwrT]+\s*' ; then
  echo "Jobs Running"
  echo ./queue_experiment.sh "$1" "$2" $(("$3" + 1)) | at now + 30 minutes
  atq
  exit 1
fi

echo "Delete"
qdel -u oliverphil

if [ "$1" -gt 1 ]; then
  tar czf /vol/grid-solar/sgeusers/oliverphil/results/output_"$(($1 - 1))".tar.gz /vol/grid-solar/sgeusers/oliverphil/output
  rm /vol/grid-solar/sgeusers/oliverphil/output/*
  ls /vol/grid-solar/sgeusers/oliverphil/results
fi

if [ "$1" -ge "$2" ]; then
  echo "Complete"
  exit 0
fi

echo "Test Completed"
node run_per_crash.mjs "$1"
echo ./queue_experiment.sh $(("$1" + 1)) "$2" 1 | at now + 30 minutes
qstat
atq
