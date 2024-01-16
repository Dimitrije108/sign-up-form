const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const noMatch = document.createElement('div');
const passInfo = document.createElement('ul');
const tipOne = document.createElement('li');
const tipTwo = document.createElement('li');
const tipThree = document.createElement('li');
const tipFour = document.createElement('li');

// Validate when both passwords match

confirmPass.addEventListener('input', () => {
    if (pass.value !== confirmPass.value) {
        noMatch.classList.add('notMatching');
        noMatch.textContent = 'Passwords do not match';

        confirmPass.style.border = '1px solid red';
        confirmPass.insertAdjacentElement('afterend', noMatch);
    } else {
        noMatch.remove();
        confirmPass.style.border = '1px solid green';
    }
});

// Provides tips to input the correct password format

pass.addEventListener('focus', () => {
    tipOne.textContent = '8 - 16 characters';
    tipTwo.textContent = '1 uppercase letter';
    tipThree.textContent = '1 lowercase letter';
    tipFour.textContent = '1 number';

    passInfo.classList.add('tipList');

    passInfo.appendChild(tipOne);
    passInfo.appendChild(tipTwo);
    passInfo.appendChild(tipThree);
    passInfo.appendChild(tipFour);
    pass.insertAdjacentElement('afterend', passInfo);
})

pass.addEventListener('blur', () => {
    passInfo.remove();
})