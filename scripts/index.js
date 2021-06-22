const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__field_title')
const jobInput = document.querySelector('.popup__field_subtitle')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')

console.log({popupOpenButtonElement, popupElement, popupCloseButtonElement})


const openPopup = function() {
    popupElement.classList.add('popup_is-opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
const closePopup = function() {
    popupElement.classList.remove('popup_is-opened')
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}


popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler)