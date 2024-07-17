precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


let cantidad = document.querySelector(".cantidad")
let valorTotal = document.querySelector(".valor-total")

document.querySelector("#buttonMas").addEventListener("click", function () {
    cantidad.innerHTML++
    valorTotal.innerHTML = cantidad.innerHTML*precio
});

document.querySelector("#butttonMenos").addEventListener("click", function(){
    if(cantidad.innerHTML <= 0){
        cantidad.innerHTML= 0
    }
    else{
        cantidad.innerHTML--
    }
    valorTotal.innerHTML = cantidad.innerHTML*precio
})
