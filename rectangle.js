module.exports = (x,y, callback) =>{
    if(x <=0 || y <= 0 ){
        callback(new Error(`Rectangle Dimensions cannot be less than zero. Recieved: ${x} and ${y}`))
    }else{
        setTimeout(()=>
            callback(null, {
                perimeter:()=> 2 * (x+y),
                area:()=> x * y
            }),2000)
    }
}
