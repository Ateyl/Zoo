// # для неизменяемого
class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, species, furColor) {
      super(name, 'Mammal');
      this.furColor = furColor;
    }
  }
  
  class Bird extends Animal {
    constructor(name, species, wingSpan) {
      super(name, 'Bird');
      this.wingSpan = wingSpan;
    }
  }
  
  class Reptile extends Animal {
    constructor(name, species, scaleType) {
      super(name, 'Reptile');
      this.scaleType = scaleType;
    }
  }
  
  class Zoo {
    constructor() {
      this.animals = [];
    }
    addAnimal(animal) {
      this.animals.push(animal);
    }
  
    listAnimals() {
      return this.animals.map(animal => `${animal.name} (${animal.species})`);
    }
  
    getAnimalsBySpecies(species) {
      return this.animals.filter(animal => animal.species === species);
    }
  
    removeAnimal(name) {
      this.animals = this.animals.filter(animal => animal.name !== name);
    }
  
    countAnimals() {
      return this.animals.length;
    }
  }
  
  const zoo = new Zoo();
  // Добавить животное
  const lion = new Mammal("Alex", "Lion", "Golden");
  const Eagle = new Bird("Spagetti", "Eagle", 10.9);
  const snake = new Reptile("Zoy", "Snake", "Smooth");
  const Monkey = new Mammal("Zara", "MOnkey", "Brown")
  
  
  zoo.addAnimal(lion);
  zoo.addAnimal(Eagle);
  zoo.addAnimal(snake);
  zoo.addAnimal(Monkey)
  // 

  const allAnimals = zoo.listAnimals();
  console.log("All Animals:", allAnimals);
  
  const mammals = zoo.getAnimalsBySpecies("Mammal");
 console.log("Mammals:", mammals);

 const Birds = zoo.getAnimalsBySpecies("Bird");
 console.log("Birds:", Birds );
  
  const totalAnimals = zoo.countAnimals();
  console.log("Total Animals:", totalAnimals);