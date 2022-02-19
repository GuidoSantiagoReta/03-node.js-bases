
/*import file system ( nos provee la funcion writeFileSync)
 que lo que hace es  escribir un archivo en nuestro sistema de archivos
 y a ese archivo que crear le está agregando el valor(resultado), 
 si cambiamos la base prodriamos obtener las diferentes tablas*/
 const colors = require('colors');
 const fs = require('fs'); 
 const {logica} = require( './logica');


const multiplicar =(base, limite, visualizar) =>{
     
     const resultado = logica(base, limite);
     
       if(visualizar){
         console.log('================'.green);
         console.log (`tabla del ${base}`.yellow);
         console.log('================'.green);
         }
         
         console.log(resultado);
     
     
    
     const nombreArchivo = `tabla-del-${base}.txt`;
     fs.writeFileSync(`tablas/${nombreArchivo}`, resultado, (err)=>{
          if (err) throw err;
          console.log (`El archivo ${nombreArchivo} fue creado`.rainbow);

     });  // escribiendo el archivo

    }
    //exportando el objeto
    module.exports = {
     multiplicar
    }
    