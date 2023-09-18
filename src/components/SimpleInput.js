import { useEffect, useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const enterNameIsValid = enteredName.trim() !=='';
  const nameInputIsInvalid = !enterNameIsValid && enteredNameTouched;
   

  useEffect(()=>{
    if(enterNameIsValid ){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }


  },[enterNameIsValid])

  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

 

  const formSubmissionHandler = event =>{

    event.preventDefault();

    setEnteredNameTouched(true)
    if(!enterNameIsValid){
      return;
    }
    console.log(enteredName);
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ?  
  'form-control invalid' :
  'form-control' ;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text'
        id='name'
        onChange={nameInputChangeHandler} 
        value={enteredName}
        onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text" >Name nust not be empty</p> }
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
