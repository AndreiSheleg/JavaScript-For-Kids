let dog = {
  name: "Оладушек",
  legs: 4,
  isAwesome: true
};

dog.bark = () => console.log("Гав-гав! Меня зовут " + this.name + "!")

dog.bark();
// Гав-гав! Меня зовут Оладушек!
