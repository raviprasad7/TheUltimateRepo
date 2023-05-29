import { FC, FormEvent, ReactElement, useState } from 'react';
import {
  AgeValidator,
  EmailValidator,
  FormValidator,
  NameValidator,
} from '../../utils/validator.utils';

const Form: React.FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const formValidator = new FormValidator(),
    nameValidator = new NameValidator(),
    emailValidator = new EmailValidator(),
    ageValidator = new AgeValidator();

  formValidator
    .setNext(nameValidator)
    .setNext(emailValidator)
    .setNext(ageValidator);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValidator.validate({ name, email, age })) {
      alert('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type='text'
          value={age}
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
