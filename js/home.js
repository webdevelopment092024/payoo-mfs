document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddMoney = document.getElementById('input-add-money').value;

    const pinNumberInput = document.getElementById('input-pin').value;
        console.log(inputAddMoney, pinNumberInput)

})