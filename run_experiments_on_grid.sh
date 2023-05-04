need sgegrid
COMMIT=git rev-parse HEAD
qsub -t 1-20:1 export COMMIT=$COMMIT run_tests_grid.sh
