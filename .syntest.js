module.exports = {
    // seed: 'test',
    population_size: 50,
    max_depth: 5,

    // mutation chances
    resample_gene_probability: 0.01,
    delta_mutation_probability: 0.8,
    sample_func_as_arg: 0.5,
    explore_illegal_values: true,

    algorithm: "DynaMOSA",
    search_time: 5,
    total_time: 600000,
    iteration_budget: 1000000,

    probe_objective: true,
    modifier_extraction: true,
    constant_pool: true,
    constant_pool_probability: 0.5,

    // logging
    console_log_level: "verbose",
    log_to_file: ["info", "warn", "error", "verbose"],

    use_type_inference: true,
    crash_reproduction: true,

    incorporate_execution_information: true,
    type_inference_mode: 'proportional', // none proportional ranked
    random_type_probability: 0.1,

    draw_cfg: false,


    // target_root_directory: "../syntest-javascript-benchmark/axios",
    // target_root_directory: "/syntest-javascript-benchmark/commanderjs",
    // target_root_directory: "../syntest-javascript-benchmark/express",
    // target_root_directory: "../syntest-javascript-benchmark/lodash",
    // target_root_directory: "../syntest-javascript-benchmark/moment/src",

    // target_root_directory: "../syntest-javascript-benchmark/javascript-algorithms",

    // target_root_directory: "../syntest-javascript-benchmark/chalk",
    // target_root_directory: "../syntest-javascript-benchmark/jquery",
    // target_root_directory: "../syntest-javascript-benchmark/npm_cli",

    target_root_directory: "./benchmark/crashes",

    include: [
        // "./benchmark/crashes/http-server/**",
        "./benchmark/top10npm/lodash/result.js",
        "./benchmark/top10npm/lodash/slice.js",
        "./benchmark/top10npm/lodash/split.js",
        "./benchmark/top10npm/lodash/uniq.js",
        "./benchmark/top10npm/lodash/unzip.js",

        // "./benchmark/top10npm/lodash/**/a*.js",
        // "./benchmark/top10npm/commanderjs/lib/*.js",
        //
        // "./benchmark/top10npm/lodash/.internal/**/*.js",
        // "./benchmark/top10npm/lodash/.internal/baseClone.js",
        // './benchmark/top10npm/lodash/b*.js',
        // "./benchmark/custom/tests.js",
        // "./benchmark/top10npm/lodash/sampleSize.js",
        // "./benchmark/top10npm/lodash/before.js",

    ],
    exclude: [
        // "../syntest-javascript-benchmark/axios/lib/core/buildFullPath.js",
        // "../syntest-javascript-benchmark/axios/lib/core/Axios.js",

        "../syntest-javascript-benchmark/commanderjs/lib/help.js",

        // "../syntest-javascript-benchmark/lodash/.internal/equalArrays.js",
        // "../syntest-javascript-benchmark/lodash/hasPath.js",
        // "../syntest-javascript-benchmark/lodash/random.js",
        // "../syntest-javascript-benchmark/lodash/result.js",
        // "../syntest-javascript-benchmark/lodash/slice.js",
        // "../syntest-javascript-benchmark/lodash/split.js",
        // "../syntest-javascript-benchmark/lodash/toNumber.js",
        // "../syntest-javascript-benchmark/lodash/transform.js",
        // "../syntest-javascript-benchmark/lodash/truncate.js",
        // "../syntest-javascript-benchmark/lodash/unzip.js",


        // "../syntest-javascript-benchmark/express/lib/view.js",

        // "../syntest-javascript-benchmark/axios/lib/core/*.js",
        // "../syntest-javascript-benchmark/commanderjs/lib/**/*.js",

        // "../syntest-javascript-benchmark/express/lib/**/*.js",
        // "../syntest-javascript-benchmark/lodash/**/*.js",
        // "../syntest-javascript-benchmark/moment/src/lib/create/**/*.js",
        // "../syntest-javascript-benchmark/moment/src/lib/moment/**/*.js",

        // "../syntest-javascript-benchmark/javascript-algorithms/src/data-structures/tree/red-black-tree/*.js",
        // "../syntest-javascript-benchmark/javascript-algorithms/src/algorithms/math/matrix/*.js",
        // "../syntest-javascript-benchmark/javascript-algorithms/src/algorithms/sorting/counting-sort/*.js",
        // "../syntest-javascript-benchmark/javascript-algorithms/src/algorithms/graph/**/*.js",
        // "../syntest-javascript-benchmark/javascript-algorithms/src/algorithms/sets/knapsack-problem/*.js"

        // "../syntest-javascript-benchmark/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js",


        // "../syntest-javascript-benchmark/chalk/source/**/*.js",
        // "../syntest-javascript-benchmark/jquery/src/core/**/*.js",
        // "../syntest-javascript-benchmark/npm_cli/lib/auth/*.js",


        './benchmark/top10npm/lodash/test/.internal/*.js',
        './benchmark/top10npm/lodash/test/**/*.js',
        '../syntest-javascript-benchmark/lodash/test/.internal/*.js',
        '../syntest-javascript-benchmark/lodash/test/**/*.js',

        "../syntest-javascript-benchmark/commanderjs/lib/argument.js",
        "../syntest-javascript-benchmark/commanderjs/lib/command.js",
        "../syntest-javascript-benchmark/commanderjs/lib/error.js",

        "../syntest-javascript-benchmark/express/lib/router/index.js",
        "../syntest-javascript-benchmark/express/lib/express.js",

        "../syntest-javascript-benchmark/moment/src/lib/create/local.js",
        "../syntest-javascript-benchmark/moment/src/lib/create/utc.js",

        "../syntest-javascript-benchmark/moment/src/lib/moment/clone.js",
        "../syntest-javascript-benchmark/moment/src/lib/moment/creation-data.js",
        "../syntest-javascript-benchmark/moment/src/lib/moment/valid.js",
        "../syntest-javascript-benchmark/moment/src/lib/moment/moment.js",

        // "../syntest-javascript-benchmark/chalk/source/vendor/supports-color/*.*",
        "./benchmark/crashes/**/acorn-jsx/*.js"

    ]
}
