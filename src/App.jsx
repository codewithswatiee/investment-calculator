import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 1000,
    annualInvestment: 120000,
    expectedReturn: 200,
    duration: 1
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInvestmentData(prevData => ({
      ...prevData,
      [name]: +value
    }));
  }

  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;
  
  return (
    <div className="center">
      <header id="header">
        <h1>Investment Calculator</h1>
      </header>
      
      <menu className="input-group">
        <Input name="initialInvestment" value={initialInvestment} onChangeFun={handleChange}>Initial Investment</Input>
        <Input name="annualInvestment" value={annualInvestment} onChangeFun={handleChange}>Annual Investment</Input>
        <Input name="expectedReturn" value={expectedReturn} onChangeFun={handleChange}>Expected Return (%)</Input>
        <Input name="duration" value={duration} onChangeFun={handleChange}>Investment Duration (years)</Input>
      </menu>

      <h2>Investment Results</h2>
      {investmentData.duration < 1 ? <p className="center">Invalid Enter duration more than one</p> :
      <Result data={investmentData}/> }
    </div>
  );
}

export default App;
