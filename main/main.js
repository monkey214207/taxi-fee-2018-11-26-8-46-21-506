module.exports = function main(distance,time) {
    var base = 6;
    var shortbase = (8-2)*0.8;
    var timeprice = 0.25*time;
    var price = 0;
    if(distance <= 2){
        price = base;
    }
    else if(distance <= 8){
        price = base+0.8*(distance-2);
    }
    else{
        price = base+shortbase+(distance-8)*0.8*1.5;
    }
    return Math.round(price+timeprice);
};