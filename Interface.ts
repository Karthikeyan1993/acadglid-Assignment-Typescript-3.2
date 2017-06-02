/**
 * Created by USER on 03/06/2017.
 */
/**
 * contract methods for car object
 */
interface Drivable {
    start(): void;
    drive(): void;
    getPosition(): void;
}
/**
 * Implementation Drivable interface
 */
class car implements Drivable {
    start() {
        console.log('Start function invoked');
    }

    drive() {
        console.log('Drive  function invoked');
    }

    getPosition() {
        console.log('getPosition function invoked')
    }
}
/**
 *
 * @type {car}
 */
let Audi = new car();
Audi.start();
Audi.drive();
Audi.getPosition();
/**
 *
 * @type {car}
 */
let honda = new car();
honda.start();
honda.drive();
honda.getPosition();