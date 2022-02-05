const app = Vue.createApp({

    data(){
        return{
            showBooks: true,
            url: "https://www.instagram.com/p/CYJimM0MGQg/?utm_medium=copy_link",
            books:[
                {title:'name of the wind', author:'patrick rothfuss', img:'assets/1.jpg', isFav: true},
                {title:'the way of kinds', author:'brandon sardenson', img:'assets/2.jpg', isFav: false},
                {title:'the final empire', author:'brandon sardenson', img:'assets/3.jpg', isFav: true},
            ],
            age: 45,
            x: 0,
            y: 0,
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleColor(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')