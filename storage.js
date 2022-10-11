const form_names = document.getElementById('form_names');

const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const patronymic = document.getElementById('patronymic');

form_names.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('first_name', first_name.value);
    localStorage.setItem('last_name', last_name.value);
    localStorage.setItem('patronymic', patronymic.value);
});

const load_button = document.getElementById('load_button');
load_button.addEventListener('click', function () {
    first_name.value = localStorage.getItem('first_name');
    last_name.value = localStorage.getItem('last_name');
    patronymic.value = localStorage.getItem('patronymic');
});