const products = [
    {
        id: '1',
        title: 'Jack Daniels',
        image: "https://bngbebidas.com/wp-content/uploads/2019/12/JACK-DANIELS-700-ML-020100001.png",
        stock: 50,
        price: 5500,
        description: 'Jack Daniel’s es una destilería y marca de whiskey estadounidense de Tennessee. La diferencia más notable es que el whisky Tennessee es filtrado en carbón de arce sacarino, dándole un sabor y aroma',
        category: 'whisky',
    },
    {
        id: '2',
        title: 'Jack Daniels Honey',
        image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/448/812/products/1211-5449bea3f07f88a29016330225429675-640-0.png",
        stock: 10,
        price: 5700,
        description: 'Vista: Jack Daniel’s Honey presenta un color ámbar amarillo. Nariz: En nariz se aprecia un ligero aroma de miel con notas de caramelo, carbón y la madreselva. Boca: Sabor a miel con toques de vainilla y madera de roble. El acabado es dulce y limpio.',
        category: 'whisky',
    },
    {
        id: '3',
        title: 'Johnie Walker Red Label',
        image: "https://i0.wp.com/distrigal.com/wp-content/uploads/2021/09/jonny-rojo.png?fit=600%2C600&ssl=1",
        stock: 20,
        price: 2145,
        description: 'JOHNNIE WALKER RED LABEL es el whisky escocés de mayor venta en el mundo. Es famoso por su sabor acentuado, lleno de carácter, equilibrado brillo incluso cuando se mezcla. Es un sabor que la familia Walker nunca se ha comprometido a cambiar.',
        category: 'whisky',
    },
    {
        id: '4',
        title: 'Chacra 55 Pinot  Noir 2019',
        image: "https://images.vivino.com/thumbs/1XXZ0UUjRUWMtsFEK2pCkA_pb_600x600.png",
        stock: 20,
        price: 14750,
        description: 'Color rojo rubí brillante y de intensidad baja a media. Aroma frutado de frutas rojas silvestres indefinidas, algo mineral y tenue ahumado de la madera. Volumen medio a alto de aroma. Sabor fresco y firme, con ataque semi – dulce y media a alta acidez. Presenta buen equilibrio de tendencia centro – lateral de la boca con taninos jóvenes y presentes.',
        category: 'vino',
    },
    {
        id: '5',
        title: 'Nicasia Red Blend Malbec',
        image: "https://static.wixstatic.com/media/0d9eef_371d6652c78b47579940008573e139a0~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01/NICASIA.webp",
        stock: 25,
        price: 1595,
        description: 'Vino de color rubí profundo. Aromas frutos rojos como ciruela y vainilla con notas de café. Presenta sabores dulces e intensos en boca, repitiendo la ciruela y con moras maduras. Terminando un intenso y largo final frutado.',
        category: 'vino',
    },
    {
        id: '6',
        title: 'Nicasia Blanc',
        image: "https://frappe.com.ar/img/productos/grande/1003443.png",
        stock: 25,
        price: 4690,
        description: 'Vino de color amarillo pálido. Aromas florales y dejos cítricos y frescos. En boca se presenta complejo con sabores a sutiles notas de miel, durazno y frutos blancos. Terminando con un vino elegante, complejo y con equilibrada acidez.',
        category: 'vino',
    },
    {
        id: '7',
        title: 'Beefeater gin',
        image: "https://frappe.com.ar/img/productos/grande/397.png",
        stock: 25,
        price: 4000,
        description: 'Beefeater es una marca de ginebra fabricada por James Burrough Ltd, con sede en Londres, Inglaterra, siendo distribuida a nivel mundial por la compañía Pernod Ricard, que la considera como una de sus marcas estratégicas.',
        category: 'gin',
    },
    {
        id: '8',
        title: 'Bombay Sapphire',
        image: "https://www.2que3.net/15-large_default/bombay-sapphire.jpg",
        stock: 25,
        price: 7800,
        description: 'La ginebra Bombay Sapphire es conocida por su características botella de color azul con su etiqueta con la cara de la Reina Victoria y por su suave y extraordinario sabor.',
        category: 'gin',
    },
    {
        id: '9',
        title: 'Caorun',
        image: "https://ginshop.it/wp-content/uploads/2017/06/Caorunn.png",
        stock: 25,
        price: 3500,
        description: 'Gin Caorunn es  una ginebra Premium  obtenida por destilación tradicional por lotes, con un solo alambique de cobre Berry.',
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