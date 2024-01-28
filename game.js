let deviceWidth, deviceHeight;

let residentialDemand = 50, commercialDemand = 0, industrialDemand = 0;
let maxResidentialDemand = 100, maxCommercialDemand = 100, maxIndustrialDemand = 100;

let difficulty;
let population = 0;

const GRID_SIZE = 100;
function init() {
    getCanvas();
    deviceWidth = canvas.width;
    deviceHeight = canvas.height;
}
function update() {

}
function draw() {
    // UI
    //Draw sidebar
    context.fillStyle = "#797d8c";
    context.globalAlpha = 0.5;
    context.fillRect(0,0,0.04*deviceWidth,deviceHeight)
    context.globalAlpha = 1;
    context.fillStyle = "#222024"
    //Draw demand backgrounds
    for(let i = 0; i < 3; i++){
        context.fillRect(0.006*deviceWidth + i*(0.01*deviceWidth),0.86*deviceHeight,0.007*deviceWidth,0.12*deviceHeight);
    }
    //Draw demand meters, this is witchcraft which I won't even bother to explain
    context.fillStyle = "#20c959";
    context.fillRect(0.006*deviceWidth, 0.98*deviceHeight - (residentialDemand/maxResidentialDemand) * (0.12*deviceHeight) ,0.007*deviceWidth, (residentialDemand/maxResidentialDemand) * (0.12*deviceHeight));
    context.fillStyle = "#2075c9";
    context.fillRect(0.006*deviceWidth + 0.01*deviceWidth, 0.98*deviceHeight - (commercialDemand/maxCommercialDemand) * (0.12*deviceHeight) ,0.007*deviceWidth, (commercialDemand/maxCommercialDemand) * (0.12*deviceHeight));
    context.fillStyle = "#c9a420";
    context.fillRect(0.006*deviceWidth + 0.02*deviceWidth, 0.98*deviceHeight - (industrialDemand/maxIndustrialDemand) * (0.12*deviceHeight) ,0.007*deviceWidth, (industrialDemand/maxIndustrialDemand) * (0.12*deviceHeight));
    //Draw population icon
    drawImage(person,0.005*deviceWidth,0.01*deviceHeight,0.03*deviceWidth,0.03*deviceWidth);
    //Draw population number
    context.fillStyle = "white"
    context.font = Math.floor(0.015*deviceWidth) + "px Arial";
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
    // Demand text
    context.font = Math.floor(0.009*deviceWidth) + "px Arial";
    context.fillText("Demands", 0.002*deviceWidth, 0.983 * deviceHeight);
    drawImage(zoning,0.005*deviceWidth,0.12*deviceHeight,0.03*deviceWidth,0.03*deviceWidth)
    // Grid 
    context.strokeStyle = "grey";
    context.globalAlpha = 0.5;
    for(let i = 0; i < GRID_SIZE; i++){
        for(let j = 0; j < GRID_SIZE; j++){
            context.strokeRect((i*(deviceHeight/GRID_SIZE)+2)+0.04*deviceWidth, j*(deviceHeight/GRID_SIZE)+2, (deviceHeight/GRID_SIZE)-2, (deviceHeight/GRID_SIZE)-2);
        }
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