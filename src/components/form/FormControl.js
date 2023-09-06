import styles from './FormControl.module.css'
import React,{useState} from 'react';

const FormControl = (props) => {

  const [inputs,setInput]=useState('')
  const [savings,setSavings]=useState('')
  const [contribution,setContribution]=useState('')
  const [interestDuration,setDuration]=useState('')



  const currentSavings=(event)=>{
    setInput(event.target.value)
    console.log(inputs)
  }
  const yearlyContribution=(event)=>{
    setSavings(event.target.value)
    
  }
  const expectedInterest=(event)=>{
    setContribution(event.target.value)
    
  }
  
  const duration=(event)=>{
    setDuration(event.target.value)
    
  }

  const formSubmission=(event)=>{
    event.preventDefault()
    const info={
      
      currentSavings:inputs,
      yearlyContribution:savings,
      expectedInterest:contribution,
     duration:interestDuration
  
    }
    
    props.input(info)
setInput('')
setSavings('')
setContribution('')
setDuration('')
    
  }

const buttonClick=()=>{
  console.log('submit')
}





  return ( 
  <form className={styles['form']} onSubmit={formSubmission} >
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={currentSavings} value={inputs}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={yearlyContribution} value={savings}/>
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"  onChange={expectedInterest} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={interestDuration} onChange={duration} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className={styles["buttonAlt"]}>
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
