
/*import file system ( nos provee la funcion writeFileSync)
 que lo que hace es  escribir un archivo en nuestro sistema de archivos
 y a ese archivo que crear le está agregando el valor(resultado), 
 si cambiamos la base prodriamos obtener las diferentes tablas*/

 const fs = require('fs'); 
 const {logica} = require( './logica');


const multiplicar =(base) =>{
    
    console.log(`================`);
    console.log (`tabla del ${base}`);
    console.log(`================`);
    

       const resultado = logica(base);

    
     console.log(resultado);
     fs.writeFileSync(`tablas/tabla-del-${base}`, resultado);  // escribiendo el archivo

    }
    //exportando el objeto
    module.exports = {
     multiplicar
    }
    