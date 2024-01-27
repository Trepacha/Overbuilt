let deviceWidth, deviceHeight;

let residentialDemand = 50, commercialDemand = 0, industrialDemand = 0;
let maxResidentialDemand = 100, maxCommercialDemand = 100, maxIndustrialDemand = 100;

let difficulty;
let population = 0;
function init() {
    getCanvas();
    deviceWidth = canvas.width;
    deviceHeight = canvas.height;
}
function update() {

}
function draw() {
    //Draw sidebar
    context.fillStyle = "#797d8c";
    context.globalAlpha = 0.5;
    context.fillRect(0,0,0.04*deviceWidth,deviceHeight)
    context.globalAlpha = 1;
    context.fillStyle = "#222024"
    //Draw demand backgrounds
    for(let i = 0; i < 3; i++){
        context.fillRect(0.006*deviceWidth + i*(0.01*deviceWidth),0.89*deviceHeight,0.007*deviceWidth,0.1*deviceHeight);
    }
    //Draw demand meters, this is witchcraft which I won't even bother to explain
    context.fillStyle = "#20c959";
    context.fillRect(0.006*deviceWidth, 0.99*deviceHeight - (residentialDemand/maxResidentialDemand) * (0.1*deviceHeight) ,0.007*deviceWidth, (residentialDemand/maxResidentialDemand) * (0.1*deviceHeight));
    context.fillStyle = "#2075c9";
    context.fillRect(0.006*deviceWidth + 0.01*deviceWidth, 0.99*deviceHeight - (commercialDemand/maxCommercialDemand) * (0.1*deviceHeight) ,0.007*deviceWidth, (commercialDemand/maxCommercialDemand) * (0.1*deviceHeight));
    context.fillStyle = "#c9a420";
    context.fillRect(0.006*deviceWidth + 0.02*deviceWidth, 0.99*deviceHeight - (industrialDemand/maxIndustrialDemand) * (0.1*deviceHeight) ,0.007*deviceWidth, (industrialDemand/maxIndustrialDemand) * (0.1*deviceHeight));
    //Draw population icon
    drawImage(person,0.005*deviceWidth,0.01*deviceHeight,0.03*deviceWidth,0.03*deviceWidth);
    //Draw population number
    context.fillStyle = "white"
    context.font = Math.floor(0.015*deviceWidth) + "px Arial"
    let numberOfDigits = population.toString().split('').length;
    switch (numberOfDigits){
        case 1:
            context.fillText(population,0.016*deviceWidth,0.06*deviceHeight);
            break;
        case 2:
            context.fillText(population,0.011*deviceWidth,0.06*deviceHeight);
            break;
        case 3:
            context.fillText(population,0.0075*deviceWidth,0.06*deviceHeight);
            break;
        case 4:
            context.fillText(population,0.0035*deviceWidth,0.06*deviceHeight);
            break;
    }
    
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}