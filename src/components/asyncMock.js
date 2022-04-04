const products = [
    {
        id: 1,
        title: 'Jack Daniels',
        image: "",
        stock: 50,
        price: 5500,
        description: 'desc'
    },
    {
        id: 2,
        title: 'Jack Daniels Honey',
        image: "",
        stock: 10,
        price: 5700,
        description: 'desc'
    },
    {
        id: 3,
        title: 'Chacra 55 Pinot  Noir 2019',
        image: "",
        stock: 20,
        price: 14750,
        description: 'desc'
    },
    {
        id: 4,
        title: 'Nicasia Red Blend Malbec',
        image: "",
        stock: 25,
        price: 1595,
        description: 'desc'
    },
    {
        id: 5,
        title: 'Nicasia Blanc',
        image: "",
        stock: 25,
        price: 4690,
        description: 'desc'
    },
    {
        id: 6,
        title: 'Beefater',
        image: "",
        stock: 25,
        price: 4000,
        description: 'desc'
    },
    {
        id: 7,
        title: 'Bombay Sapphire',
        image: "",
        stock: 25,
        price: 7800,
        description: 'desc'
    },
    {
        id: 8,
        title: 'Caorun',
        image: "",
        stock: 25,
        price: 3500,
        description: 'desc'
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}