const myName = 'Ilyas';
const obj = {
  name: 'Ilyas',
  age: 34
}


const getFunc = () => {
  if (myName === obj.name) {
    console.log('True')
  } else {
    console.log('False')
  }
   
}


getFunc(myName, obj);
