need sgegrid
COMMIT=$(git rev-parse HEAD)
qsub -t 1-20:1 run_tests_grid.sh $COMMIT
