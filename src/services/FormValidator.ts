export enum FormTypes {
  LOGIN = 'LOGIN',
  SIGININ = 'SIGININ',
  PROFILE_EDIT = 'PROFILE_EDIT',
  MESSAGE = 'MESSAGE',
}

interface Config {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
  formType: FormTypes;
}

export class FormValidator {
  form: HTMLFormElement;
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
  formType: FormTypes;
  submitButton: HTMLButtonElement | null;
  inputs: NodeListOf<HTMLInputElement>;

  constructor(config: Config, form: HTMLFormElement) {
    this.form = form;
    this.inputSelector = config.inputSelector;
    this.submitButtonSelector = config.submitButtonSelector;
    this.inactiveButtonClass = config.inactiveButtonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.errorClass = config.errorClass;
    this.formType = config.formType;
    this.submitButton = this.form.querySelector(this.submitButtonSelector);
    this.inputs = this.form.querySelectorAll(this.inputSelector);
  }

  showError(input: HTMLInputElement) {
    const inputError = this.form.querySelector(`#${input.id}-error`);
    inputError!.textContent = input.validationMessage;
    input.classList.add(this.inputErrorClass);
    inputError!.classList.add(this.errorClass);
  }

  hideError(input: HTMLInputElement) {
    const inputError = this.form.querySelector(`#${input.id}-error`);
    inputError!.textContent = '';
    input.classList.remove(this.inputErrorClass);
    inputError!.classList.remove(this.errorClass);
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
    const validateInput = (isValid: boolean) => (isValid ? this.hideError(input) : this.showError(input));

    switch (this.formType) {
      case FormTypes.LOGIN: {
        const isValid = Boolean(input.value.length);
        return validateInput(isValid);
      }
      case FormTypes.SIGININ: {
        const isValid = Boolean(input.value.length);
        return validateInput(isValid);
      }
      case FormTypes.PROFILE_EDIT: {
        const isValid = Boolean(input.value.length);
        return validateInput(isValid);
      }
      case FormTypes.MESSAGE: {
        const isValid = Boolean(input.value.length);
        return validateInput(isValid);
      }
      default:
        throw new Error('Validation error. Nothing to validate (no input)');
    }
  }

  addEventListeners() {
    this.inputs.forEach((input) => {
      input.addEventListener('focus', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
      input.addEventListener('blur', (e) => {
        this.validate(input);
        this.setButtonState(this.form.checkValidity());
      });
    });
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  enableValidation() {
    this.addEventListeners();
    this.setButtonState(this.form.checkValidity());
  }
}
