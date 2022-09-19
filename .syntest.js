module.exports = {
    // seed: 'test',
    population_size: 10,
    max_depth: 5,

    // mutation chances
    resample_gene_chance: 0.01,
    delta_mutation_chance: 0.8,
    sample_func_as_arg: 0.5,
    explore_illegal_values: false,

    algorithm: "DynaMOSA",
    search_time: 5,
    total_time: 5,
    iteration_budget: 1000,

    probe_objective: true,
    modifier_extraction: true,
    constant_pool: true,
    constant_pool_probability: 0.5,

    // logging
    console_log_level: "verbose",
    log_to_file: ["info", "warn", "error", "verbose"],

    use_type_inference: true,
    crash_reproduction: true,

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
        './benchmark/top10npm/lodash/test/.internal/*.js',
        './benchmark/top10npm/lodash/test/**/*.js',

        // './benchmark/top10npm/lodash/a*.js',
        // './benchmark/top10npm/lodash/b*.js',
        // './benchmark/top10npm/lodash/c*.js',
        // './benchmark/top10npm/lodash/d*.js',
        // './benchmark/top10npm/lodash/e*.js',
        // './benchmark/top10npm/lodash/f*.js',
        // './benchmark/top10npm/lodash/g*.js',
        // './benchmark/top10npm/lodash/h*.js',
        // './benchmark/top10npm/lodash/i*.js',
        // './benchmark/top10npm/lodash/j*.js',
        // './benchmark/top10npm/lodash/k*.js',
        // './benchmark/top10npm/lodash/l*.js',
        // './benchmark/top10npm/lodash/m*.js',
        // './benchmark/top10npm/lodash/n*.js',
        // './benchmark/top10npm/lodash/o*.js',
        // './benchmark/top10npm/lodash/p*.js',
        // './benchmark/top10npm/lodash/q*.js',
        // './benchmark/top10npm/lodash/r*.js',
        // './benchmark/top10npm/lodash/s*.js',
        // './benchmark/top10npm/lodash/t*.js',
        // './benchmark/top10npm/lodash/u*.js',
        // './benchmark/top10npm/lodash/v*.js',
        // './benchmark/top10npm/lodash/w*.js',
        // './benchmark/top10npm/lodash/x*.js',
        // './benchmark/top10npm/lodash/y*.js',
        // './benchmark/top10npm/lodash/z*.js',

        "./benchmark/top10npm/commanderjs/lib/argument.js",
        "./benchmark/top10npm/commanderjs/lib/command.js",
        "./benchmark/top10npm/commanderjs/lib/error.js",

    ]
}
