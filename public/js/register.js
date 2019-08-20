function check()
{
     var password=document.getElementById("pass").value;
     var passregex =/^(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{6,}/;
     if(!passregex.test(password))
    {
     alert("The password has less than 6 characters or must be a combination of charatacters,numbers and at least a capital letter!!!");
     document.getElementById("pass").style.color = 'red';
     document.getElementById("pass").style.borderColor='red'; 
    }
  
     
  }

  function OKK(){
    if(document.getElementById("pass").value != document.getElementById("confirm").value)
    { 
    alert('Confirm Password Not Match');
    document.getElementById("confirm").style.color = 'red';
    document.getElementById("confirm").style.borderColor='red';     
    }
    else alert('WELCOME')
  }
  
  