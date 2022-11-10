import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { StyledFormikForm } from './Form.styled';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

const nameId = nanoid();
const numberId = nanoid();

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Введите имя'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Введите номер'),
});

export const FormikForm = ({ onSubmitForm }) => {
  const handleSubmit = ({ name, number }, actions) => {
    onSubmitForm({ name, number });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Section title="Phonebook+Formik">
        <StyledFormikForm autoComplete="off">
          <label htmlFor={nameId}>
            <h3>Name</h3>

            <Field
              id={nameId}
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            ></Field>
            <ErrorMessage name="name" component="div" />
          </label>

          <label htmlFor={numberId}>
            <h3>Number</h3>
            <Field
              id={numberId}
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            ></Field>
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </StyledFormikForm>
      </Section>
    </Formik>
  );
};
