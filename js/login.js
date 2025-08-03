document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber =  document.getElementById('phone-number');
    const phoneNumberValue = phoneNumber.value;

    const pinNumber =  document.getElementById('pin-number');
    const pinNumberValue = pinNumber.value;

    console.log(phoneNumberValue, pinNumberValue);

    // This is temporary

    if(phoneNumberValue==='5555' && pinNumberValue === '55'){
        console.log('Login Successfully');
        window.location.href='/home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
}  
)