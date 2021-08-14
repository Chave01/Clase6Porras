
 class datos {
     constructor (producto , precio ) {

        this.producto = producto ;
        this.precio = precio;
        
    }


   costoFinal (precio , envio) {
      
      let cantidad = Number (prompt ("Ingresa la cantidad que queres"));
      
      let costo = this.precio * cantidad + envio ;
       console.log(`el costo final es de ${costo}`)

  }

}
 

 


//Constante

const listaProd = [];

const producto1 = new datos ("cafe", 1300)


listaProd.push (producto1)



let prod = prompt ("Introduci el producto que deseas")


const buscar = listaProd.find (element => element.producto== prod)


console.log(buscar);

