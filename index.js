

const argv = require('yargs')
   
             .option('b', {             //objeto de configuración
               alias: 'base',
               type: 'number',
               demandOption: true,
               describe:'Es la base de la tabla de multiplicar'
            })
            .option('l', {             //objeto de configuración
                alias: 'limite',
                type: 'number',
                demandOption: false,
               default: 10,
                describe:'Limite  del multiplicador'
             })
             .option('v', {             //objeto de configuración
                alias: 'visualizar',
                type: 'boolean',
                demandOption: false,
               default: false,
                describe:'mostrar tabla en consola'
             })
            
             

             .check((argv, options) => {
                 if (isNaN (argv.b)){
                     throw new Error("La base tiene que ser de tipo númerico.")
                 } 
                     return true 
               
             })

             .help()
             .version()
                       
             .argv;
//IMPORTAR MULTIPLICADOR
const {multiplicar} = require("./multiplicador");


//PASE DE LA BASE POR PARÁMETRO
multiplicar(argv.b, argv.l, argv.v);






