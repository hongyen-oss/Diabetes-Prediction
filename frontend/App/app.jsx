import React, { useState } from 'react';
import InputScreen from './screens/InputScreen';
import ResultScreen from './screens/ResultScreen';

function App() {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState(null);

  const handlePredict = (data) => {
    setUserInput(data);
    setStep(2);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Onyx Diabetes AI</h1>
      {step === 1 ? (
        <InputScreen onPredict={handlePredict} />
      ) : (
        <ResultScreen info={userInput} onBack={() => setStep(1)} />
      )}
    </div>
  );
}

export default App;