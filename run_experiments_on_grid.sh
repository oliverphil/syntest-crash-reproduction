need sgegrid
COMMIT=$(git rev-parse HEAD)
qsub -t 1-1:1 run_tests_grid.sh $COMMIT $1
