const prompts = require('prompts');
 
async function suma() {

 let questions  =   [
  
    {
        type: 'number',
        name: 'valorA',
        message: 'Ingresa el valor A:'
    },
    {
        type: 'number',
        name: 'valorB',
        message: 'Ingresa el valor B:'
    },
    {
        type: 'number',
        name: 'valorC',
        message: 'Ingresa el valor C:',
        
    }
];

let response = await prompts(questions);



let total = (-response.valorB+(Math.sqrt((Math.pow(response.valorB,2)-(4*response.valorA*response.valorC)))))/(2*response.valorA);

let total2 = (-response.valorB-(Math.sqrt((Math.pow(response.valorB,2)-(4*response.valorA*response.valorC)))))/(2*response.valorA);
           


console.log(`El Total de x1 es: ${ total2 }`);
console.log(`El Total de x2 es: ${ total }`);

}

suma();