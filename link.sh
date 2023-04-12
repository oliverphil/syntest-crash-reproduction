# this file is used for local development
# it links the syntest-core libraries to the syntest-javascript libraries

rm -rf node_modules/@syntest/analysis
rm -rf node_modules/@syntest/base-testing-tool
rm -rf node_modules/@syntest/cfg-core
rm -rf node_modules/@syntest/cli
rm -rf node_modules/@syntest/cli-graphics
rm -rf node_modules/@syntest/core
rm -rf node_modules/@syntest/logging
rm -rf node_modules/@syntest/metric
rm -rf node_modules/@syntest/module

cp -r ../syntest-core/libraries/analysis node_modules/@syntest/analysis
cp -r ../syntest-core/libraries/base-testing-tool node_modules/@syntest/base-testing-tool
cp -r ../syntest-core/libraries/cfg-core node_modules/@syntest/cfg-core
cp -r ../syntest-core/libraries/cli node_modules/@syntest/cli
cp -r ../syntest-core/libraries/cli-graphics node_modules/@syntest/cli-graphics
cp -r ../syntest-core/libraries/core node_modules/@syntest/core
cp -r ../syntest-core/libraries/logging node_modules/@syntest/logging
cp -r ../syntest-core/libraries/metric node_modules/@syntest/metric
cp -r ../syntest-core/libraries/module node_modules/@syntest/module

# npm link ../syntest-core/libraries/analysis
# npm link ../syntest-core/libraries/base-testing-tool
# npm link ../syntest-core/libraries/cfg-core
# npm link ../syntest-core/libraries/cli
# npm link ../syntest-core/libraries/cli-graphics
# npm link ../syntest-core/libraries/core
# npm link ../syntest-core/libraries/logging
# npm link ../syntest-core/libraries/metric
# npm link ../syntest-core/libraries/module

# npm link @syntest/analysis
# npm link @syntest/base-testing-tool
# npm link @syntest/cfg-core
# npm link @syntest/cli
# npm link @syntest/cli-graphics
# npm link @syntest/core
# npm link @syntest/logging
# npm link @syntest/metric
# npm link @syntest/module