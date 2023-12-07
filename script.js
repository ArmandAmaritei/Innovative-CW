const inputField = document.getElementById('idInputBox')
const displayText = document.getElementById('dispayText')


inputField.addEventListener('input', function(){
    const inputValue = inputField.value;

    displayText.textContent = inputValue
})