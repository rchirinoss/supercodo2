cad=`
<div id="carrito">
    <div class="carrito-header">
        <h2>Carrito</h2>
    </div>
    
    <div class="carrito-main">
        <img src="./images/bebidas/01aguaGlaciar2l.webp" alt="">
        <div class="carrito-item-detalles">
            <h4>Agua Glaciar 2Lt</h4>
            <div class="selector-cantidad">
                <i class="restar-cantidad">-</i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>
                <i class="sumar-cantidad">+</i>
            </div>
            <span class="carrito-item-precio">$15.000,00</span>
        </div>
        <span class="btn-eliminar">
            <i class="eliminar-cantidad">X</i>
        </span>
    </div>

    <div class="carrito-footer">
        <div class="fila">
            <p>Total:</p>
            <span class="carrito-total">$0.000,00</span>
        <div>
        <button class="btn-pagar">Pagar</button>
    </div>



</div>
`

document.querySelector("main").innerHTML = cad