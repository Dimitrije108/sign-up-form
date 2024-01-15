const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const noMatch = document.createElement('div');

confirmPass.addEventListener('input', () => {
    if (pass.value !== confirmPass.value) {
        noMatch.classList.add('notMatching');
        noMatch.textContent = 'Passwords are not matching';
        confirmPass.insertAdjacentElement('afterend', noMatch);
        confirmPass.style.border = '1px solid red';
    } else {
        noMatch.remove();
        confirmPass.style.border = '1px solid green';
    }
});