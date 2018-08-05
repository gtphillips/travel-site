import $ from 'jquery';
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " has now paid their taxes.");
  }
}

alert("Winning");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();
