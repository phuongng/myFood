import { useRef, useState } from 'react';
import styles from './Checkout.module.css';


// get value and return true if value is empty. 
//using "trim" (white space) to check if the input is empty
const isEmpty = (value) => value.trim() === '';

//to check if the input have 5 characters for the zip code
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    // the "current" will give you access to the actual value stored
    // in the ref, this this case, it's the input element
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    // Submit cart data
    props.onConfirm = ({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };


  const nameControlClasses = `${styles.control} 
  ${formInputsValidity.name ? '' : styles.invalid
    }`;

  const streetControlClasses = `${styles.control} 
  ${formInputsValidity.street ? '' : styles.invalid
    }`;

  const postalCodeControlClasses = `${styles.control} 
  ${formInputsValidity.postalCode ? '' : styles.invalid
    }`;

  const cityControlClasses = `${styles.control} 
  ${formInputsValidity.city ? '' : styles.invalid
    }`;

  return (
    // onSubmit: when click on Submit button, the data will be sent
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />

        {!formInputsValidity.name && <p>Please enter your name! </p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor='street'> Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street! </p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'> Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode &&
          (<p>Please enter a valid postal code (5 characters long)! </p>)}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor='city'> City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city! </p>}
      </div>

      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;