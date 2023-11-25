import Car from "./car";

class Print {
  static show() {
    console.log(new Car().name);
  }
}
Print.show();
