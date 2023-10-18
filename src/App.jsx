import React, { useState } from 'react'
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';

import './App.css'

function App() {

  const [userInput, setUserInput] = useState(null);
 

       const calculateHandler = (userInput) => {

         setUserInput(userInput);

       };


        const yearlyDate = [];

        if (userInput){

        let currentSavings =userInput ['current-savings'];
        const yearlyContribution =userInput ['yearly-contribution'];
        const expectedReturn =userInput ['expected-return'] /100;
        const duration =userInput ['duration'];
      
         for (let i=0; i < duration; i++) {
          const yearlyInsterest = currentSavings * expectedReturn;
          currentSavings += yearlyInsterest + yearlyContribution;
       
         yearlyDate.push({
           year: 1+1,
           yearlyInsterest: yearlyInsterest,
           savingsEndOfYear: currentSavings,
           yearlyContribution: yearlyContribution,

         });
        }
        }

        
   
  return(
           
    <div>
          

      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyDate} initialInvestment={userInput['current-savings']} />}


    </div>
  );

}

export default App;
