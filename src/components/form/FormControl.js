import styles from './FormControl.module.css'
import React,{useState} from 'react';

const defaultInputs={
  'current-savings':1000,
  'yearly-contribution':100,
 'expected-return':7,
 'duration':12

}
const FormControl = (props) => {

 

  const [userInputs,setInput]=useState(defaultInputs)
 

  const formSubmission=(event)=>{
    event.preventDefault();
    props.onUserSubmit(userInputs) 
    }
    
   

  
  const resetFun=()=>{
    setInput(defaultInputs);
  }

const buttonClick=()=>{
  console.log('submit')
}

const inputChangeHandler=(input,value)=>{
  setInput((prevInput)=>{
    return{
      ...prevInput,
      [input]:+value,
    };
  });
};




return ( 
  <form className={styles['form']} onSubmit={formSubmission} >
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
           type="number" id="current-savings" 
             onChange={(event)=>inputChangeHandler('current-savings',event.target.value)} 
             value={userInputs['current-savings']}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" 
          onChange={(event)=>inputChangeHandler('yearly-contribution',event.target.value)}
          value={userInputs['yearly-contribution']} />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"  
          onChange={(event)=>inputChangeHandler('expected-return',event.target.value)}
          value={userInputs['expected-return']} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" 
           onChange={(event)=>inputChangeHandler('duration',event.target.value)}
           value={userInputs['duration']} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className={styles["buttonAlt"]} onClick={resetFun}>
          Reset
        </button>
        <button type="submit" className={styles.button} onClick={buttonClick}>
          Calculate
        </button>
      </p>

    </form>
  );
};

export default FormControl;
