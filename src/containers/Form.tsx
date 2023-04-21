import { FC } from "react";
import { AgeValidator, EmailValidator, FormValidator, NameValidator } from "../utils/validator.utils";

const Form: FC<JSX.Element> = () => {
  const formValidator = new FormValidator(),
    nameValidator = new NameValidator(),
    emailValidator = new EmailValidator(),
    ageValidator = new AgeValidator();

  formValidator
    .setNext(nameValidator)
    .setNext(emailValidator)
    .setNext(ageValidator);

  return <></>;
}