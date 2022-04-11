const products = [
    {
        id: '1',
        title: 'Jack Daniels',
        image: "https://bngbebidas.com/wp-content/uploads/2019/12/JACK-DANIELS-700-ML-020100001.png",
        stock: 50,
        price: 5500,
        description: 'desc',
        category: 'whisky',
    },
    {
        id: '2',
        title: 'Jack Daniels Honey',
        image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/448/812/products/1211-5449bea3f07f88a29016330225429675-640-0.png",
        stock: 10,
        price: 5700,
        description: 'desc',
        category: 'whisky',
    },
    {
        id: '3',
        title: 'Johnie Walker Red Label',
        image: "https://i0.wp.com/distrigal.com/wp-content/uploads/2021/09/jonny-rojo.png?fit=600%2C600&ssl=1",
        stock: 20,
        price: 2145,
        description: 'desc',
        category: 'whisky',
    },
    {
        id: '4',
        title: 'Chacra 55 Pinot  Noir 2019',
        image: "https://images.vivino.com/thumbs/1XXZ0UUjRUWMtsFEK2pCkA_pb_600x600.png",
        stock: 20,
        price: 14750,
        description: 'desc',
        category: 'vino',
    },
    {
        id: '5',
        title: 'Nicasia Red Blend Malbec',
        image: "https://static.wixstatic.com/media/0d9eef_371d6652c78b47579940008573e139a0~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/NICASIA.webp",
        stock: 25,
        price: 1595,
        description: 'desc',
        category: 'vino',
    },
    {
        id: '6',
        title: 'Nicasia Blanc',
        image: "https://frappe.com.ar/img/productos/grande/1003443.png",
        stock: 25,
        price: 4690,
        description: 'desc',
        category: 'vino',
    },
    {
        id: '7',
        title: 'Beefater gin',
        image: "https://frappe.com.ar/img/productos/grande/397.png",
        stock: 25,
        price: 4000,
        description: 'desc',
        category: 'gin',
    },
    {
        id: '8',
        title: 'Bombay Sapphire',
        image: "https://www.2que3.net/15-large_default/bombay-sapphire.jpg",
        stock: 25,
        price: 7800,
        description: 'desc',
        category: 'gin',
    },
    {
        id: '9',
        title: 'Caorun',
        image: "https://ginshop.it/wp-content/uploads/2017/06/Caorunn.png",
        stock: 25,
        price: 3500,
        description: 'desc',
        category: 'gin',
    }
]

export const getProductsByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(() => {
                return category ? products.filter(prod => prod.category === category) : products
            })
        }, 300)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 300)
    })
}