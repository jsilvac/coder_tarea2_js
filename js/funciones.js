let tipoPago = ['(1) ->Efectivo','(2) -> Debito', '(3) -> Credito','(4) -> Cheque', '(0) -> Salir'];

const registro = [];
let tablaBody = document.getElementById('tablabody');
//let mTotal = document.getElementById('total');
let mTotal = document.getElementById('total').innerText;

let total=0;
let efectivo=0;
let debito=0;
let credito=0;
let cheque=0;


function sumaTotal(monto){
  if(monto>0){
    total+=monto;
    console.log(total);
    

  }
}

function devuelveMiles(monto){
    let nuevoMonto = [];

    for (let i = monto.length - 1; i >= 0; i -= 3) {
      let ini = Math.max(0, i - 2);
      let cad = monto.substring(ini, i + 1);
      nuevoMonto.unshift(cad);
    }
  
    return(nuevoMonto.join('.'));
}

function ingresa(){

    if(registro ==""){
        //console.log('no esta vacia')
        let nombre = prompt('Igrese nombre: ');
        const name = document.getElementById('nombre').innerHTML;
        document.getElementById('nombre').innerHTML=`
            <h4>${name} ${nombre.toUpperCase()}</h4>
        ` ;
    }
    


    let op= prompt('Elige el tipo de pago a agregar: \n' + tipoPago.join('\n')+ ' y para salir opcion 0 ');
    console.log(op);


    while(op != '0'){
        switch(op){
            case '1':
                let efect = parseFloat(prompt('Ingrese el efectivo a sumar'));
                sumaTotal(efect);
                efectivo+=efect;
                agregaMontos(['Efectivo',efect])
            break;
            case '2':
                let debi = parseFloat(prompt('Ingrese el debito a sumar'));
                sumaTotal(debi);
                debito+=debi;
                agregaMontos(['Débito',debi])
            break;
            case '3':
                let credi = parseFloat(prompt('Ingrese el credito a sumar'));
                sumaTotal(credi);
                credito+=credi;
                agregaMontos(['Crédito',credi])
            break;
            case '4':
                let chec = parseFloat(prompt('Ingrese el monto de cheque a sumar'));
                sumaTotal(chec);
                cheque+=chec;
                agregaMontos(['Cheque',chec])
            break;
            default:
                alert('Opcion no valida..🤷🏻‍♂️');
            break
            
        }
        
        op= prompt('Elige el tipo de pago a agregar: \n' + tipoPago.join('\n'));

    }
  
    document.getElementById('total').innerText = mTotal + total;
    console.log(mTotal)
}

function agregaMontos(detalle) {
    registro.push(detalle);
    console.table(registro);
    
        tablaBody.innerHTML += `
        <tr>
            <td>${registro.indexOf(detalle)}</td>
            <td>${detalle[0]}</td>
            <td>${detalle[1]}</td>
        </tr>
    `;

}
function elimina(){

    if(registro != ""){
        idMod = parseInt(prompt('ingresa ID del registro que desas eliminar : \n'))
        const num = document.getElementById('tablabody')
       //for(const reg in registro){
            //console.log(num)
            const resultado = registro.map((valor, indice) => {
                // return `Índice ${indice}: ${valor}`;
                //const este = `${valor}`;
                const este2 = `${indice}`
                
                
                if(este2 == idMod){
                    console.log(este2);
                    registro.splice(este2)
                   // location.reload();
                   document.getElementById('tablabody').innerHTML = '';
                    console.log()
                    refresca(este2)
                }
            });
              
              //console.log(resultado);

            
            // const elemento = registro.findIndex(reidMod);
            // console.log(typeof elemento)
       //}

    }else{
        alert('Resgistro vacio, imposible modificar..! 🤷🏻‍♂️')
    }
}

function refresca(){
    for(regis in registro){

        console.log(regis)
        agregaMontos(regis)
    }

    agregaMontos(registro)
}