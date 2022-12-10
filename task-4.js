class Device
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.contact = false;
  }
  
  connected(){
    console.log(this.name + " подключен к сети!");
    this.contact = true;
  }
  
  getPower()
  {
    return this.contact ? this.power : 0;
  }
}

const lamp = new Device('Лампа', 45);
const computer = new Device('PC', 1000);

console.log(lamp.getPower() + computer.getPower());

lamp.connected();
console.log(lamp.getPower() + computer.getPower());

computer.connected();
console.log(lamp.getPower() + computer.getPower());
