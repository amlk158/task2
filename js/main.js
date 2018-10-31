const sendInputData = (e) => {
  e.preventDefault();
  const formData = inputValidation(e);

  if (formData) {
    // some sending logic
    console.log(formData);

    // Clear the form
    elemArr.forEach(elem => elem.value = '')
  }
};

const inputValidation = (e) => {

  if (!nameValidation(firstname.value)) {
    firstname.nextElementSibling.innerHTML = 'Firstname is required';
    return false;
  } else firstname.nextElementSibling.innerHTML = null;

  if (!nameValidation(lastname.value)) {
    lastname.nextElementSibling.innerHTML = 'Lastname is required';
    return false;
  } else lastname.nextElementSibling.innerHTML = null;

  if (!emailValidation(email.value)) {
    console.log('email is not valid');
    email.nextElementSibling.innerHTML = 'Email is incorrect use the abc@mail.com form';
    return false;
  } else email.nextElementSibling.innerHTML = null;

  if (postalcode.value.length > 0 && !postalcodeValidation(postalcode.value)) {
    postalcode.nextElementSibling.innerHTML = 'Postcode have to require 5 numbers';
    return false;
  } else firstname.nextElementSibling.innerHTML = null;

  if (phone.value.length === 0 || !phoneValidation(phone.value)) {
    phone.nextElementSibling.innerHTML = 'Phone number is incorrect use +358451231234 from';
    return false;
  } else phone.nextElementSibling.innerHTML = null;

  if (password.value.length === 0) {
    password.nextElementSibling.innerHTML = 'Password is required';
    return false;
  } else password.nextElementSibling.innerHTML = null;

  successMessage.innerHTML = "All forms are valid!!!";

  const formData = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    postalcode: postalcode.value,
    password: password.value
  };

  return formData;

};

const nameValidation = (value) => {
  const nameExp =/^[a-zA-Z ]{2,30}$/;
  // if (value.length > 3 && value.match(nameExp)) {
  //   return true
  // }

  return value.length > 3 && value.match(nameExp);

};

const postalcodeValidation = (value, length = 5) => {
  const postnumberExp = /^[0-9]/;
  return value.length === length && value.match(postnumberExp);
};

const phoneValidation = (value) => {
  const phoneExp = /^\+358[0-9]{9}$/;
  return value.match(phoneExp);
};

const isNumber = (value) => {
  const numericExpression = /^[0-9]+$/;
  return value.match(numericExpression);

};

const emailValidation = (value) => {
  const emailExp = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return value.match(emailExp);

};

const successMessage = document.getElementsByClassName('valid-message')[0];
const firstname = document.getElementsByName('firstname')[0];
const lastname = document.getElementsByName('lastname')[0];
const email = document.getElementsByName('email')[0];
const phone = document.getElementsByName('phone')[0];
const address = document.getElementsByName('address')[0];
const postalcode = document.getElementsByName('postalcode')[0];
const password = document.getElementsByName('password')[0];

const elemArr = [firstname, lastname, email, phone, address, postalcode, password];

document.getElementsByClassName('btn')[0].addEventListener('click',
    sendInputData);

