function borrar(){
  document.getElementById("demo").innerHTML = "total a pagar: $ ";
  document.getElementById("cantidad").value = "Cantidad";
}

function myFunction() {
  var precioGral=200;
  var precioFinal=0;
    var x = document.getElementById("mySelect").value;
    console.log(x);

    var y = document.getElementById("cantidad").value
    console.log("cantidad ", y);

    if(x==="estudiante"){
      var descuento=precioGral*0.20;
      precioFinal=(precioGral-descuento)*y;
    }
    else{
        if(x==="trainee"){
        var descuento=precioGral*0.15;
        precioFinal=(precioGral-descuento)*y;
        }
        else{
          var descuento=precioGral*0.10;
          precioFinal=(precioGral-descuento)*y;
        }
    document.getElementById("demo").innerHTML += precioFinal;
  }

  
  }
