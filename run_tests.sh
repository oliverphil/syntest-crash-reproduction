#!/bin/zsh

mkdir experiment_runs
npm run build

project_array=( 'atom' 'eslint' 'express' 'http-server' 'node' 'standard' 'webpack' );

for (( i = 0; i < 15; i++ )); do
  for project in "${project_array[@]}"; do
    export SYNTEST_PROJECT=${project};
    npm run run > output_"${project}"_$((i + 1)).log 2> stderr_"${project}"_$((i + 1)).log
  done
done
