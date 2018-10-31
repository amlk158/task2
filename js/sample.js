


const changeColor = (evt) => {
  evt.target.innerHTML = 'This text was modified';
  evt.target.setAttribute('style', 'color: red');
};



const firstElement = document.getElementById('test');

firstElement.addEventListener('click', changeColor);
const arrElem = document.querySelectorAll('.example');
console.log(arrElem);

// Walk through the array
arrElem.forEach(elem => elem.addEventListener('click', changeColor));

d