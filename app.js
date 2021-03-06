const submitButton = document.getElementById('claim-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const regexPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const password = document.getElementById('password');
const icon = document.getElementsByClassName('error-icon');

submitButton.addEventListener('click', e => {
    if (firstName.value === '') {
        firstName.classList.add('error'); //add red box to firstname input area
        document.getElementById('fn-error').classList.add('error'); //add the text
        icon[0].style.display = 'flex'; // add the icon
        e.preventDefault(); 
    } else {
        firstName.classList.remove('error')
        document.getElementById('fn-error').classList.remove('error');
        icon[0].style.display = 'none';
    }

    if (lastName.value === '') {
        lastName.classList.add('error');
        document.getElementById('ln-error').classList.add('error');
        icon[1].style.display = 'flex';
        e.preventDefault(); 
    } else {
        lastName.classList.remove('error')
        document.getElementById('ln-error').classList.remove('error');
        icon[1].style.display = 'none';
    }

    if (!emailAddress.value.match(regexPattern)) {
        emailAddress.classList.add('error');
        document.getElementById('email-error').classList.add('error');
        icon[2].style.display = 'flex';
        e.preventDefault();  
    } else {
        emailAddress.classList.remove('error')
        document.getElementById('email-error').classList.remove('error');
        icon[2].style.display = 'none';
    }

    if (password.value === '') {
        password.classList.add('error'); 
        document.getElementById('pass-error').classList.add('error'); 
        icon[3].style.display = 'flex';
        e.preventDefault(); 
    } else {
        password.classList.remove('error')
        document.getElementById('pass-error').classList.remove('error');
        icon[3].style.display = 'none';
    }
});
