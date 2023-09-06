import styles from './ResultFolder.module.css'


const ResultFolder=(props)=>{
  const calculateTotalInterest = () => {
    return props.output.reduce((total, yearData) => total + yearData.yearlyInterest, 0);
  };

  
    return(
        <table className={styles["result"]}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.output.map((yearData)=> (
          <tr key={Math.random()}>
          <td>{yearData.year}</td>
          <td>{yearData.savingsEndOfYear}</td>
          <td>{yearData.yearlyInterest}</td>
          <td>{calculateTotalInterest()}</td>
          <td>{yearData.yearlyContribution}</td>
        </tr>
))}

        </tbody>
      </table>

    );
}

export default ResultFolder;