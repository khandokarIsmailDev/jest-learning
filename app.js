 const add = (a,b) =>{
     return (a + b)
}

const isEven =(a) =>{
    if(typeof a !== "number"){
        throw new Error('Invalid format')
    }
    if(a%2 === 0){
        return a
    }
}



module.exports ={
    add,
    isEven
}