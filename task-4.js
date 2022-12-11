  function Device(name, power) {
  this.name = name;
  this.power = power;
  this.contact = false;
}

Device.prototype.connect = function() {
  console.log(this.name + ` подключенно`);
  this.contact = true;
}

Device.prototype.getPowerUsed = function() {
  return this.contact ? this.power : 0;
}


const lamp = new Device('Лампа', 45);
const computer = new Device('Компьютер', 1000);

console.log(lamp.getPowerUsed() + computer.getPowerUsed());

lamp.connect();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());

computer.connect();
console.log(`Общий расход устройств`, lamp.getPowerUsed() + computer.getPowerUsed());

console.log(lamp)
console.log(computer)
