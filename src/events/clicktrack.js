import React,{useState} from 'react';
import image from './img-o.jpg'
const ClickTracker = () => {
    const [target, setTarget] = useState('');
   
    const handletrack = (e) => {
   setTarget(e.target.textContent)
   console.log(e,
    e.target,
    e.currentTarget
    );
};

  return (
    <>
      {/* event-03 ex */}
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>One</button>
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>Two</button>
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>Three</button>
      <h1>Last button clicked is: {target}</h1>

      {/* event-04 ex */}
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>
      <img src={image} alt="" />
       </button>
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>
      <img src={image} alt="" />
       </button>
      <button onClick={handletrack} className='bg-slate-200 w-24 rounded-md'>
      <img src={image} alt="" />
       </button>
    </>
  );
};

export default ClickTracker;
