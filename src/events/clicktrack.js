import React,{useState} from 'react';

const ClickTracker = () => {
    const [target, setTarget] = useState('');
  
    const handletrack = (e) => {
   setTarget(e.target.textContent)
};

  return (
    <>
      <button onClick={handletrack}>One</button>
      <button onClick={handletrack}>Two</button>
      <button onClick={handletrack}>Three</button>
      <h1>Last button clicked is: {target}</h1>
    </>
  );
};

export default ClickTracker;
