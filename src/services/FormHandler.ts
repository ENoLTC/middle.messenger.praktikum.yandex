import {FormValidator} from './FormValidator';

interface Config {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
  onSuccess: () => void;
}

export class FormHandler {
  form: HTMLFormElement;
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
  submitButton: HTMLButtonElement | null;
  inputs: NodeListOf<HTMLInputElement>;
  onSuccess: () => void;

  constructor(config: Config, form: HTMLFormElement) {
    this.inputSelector = config.inputSelector;
    this.submitButtonSelector = config.submitButtonSelector;
    this.inactiveButtonClass = config.inactiveButtonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.errorClass = config.errorClass;
    this.onSuccess = config.onSuccess;
    this.form = form;
    this.submitButton = this.form.querySelector(this.submitButtonSelector);
    this.inputs = this.form.querySelectorAll(this.inputSelector);
  }

  showError(input: HTMLInputElement) {
    const inputError = this.form.querySelector(`#${input.id}-error`);
    inputError!.textContent = input.validationMessage;
    inputError!.classList.add(this.errorClass);
    input.classList.add(this.inputErrorClass);
  }

  hideError(input: HTMLInputElement) {
    const inputError = this.form.querySelector(`#${input.id}-error`);
    inputError!.textContent = '';
    inputError!.classList.remove(this.errorClass);
    input.classList.remove(this.inputErrorClass);
  }

  setButtonState(isActive: boolean) {
    if (isActive) {
      this.submitButton!.classList.remove(this.inactiveButtonClass);
      this.submitButton!.disabled = false;
    } else {
      this.submitButton!.classList.add(this.inactiveButtonClass);
      this.submitButton!.disabled = true;
    }
  }

  validate(input: HTMLInputElement) {
    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (!input.checkValidity()) {
      const inputCustomValidation = new FormValidator(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(input); // Выявим ошибки
      const customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
      this.showError(input);
    } else {
      this.hideError(input);
    }
  }

  addInputFocusLiseners() {
    this.inputs.forEach((input) => {
      input.addEventListener('focus', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
    });
  }

  removeInputFocusLiseners() {
    this.inputs.forEach((input) => {
      input.removeEventListener('focus', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
    });
  }

  addInputBlurLiseners() {
    this.inputs.forEach((input) => {
      input.addEventListener('blur', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
    });
  }

  removeInputBlurLiseners() {
    this.inputs.forEach((input) => {
      input.removeEventListener('blur', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
    });
  }

  addSubmitEventListener() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.setButtonState(this.form.checkValidity());
      if (this.form.checkValidity()) {
        this.onSuccess();
      }
    });
  }

  removeSubmitEventListener() {
    this.form.removeEventListener('submit', (e) => {
      e.preventDefault();
      this.setButtonState(this.form.checkValidity());
      if (this.form.checkValidity()) {
        this.onSuccess();
      }
    });
  }

  addEventListeners() {
    this.addInputFocusLiseners();
    this.addInputBlurLiseners();
    this.addSubmitEventListener();
  }

  _removeEventListeners() {
    this.removeInputFocusLiseners();
    this.removeInputBlurLiseners();
    this.removeSubmitEventListener();
  }

  enableValidation() {
    this.addEventListeners();
    this.setButtonState(this.form.checkValidity());
  }
}
