import yargs from 'yargs'; // yargs 模块提供 argv 对象，用来读取命令行参数。

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })

    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv;

export default args;