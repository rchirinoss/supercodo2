const { createApp } = Vue
createApp({
    data() {
        return {
            url: './js/productos.json',
            error: false,
            productos: [],
           
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url  )
                .then(response => response.json())
                .then(  data => {
                    console.log(data)
                    this.productos=data.productos 
                   
                }
                
                
                
                );
        }
    },
    created(){
        this.fetchdata(this.url)

    }

}).mount('#app')