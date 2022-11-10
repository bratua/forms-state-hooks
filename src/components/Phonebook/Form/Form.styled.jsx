import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;

  input {
    margin-bottom: 10px;
  }

  h3 {
    margin: 0 2px 0 5px;
    text-align: left;
  }
`;

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 10px;

  h3 {
    margin: 7px 0px;
  }
`;

export const StyledFormikField = styled(Field)`
  margin-bottom: 10px;
`;

export const StyledFormikErrorMessage = styled(ErrorMessage)`
  margin-bottom: 10px;
  color: red;
`;
