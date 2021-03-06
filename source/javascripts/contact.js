// Form Validation
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

// Form resonse

function hasValidInput(){
  var contactName = document.getElementById('contact-name');
  var contactEmail = document.getElementById('contact-email');
  var contactMessage = document.getElementById('contact-message');
  return (
    isValidName(contactName.value) &&
    isValidEmail(contactEmail.value) &&
    isValidName(contactMessage.value)
  );
}

function successfulMessage(){
  return '<h3 style="color:green;">Message successfully sent!</h3>'
}

function unsuccessfulMessage(){
  return '<h3 style="color:red;">Message was not successfully sent!</h3>'
}

function getFormData(contact){
  return {
    name: contact.contactName.value,
    email: contact.contactEmail.value,
    message:contact.contactMessage.value
  };
}

function handlePostContactResponse(resp){
  var result = document.getElementById('result');
  if(resp.target.status == 200){
    return result.innerHTML = successfulMessage();
  }
  result.innerHTML = unsuccessfulMessage();
}

function postContact(contact){
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.addEventListener("load", handlePostContactResponse);
  xmlhttp.open("POST", "https://pacific-fjord-97361.herokuapp.com/contacts");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({contact: contact}));
}

function submitContact(contact){
  return function(){
    var data = getFormData(contact);
    if(hasValidInput()){
      return postContact(data);
    }
    alert("Inputs are not valid");
  }
}


// Create event listeners

function addEventListeners(){
  var contactName = document.getElementById('contact-name');
  var contactEmail = document.getElementById('contact-email');
  var contactMessage = document.getElementById('contact-message');
  var submitButton = document.getElementById('submit-button');

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
  }

  if(submitButton){
    submitButton.onclick = submitContact({
      contactName,
      contactEmail,
      contactMessage
    });
  }
}

addEventListeners();
