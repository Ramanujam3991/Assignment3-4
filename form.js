"use strict"

var $= function(id){
    return document.getElementById(id);
}

var formRow = function(){
    var form=  $("form");
    var row = form.getElementsByTagName('section');
    for(var i = 0 ; i< row.length; i++)
    {
         row[i].removeAttribute('class')
    }
   this.setAttribute('class','highlight');

    
}


var requiredValidation = function(){
    var isValid = true;
    var requiredFields = document.getElementsByClassName('required');
    var validation_Message = $('validation-message');
    var errorList = [];
    var mandatoryFieldCheck = true;
    //Mandatory field validation
    for(var i=0;i<requiredFields.length;i++)
    {
  
        if(requiredFields[i].value == "")
        {
            isValid = false;
            mandatoryFieldCheck = false;
           requiredFields[i].style.backgroundColor='red';
        }
        else{
            requiredFields[i].style.backgroundColor='white';
        }
    }
    if(!mandatoryFieldCheck)
        errorList.push('Please enter all mandatory fields');
    //Phone number validation
    if(isNaN($('phone').value) || $('phone').value=='')
    {
        errorList.push('Phone number must be numeric');
        isValid = false;
        $('phone').style.backgroundColor='red';
    }

    //email validation
    if($('email').value == '' || $('email').value != $('emailVerify').value )
    {
        errorList.push('Email re-entered does not match');
        isValid = false;
        $('emailVerify').style.backgroundColor='red';
    }

    //count should match with the number of names provided
    if($('adults').value != $('anames').value.split(',').length )
    {
        errorList.push('Number of adults should be numeric and it do not match with name list');
        isValid = false;
        $('adults').style.backgroundColor='red';
    }

    if($('children').value != $('cnames').value.split(',').length )
    {
        errorList.push('Number of children should be numeric and it do not match with name list');
        isValid = false;
        $('children').style.backgroundColor='red';
    }

        

    if(!isValid)
    {
        validation_Message.style.display='block';
        let message = '<ol>';
        errorList.forEach(function(err){
            message+='<li>'+err+'</li>';
        });
        message += '</ol>';
        validation_Message.innerHTML=message;
    }
    else{
        validation_Message.style.display='none';
        alert('Form is succesfully being submitted!!');
    }
  

    return isValid;
}

window.onload = function(){
    var validation_Message = $('validation-message');
   validation_Message.style.display = "none";

    var form=  $("form");
    var section = form.getElementsByTagName('section');

    for(var i = 0 ; i< section.length; i++)
    {
        section[i].onclick = formRow;
    }

    var submit = document.getElementById("submit");
    submit.onclick = requiredValidation;
    
}