document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber =  document.getElementById('pbone-number');
    const phoneNumberValue = phoneNumber.value;
    console.log(phoneNumberValue)
})