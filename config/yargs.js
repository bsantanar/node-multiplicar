const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default:10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla', opts)
                .command('crear', 'Crea archivo con limite', opts)
                .help()
                .argv;

module.exports = {
    argv
}