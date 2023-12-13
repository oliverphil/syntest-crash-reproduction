echo "$1"
echo "$2"

if qstat | grep -P 'oliverphil\s*[qwrT]+\s*' ; then
  echo "Jobs Running"
  echo ./queue_experiment.sh "$1" "$2" | at now + 5 minutes
  exit 1
fi

echo "Delete"
#qdel -u oliverphil

if [ $1 -gt 1 ]; then
  tar czf /vol/grid-solar/sgeusers/oliverphil/output_"$(($1 - 1))".tar.gz /vol/grid-solar/sgeusers/oliverphil/output
fi

if ! [ $1 -lt $2 ]; then
  echo "Complete"
  exit 0
fi

echo "Test Completed"
#node run_per_crash.mjs "$1"
echo ./queue_experiment.sh $(("$1" + 1)) | at now + 5 minutes
