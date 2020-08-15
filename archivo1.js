console.log("hola mundo");
let fileSystem = require ("fs");

fileSystem.writeFile("extracto.csv","fecha,Descripcion,valor \n 13/08/2020, Pago del mercado, $50.000", function (err) {
    if (err){
        throw err;
    } else (console.log("Saved"))
});

fileSystem.appendFile('extracto.cvs', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


//FUNCTION CON ARROW FUNCTION
// fileSystem.writeFile("extracto.csv", (err) =>{
//     if (err){
//         throw err;
//     } else (console.log("Saved"))
// });