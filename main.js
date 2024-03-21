var numberEnt = document.querySelector('#display')

function numDisEl(Input){
  numberEnt.value += Input;

}
document.getElementById('clearData').addEventListener('click', () => {
  // alert(90)
  numberEnt.value = "";
})

var executeEntries = document.querySelector('.execute');

executeEntries.addEventListener('click', () => {
  // alert(90)
  numberEnt.value = eval(numberEnt.value)
})
// numDisEl()