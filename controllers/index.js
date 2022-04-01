export let productos = [{'tittle' : 'arroz', 'price': 10 , 'thumbnail': 'url', 'id': 1 },
{'tittle' : 'pasta', 'price': 10 , 'thumbnail': 'url', 'id': 2 }]

//sirve
export let getAll= ()=>{ 
return productos 
}

//sirve
export let getAllId = (id)=>{

     let filter = productos.filter(x => x.id == id)
     if (filter.length === 0){return ('producto no encontrado').json({})};
     filter = JSON.stringify(filter)
     return (`el id es ${id} y los productos ${filter} `)
     }



//sirve
export let deleteById = (id)=>{ 
     let filter = productos.filter(x => x.id !== id)
     if (filter.length === 0){return ('producto no encontrado').json({})};
     filter = JSON.stringify(filter)
     productos = filter
     return (`el id es ${id} y los productos ${filter} `)
}

// imposible hacerlo funcionar
export let changeByID = (id)=>{ 
     let filter = productos.filter(x => x.id !== id)
     filter = JSON.stringify(filter)
     productos = filter
     return (`el id es ${id} y los productos ${filter} `)
}

//  imposible hacerlo funcionar
export let addProducto =() =>{
     
}