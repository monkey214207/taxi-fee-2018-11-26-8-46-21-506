const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("1 km without waiting", function(){
        let distance = 1;
        let time = 0;
        let result = main(distance,time);
        expect(result).toBe(6);
    });

    it("7 km without waiting", function(){
        let distance = 7;
        let time = 0;
        let result = main(distance,time);
        expect(result).toBe(10);
    });

    it("9 km without waiting", function(){
        let distance = 9;
        let time = 0;
        let result = main(distance,time);
        expect(result).toBe(12);
    });

    it("9 km with 1 min waiting", function(){
        let distance = 9;
        let time = 4;
        let result = main(distance,time);
        expect(result).toBe(13);
    });

    it("9 km with 1 min waiting(need round)", function(){
        let distance = 9;
        let time = 1;
        let result = main(distance,time);
        expect(result).toBe(12);
    });
});
