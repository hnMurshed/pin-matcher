function getPin () {
    const generatedPin = parseInt(Math.random()*10000);
    if ((generatedPin+'').length == 4) {
        return generatedPin;
    }
    else {
        return getPin ();
    }
}
function getGenerateInputNumber () {
    const generatedPin = getPin ();
    const pinInput = document.getElementById('pin-input');
    pinInput.value = generatedPin;

    return pinInput.value;
}
document.getElementById('generate-button').addEventListener('click', function () {
    getGenerateInputNumber ();
})

document.getElementById('calc-body').addEventListener('click', function (event) {
    const calcKey = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (event.target.innerText == 'C') {
        calcInput.value = '';
    }
    else if (event.target.innerText == '<') {
        calcInput.value = calcInput.value.replace(calcInput.value.charAt(calcInput.value.length -1 ), '');
    }
    else if (event.target.innerText >= 0){
        calcInput.value += calcKey;
    }
})

document.getElementById('unmatched-message').style.display = 'none';
document.getElementById('matched-message').style.display = 'none';
document.getElementById('try-field').style.display = 'none';

function getTryMessage () {
    const pinInput = document.getElementById('pin-input');
    const tryLeft = document.getElementById('try-left');
    if (tryLeft.innerText <= 1) {
        document.getElementById('no-try-field').innerText = 'No more try left, please generate a new pin';

        document.getElementById('try-left').innerText = 3;
        document.getElementById('try-field').style.display = 'none';
        pinInput.value = '';
    }
    else {
        document.getElementById('try-field').style.display = 'block';
        tryLeft.innerText = tryLeft.innerText -1;

        document.getElementById('no-try-field').innerText = '';
    }
}

document.getElementById('submit-btn').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input');
    const generatedInputNumber = pinInput.value;
    const calcInput = document.getElementById('calc-input');
    const calcInputNumber = calcInput.value;
    
    const unmatchedMessage = document.getElementById('unmatched-message');
    const matchedMessage = document.getElementById('matched-message');
    if (generatedInputNumber == calcInputNumber) {
        unmatchedMessage.style.display = 'none';
        matchedMessage.style.display = 'block';

        document.getElementById('try-field').style.display = 'none';
        document.getElementById('no-try-field').innerText = '';
        document.getElementById('try-left').innerText = 3;
        calcInput.value = '';
        pinInput.value = '';
    }
    else {
        unmatchedMessage.style.display = 'block';
        matchedMessage.style.display = 'none';
        getTryMessage ()
    }
    // pinInput.value = '';
    calcInput.value = '';
})
