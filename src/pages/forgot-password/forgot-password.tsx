/* Styles */
import './forgot-password.css';
import 'react-toastify/dist/ReactToastify.css';
/* Hooks */
import { NavigateFunction, useNavigate } from 'react-router-dom';
/* Components */
import { Button } from 'primereact/button';
/* Configs */
import { Route } from '../../configs/enums';
/* Utils */
import OTPInput from 'react-otp-input';
import { useState } from 'react';

const handleForgotPassword = async (event: React.FormEvent, navigate: NavigateFunction) => {
  event.preventDefault();
  navigate(Route.FORGOT_PASSWORD);
};
/* Tsx Method */
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  return (
    <>
      <div className="auth-page-title-container">
        <p className="auth-page-title">Forgot Password</p>
        <p className="auth-page-description">Please enter the otp sent for email@example.com in the field below </p>
      </div>
      <div className="auth-page-form-container">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          containerStyle={{
            width: '20vw',
            justifyContent: 'space-evenly',
          }}
          inputStyle="otp-single-field"
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className="auth-page-primary-button-container">
        <Button id="login" label="Verify" type="submit" disabled={false} />
      </div>

      <div className="auth-page-secondary-button-container">
        <span className="auth-page-secondary-button" id="forgot-password" onClick={(e) => handleForgotPassword(e, navigate)}>
          Resend OTP
        </span>
      </div>
    </>
  );
};

export default ForgotPassword;
