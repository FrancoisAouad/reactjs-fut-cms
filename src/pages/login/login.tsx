/* Styles */
import './login.css';
import '../../common/common-css/authentication-routes.css';
/* Hooks */
import { NavigateFunction, useNavigate } from 'react-router-dom';
/* Components */
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './login.validation';
/* Services */
import { login } from './login.service';
/* Configs */
import { Route, ToastType } from '../../configs/enums';
/* Utils */
import { getErrorMessage, showToast } from '../../utils/common-utils';

const OwnPassword = (props: any) => (
  <Password
    {...props}
    toggleMask
    panelStyle={{
      display: 'none',
      // borderRadius: '10px',
      // boxShadow: 'none',
      // borderWidth: '1px',
      // borderColor: Color.CAMBRIDGE_BLUE,
      // borderStyle: 'solid',
    }}
    // footer={
    //   <div>
    //     <h4>Required</h4>
    //     <ul>
    //       <li
    //         style={{
    //           color: props.hasMinimumCharacters ? 'green' : 'red',
    //         }}
    //       >
    //         Password must have at least 8 characters
    //       </li>
    //       <li
    //         style={{
    //           color: props.hasUppercase ? 'green' : 'red',
    //         }}
    //       >
    //         Password must contain 1 uppercase character
    //       </li>
    //       <li
    //         style={{
    //           color: props.hasLowerCase ? 'green' : 'red',
    //         }}
    //       >
    //         Password must contain 1 lowercase character
    //       </li>
    //       <li
    //         style={{
    //           color: props.hasNumeric ? 'green' : 'red',
    //         }}
    //       >
    //         Password must contain 1 numeric character
    //       </li>
    //     </ul>
    //   </div>
    // }
  />
);

const handleLogin = async (email: string, password: string, navigate: NavigateFunction) => {
  try {
    await login(email, password);
    showToast(ToastType.SUCCESS, 'Signed in');
    navigate(Route.HOME);
  } catch (err: any) {
    const message = getErrorMessage(err.message);
    showToast(ToastType.ERROR, message);
  }
};

const handleForgotPassword = async (event: React.FormEvent, navigate: NavigateFunction) => {
  event.preventDefault();
  navigate(Route.FORGOT_PASSWORD);
};
/* Tsx Method */
const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values.email, values.password, navigate);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="login-form">
          <div className="auth-page-title-container">
            <p className="auth-page-title">Login</p>
            <p className="auth-page-description">Please enter your credentials in the fields below</p>
          </div>

          <div className="auth-page-form-container">
            <div className="form-group">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <Field as={InputText} type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="auth-page-error" />
            </div>

            <div className="form-group">
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <Field
                as={OwnPassword}
                hasMinimumCharacters={values.password.length >= 8}
                hasUppercase={values.password.search(/[A-Z]/) != -1}
                hasLowerCase={values.password.search(/[a-z]/) != -1}
                hasNumeric={values.password.search(/[0-9]/) != -1}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="auth-page-error" />
            </div>
          </div>

          <div className="auth-page-primary-button-container">
            <Button id="login" label="Login" type="submit" disabled={isSubmitting} />
          </div>

          <div className="auth-page-secondary-button-container">
            <span className="auth-page-secondary-button" onClick={(e) => handleForgotPassword(e, navigate)}>
              Forgot Password?
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
