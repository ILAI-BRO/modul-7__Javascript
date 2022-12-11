class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.contact = false;
  }
  
  connected() {
    console.log(this.name + " подключена к сети!");
    this.contact = true;
  }
  
  getPower() {
    return this.contact ? this.power : 0;
  }
 
}

const lamp = new Device('Лампа', 45);
lamp.color = `black`;

class PersonComp extends Device {
  constructor(name, cost, power) {
    super(name, power);
    this.cost = cost;
  }
    connected() {
    console.log(this.name + " подключен к сети!");
    this.contact = true;
  }

}

const computer = new PersonComp (`PC`, 450, 1000 );



console.log(`Суммарная потребляемая мощность `, lamp.getPower() + computer.getPower());

lamp.connected();
console.log(lamp.getPower() + computer.getPower());

computer.connected();
console.log(`Общая потребляемая мощность девайсов`, lamp.getPower() + computer.getPower());

console.log(lamp);

console.log(computer);

console.log(`Лампа это объект`, lamp instanceof Object);
console.log(`Компьютер это объект`, computer instanceof Object);
