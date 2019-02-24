// create new Vue instance
// el: id of main Vue div

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'For warm feet',
        image: './green-white.jpg',
        inventory: 100,
        details: ["80% cotton", "20% polyester", "Gender-netural"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'green-white.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'blue-white.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})