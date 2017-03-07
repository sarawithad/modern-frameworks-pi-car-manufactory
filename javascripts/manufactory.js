'use strict';

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
var Car = function () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now();
  console.log("manufactured date: ", this.manufactured_date);
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
var honda = function() {
  // Define the manufacturer instance variable
  this.manufacturer = "honda";
  console.log("manufacturer: ", this.manufacturer);
}
// Set the prototype to a new Car instance
honda.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
var pilot = function() {
  this.color = "white";
  this.doors = 4;

}
// Set the prototype to appropriate model you created above and set the model name argument
pilot.prototype = new honda();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/

var myFirstFavoriteCar = new honda();
myFirstFavoriteCar.plate_number = "123456";

var mySecondFavoriteCar = new honda();
myFirstFavoriteCar.plate_number = "istop4cats";

var myThirdFavoriteCar = new honda();
myFirstFavoriteCar.plate_number = "iluvcarz";


/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
var civic = function() {
  this.cylinders = 6;
  this.year = 2016;
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */

 civic.prototpye = new honda();
 console.log("civic: ", civic);


/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

 var newCarYay = new honda();
 newCarYay.plate_number = "code4lyfe";