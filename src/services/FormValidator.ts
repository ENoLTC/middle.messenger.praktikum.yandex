export class FormValidator {
  // Установим пустой массив сообщений об ошибках
  invalidities: string[] = [] as string[];

  // Метод, проверяющий валидность
  checkValidity(input: HTMLInputElement) {
    const { validity } = input;

    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
    }

    if (validity.rangeOverflow) {
      const max = getAttributeValue(input, 'max');
      this.addInvalidity('The maximum value should be ' + max);
    }

    if (validity.rangeUnderflow) {
      const min = getAttributeValue(input, 'min');
      this.addInvalidity('The minimum value should be ' + min);
    }

    if (validity.stepMismatch) {
      const step = getAttributeValue(input, 'step');
      this.addInvalidity('This number needs to be a multiple of ' + step);
    }

    // И остальные проверки валидности...
  }

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity(message: string) {
    this.invalidities.push(message);
  }

  // Получаем общий текст сообщений об ошибках
  getInvalidities() {
    return this.invalidities.join('. \n');
  }

  getInvaliditiesForHTML() {
    return this.invalidities.join('\n');
  }
}
