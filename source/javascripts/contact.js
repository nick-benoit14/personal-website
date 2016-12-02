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

function getFormData(contact){
  return {
    name: contact.contactName.value,
    email: contact.contactEmail.value,
    message:contact.contactMessage.value
  };
}

function handlePostContactResponse(resp){
  if(resp.target.status == 200){
    return alert("Your message was successfully sent!");
  }
  alert("Your message failed to send!");
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
    postContact(data);
  }
}

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
