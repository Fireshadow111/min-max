// declaring variables
let minMaxOutput = document.getElementById('min-maxOutput');
let calButton1 = document.getElementById('calButton1');
let calButton2 = document.getElementById('calButton2');

//array
let minMaxArray = [4, 7, 111];

// function to calculate min value
function min() {
    //using a rest parameter to loop through every value in the array
    result = Math.min(...minMaxArray);
    minMaxOutput.value = result;
}
// function to calculate max value
function max() {
    //using a rest parameter to loop through every value in the array
    result = Math.max(...minMaxArray);
    minMaxOutput.value = result;
}
calButton1.addEventListener('click', min);
calButton2.addEventListener('click', max);