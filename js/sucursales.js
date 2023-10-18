// cad=`
// <div id="sucursales">
//     <div class="suc1">

//     </div>
//     <div class="suc2">

//     </div>
// </div>
// `

// document.querySelector("main").innerHTML = cad

const { createApp } = Vue
createApp({
    data() {
        return {
            url: './js/productos.json',
            error: false,
            sucursales: [],
            datosFinales: [],
            datos: [],
            tipos: [],
            nombre: ""
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.sucursales = data.sucursales
                    this.datos = data.sucursales
                    this.datosFinales = data.sucursales
                    for (elemento of this.datos) {
                        if (this.tipos.indexOf(elemento.nombre) < 0)  //encuentra
                            this.tipos.push(elemento.nombre)
                    }
                    console.log(this.tipos)
                }
                );
        },
     },

    created() {
        this.fetchdata(this.url)

    },

}).mount('#app')



