#!/bin/zsh

mkdir experiment_runs
npm run build
for (( i = 0; i < 15; i++ )); do
  npm run run > output_$((i + 1)).log 2> stderr_$((i + 1)).log
done