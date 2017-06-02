/**
 * Implementation Drivable interface
 */
var car = (function () {
    function car() {
    }
    car.prototype.start = function () {
        console.log('Start function invoked');
    };
    car.prototype.drive = function () {
        console.log('Drive  function invoked');
    };
    car.prototype.getPosition = function () {
        console.log('getPosition function invoked');
    };
    return car;
}());
/**
 *
 * @type {car}
 */
var Audi = new car();
Audi.start();
Audi.drive();
Audi.getPosition();
/**
 *
 * @type {car}
 */
var honda = new car();
honda.start();
honda.drive();
honda.getPosition();
