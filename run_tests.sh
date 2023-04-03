#!/bin/zsh

mkdir experiment_runs
npm run build

project_array=[ 'atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack' ];

for (( i = 0; i < 15; i++ )); do
  for (( proj_index = 0; proj_index < 5; proj_index++ )); do
    export SYNTEST_PROJECT=project_array[proj_index];
    npm run run > output_$(SYNTEST_PROJECT)_$((i + 1)).log 2> stderr_$(SYNTEST_PROJECT)_$((i + 1)).log
  done
done
