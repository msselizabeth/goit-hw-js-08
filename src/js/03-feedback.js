import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener( 'submit', onSubmit);

onUploadPage();

let formData = {};

function onFormData(e) {
  formData = {
    email: refs.email.value,
    message: refs.message.value
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(e){
    e.preventDefault();
   
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

}

function onUploadPage (){
    const saveValues = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(saveValues){
       refs.message.value = saveValues.message || "";
       refs.email.value = saveValues.email || "";
    }
}