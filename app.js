const rect = require(`./rectangle`);

function solveRect (l,w){
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    rect(l,w,(err,rectangle)=>{
        if(err){
            console.log("ERROR", err.message)
        }else{
            console.log(`Periimeter of rectangle with Dimensions ${l} & ${w}: ${rectangle.perimeter(l,w)}`)
            console.log(`Area of rectangle with Dimensions ${l} & ${w}: ${rectangle.area(l,w)}`)
        }
        
    })
    console.log('Logged after call to rect')
}

solveRect(5,2)
solveRect(-10,4)
solveRect(15,3)