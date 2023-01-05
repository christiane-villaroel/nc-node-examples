const rectangle = require(`./rectangle`)

function solveRect (l,w){
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    if (l <= 0 || w <= 0) {
        console.log(`Rectangle Dimensions cannot be less than zero. Recieved:${l}, ${w}`);
    }else{
        console.log(`Periimeter of rectangle: ${rectangle.perimeter(l,w)}`)
        console.log(`Area of rectangle: ${rectangle.area(l,w)}`)
    }
}

solveRect(5,2)
solveRect(-10,4)
solveRect(15,3)