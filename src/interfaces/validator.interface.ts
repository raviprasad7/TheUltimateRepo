interface Validator {
  setNext(nextValidator: Validator): Validator;
  validate(value: string): boolean;
}