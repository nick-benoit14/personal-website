// var bootstrap = require('bootstrap-loader');

function isValidEmail(val){
  return val.match(/.+@.+\.[a-z]+/);
}

function isValidName(val){
  return val.match(/.+/);
}

function validateInput(successClass, errorClass, validator){
  return function(e){
    var input = e.target;
    if(validator(input.value)){
      input.parentElement.className = successClass;
    }else{
      input.parentElement.className = errorClass;
    }
  }
}

function addEventListeners(){
  var contactName = document.getElementById('contact-name');
  var contactEmail = document.getElementById('contact-email');
  var contactMessage = document.getElementById('contact-message');

  if(contactEmail){
    contactEmail.onblur = validateInput(
      "form-group has-success",
      "form-group has-error",
      isValidEmail
    );
  }

  if(contactName){
    contactName.onblur = validateInput(
      "form-group has-success",
      "form-group has-error",
      isValidName
    );
  }

  if(contactMessage){
    contactMessage.onblur = validateInput(
      "form-group has-success",
      "form-group has-error",
      isValidName
    );
  }}

addEventListeners();
