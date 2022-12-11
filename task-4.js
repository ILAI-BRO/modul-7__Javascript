class Device
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.contact = false;
  }
  
  connected(){
    console.log(this.name + " подключена к сети!");
    this.contact = true;
  }
  
  getPower()
  {
    return this.contact ? this.power : 0;
  }
 
}



const lamp = new Device('Лампа', 45);
const computer = new Device('PC', 1000);

lamp.color = `black`;
computer.cost = `450$`;


console.log(lamp.getPower() + computer.getPower());

lamp.connected();
console.log(lamp.getPower() + computer.getPower());

computer.connected();
console.log(lamp.getPower() + computer.getPower());

console.log(lamp)

console.log(computer)

console.log(`Лампа это объект`, lamp instanceof Object)
console.log(`Компьютер это объект`, computer instanceof Object)
