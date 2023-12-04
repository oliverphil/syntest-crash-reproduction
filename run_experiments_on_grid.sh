need sgegrid
COMMIT=$(git rev-parse HEAD)
cp .syntest-"$1".json /vol/grid-solar/sgeusers/oliverphil/config/.syntest-"$1".json
rm .syntest-"$1".json
qsub -t 1-1:1 run_tests_grid.sh $COMMIT $1
