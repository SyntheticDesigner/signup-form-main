import React, { useState, useRef, useEffect } from "react";
import { SignUpForm } from "../styles/FormStyles";

export default function SignUp() {
  const input = { value: "", valid: false };
  const [email, setEmail] = useState(input);
  const [fName, setFName] = useState(input);
  const [lName, setLName] = useState(input);
  const [password, setPassword] = useState(input);
  const [validForm, setValidForm] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      if (!e.target[i].checkValidity() || !e.target[i].value.length) {
        console.log("invalid");
        setValidForm(false);
        return;
      } else {
        setValidForm(true);
      }
    }
  };

  const isValid = (target) => {
    if (target.value.length && target.checkValidity()) {
      console.log("target valid");
      return true;
    } else return false;
  }

  useEffect(() => {
    if (validForm) {
      console.log("Success");
    }
  });

  return (
    <SignUpForm onSubmit={submit} validForm={`${validForm}`}>
      <div valid={`${fName.valid}`} errormsg='First Name cannot be empty'>
        <input
          type='text'
          name='fName'
          placeholder='First Name'
          value={fName.value}
          onChange={(e) =>
            setFName({ value: e.target.value, valid: e.target.checkValidity() })
          }
        />
      </div>
      <div valid={`${lName.valid}`} errormsg='Last Name cannot be empty'>
        <input
          type='text'
          name='lName'
          placeholder='Last Name'
          value={lName.value}
          onChange={(e) =>
            setLName({ value: e.target.value, valid: e.target.checkValidity() })
          }
        />
      </div>
      <div valid={`${email.valid}`} errormsg='Looks like this is not an email'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email.value}
          onChange={(e) =>
            setEmail({ value: e.target.value, valid: e.target.checkValidity() })
          }
        />
      </div>
      <div valid={`${password.valid}`} errormsg='Password cannot be empty'>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password.value}
          onChange={(e) =>
            setPassword({
              value: e.target.value,
              valid: e.target.checkValidity(),
            })
          }
        />
      </div>
      <input
        type='submit'
        name='submitBtn'
        formNoValidate='formnovalidate'
        value='CLAIM YOUR FREE TRIAL'
      />
      <p>
        By clicking the button, you are agreeing to our{" "}
        <b>Terms and Services</b>
      </p>
    </SignUpForm>
  );
}

// setFName({value: e.target.value, valid: e.target.checkValidity()})
