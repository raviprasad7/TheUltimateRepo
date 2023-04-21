class BaseValidator implements Validator {
  nextValidator: Validator | null = null;

  setNext(validator: Validator): Validator {
    this.nextValidator = validator;
    return validator;
  }

  validate(value: string): boolean {
    if (this.nextValidator) {
      return this.nextValidator.validate(value);
    }

    return true;
  }
}

export class FormValidator extends BaseValidator {
  validate(value: any): boolean {
    if (!value.name || !value.email || !value.age) {
      alert('Please enter all the input fields');
      return false;
    }
    return super.validate(value);
  }
}

export class NameValidator extends BaseValidator {
  validate(value: any): boolean {
    if (!/^[A-Z][A-Za-z\s]*$/.test(value.name)) {
      alert('Please enter a valid name');
      return false;
    }
    return super.validate(value);
  }
}

export class EmailValidator extends BaseValidator {
  validate(value: any): boolean {
    if (!/\S+@\S+\.\S+/.test(value.email)) {
      alert('Please enter a valid email');
      return false;
    }
    return super.validate(value);
  }
}

export class AgeValidator extends BaseValidator {
  validate(value: any): boolean {
    if (isNaN(parseInt(value.age)) || parseInt(value.age) < 18) {
      alert('Please enter a valid age');
      return false;
    }
    return super.validate(value)
  }
}