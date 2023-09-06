import Header from "./components/header/Header";
import FormControl from "./components/form/FormControl";
import ResultFolder from "./components/ResultFolder/ResultFolder";

function App() {
  const yearlyData = [];
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

     // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['duration'];
   

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      //  totalInterests+=yearlyInterest
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
    
      });
    }
    

    // do something with yearlyData ...
  };
  

  return (
    <div>
     <Header/>
     <FormControl input={calculateHandler}/>
    {yearlyData.length===0 && <h3>no data submitted</h3>})
     
     
      <ResultFolder output={yearlyData}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      
    </div>
  );
}

export default App;
