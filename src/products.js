const products = 
    [
    {id: '1', club: "Cobo", title: 'Remera H', categoryType: 'hombre', category: "ropa", price: 100, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d16f7185d35640bc969baada0122940a_9366/Remera_Argentina_Verde_FH8585_01_laydown.jpg', detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.' , stock: 20},
    {id: '2', club: "Cobo", title: 'Remera M', categoryType: 'mujer',category: "ropa", price: 120, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/389e9c1530674867968da9ea010aa860_9366/BOS_LOGO_TANK_Blanco_EB4544_01_laydown.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.', stock: 20},
    {id: '3', club: "Independiente", title: 'Remera N', categoryType: 'niño', category: "ropa", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3250a5ded675452e9fc2a930013fc70a_9366/Remera_Trifolio_Blanco_DV2828_01_laydown.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.', stock: 20},
    {id: '4', club: "Cobo", title: 'Zapatillas M',categoryType: 'mujer',  category: "calzado", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ba7635ae7fe43d38466abce00bd51ee_9366/Zapatillas_Coreracer_Azul_FX3617_01_standard.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.', stock: 20},
    {id: '5', club: "LEFU", title: 'Zapatillas N', categoryType: 'niño', category: "calzado", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8e4963092b034668bb39aa4601158d72_9366/Zapatillas_Grand_Court_(UNISEX)_Negro_EF0102_01_standard.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.', stock: 20},
    {id: '6', club: "LEFU", title: 'ZAPATILLAS H',categoryType: 'hombre',  category: "calzado", price: 8999, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8dac3738cd624589a718ac23011de99f_9366/Zapatillas_VS_Pace_Blanco_FY8558_01_standard.jpg', detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.' , stock: 20},
    {id: '7', club: "LEFU", title: 'Pantalon M', categoryType: 'mujer', category: "ropa", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9db5e31f50914e0d958aad1200f343b9_9366/Calzas_7-8_Techfit_Period-Proof_Tiro_Alto_Negro_H15832_21_model.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 14},
    {id: '8', club: "Cobo", title: 'Pantalon H', categoryType: 'hombre', category: "ropa", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea5f97ad4949468f95deace700a8002d_9366/Pantalon_Essentials_Logo_Negro_GS4875_21_model.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 10},
    {id: '9', club: "Cobo", title: 'Pantalon H',categoryType: 'hombre',  category: "ropa", price: 140, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/83619e8431024f0d8f71ac3700fd90af_9366/Pantalon_de_Entrenamiento_Tiro_21_Negro_GH7306_21_model.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 22},
    {id: '10', club: "El Tero", title: 'Pantalon N', categoryType: 'niño', category: "ropa", price: 240, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4f3a3ac57dd24567a855ac36012025ab_9366/Pantalon_de_Entrenamiento_Tiro_21_Azul_GK9659_01_laydown.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 42},
    {id: '11', club: "Cobo", title: 'Pantalon H', categoryType: 'hombre', category: "ropa", price: 240, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bad0e04ad6524823b91bad4e01122797_9366/Shorts_Primeblue_7_Pulgadas_Estampados_Gris_GS4938_21_model.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 42},
    {id: '12', club: "El Tero", title: 'Pantalon N', categoryType: 'niño', category: "ropa", price: 240, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4f3a3ac57dd24567a855ac36012025ab_9366/Pantalon_de_Entrenamiento_Tiro_21_Azul_GK9659_01_laydown.jpg' , detail: 'Estilo informal de corte bajo. Estas zapatillas lucen las 3 Tiras cosidas en el costado externo y sutiles perforaciones que forman las 3 Tiras en el costado interior.',stock: 42},
];

const categories =[
    {id:'ropa', description: 'Ropa'},
    {id:'calzado', description: 'Calzado'},
    {id:'accesorios', description: 'Accesorios'}
] 

const categoryTypes =[
    {id:'hombre', description: 'Hombres'},
    {id:'mujer', description: 'Mujeres'},
    {id:'niño', description: 'Niños'}

] 

const clubs = [
    {id:'Cobo', description: 'Club Cobo'},
    {id:'Independiente', description: 'Independiente'},
    {id:'LEFU', description: 'LEFU'},
    {id:'El Tero', description: 'El Tero'}
] 

 
// Promise que devuelve la CATEGORIA
export const getCategory = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(categories)
        }, 2000 )
    })
}

export const getCategoryTypes = () => {
    console.log('getCategoryTypes()')
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(categoryTypes)
        }, 2000 )
    })
}


export const getProducts = (category) => {
    console.log('getProducts()')
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            // Use the TERNARY OPERATOR to check first el array products, filtered the product if category exist, if not, show all the products.
            category ? resolve(products.filter(product => product.categoryType === category)) : resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) =>{
    console.log('getProductById()')
    return new Promise ((resolve, reject ) => { 
        const product = products.find(prod => parseInt (prod.id) === parseInt(id))
        setTimeout( () => resolve(product), 2000 )
    })
}

export const getItem = () =>{

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products[5])
        }, 2000 )
    })

}