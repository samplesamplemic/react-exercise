import { useEffect, useMemo, useRef, useState } from "react";
//import {useForm}from "react-hook-form";



const CarDetails = () => {
 
    let initialData = {
        model: 'Fiat Panda',
         year: '2000',
         color: 'white'
     };
     const inputRef = useRef(initialData)
  const [car, setCar] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
          setCar(({ 
            model: e.target.elements.model.value,
            year: e.target.elements.year.value,
            color: e.target.elements.color.value}))
        
     }
 useEffect(() => {
    console.log(car);
 }, [car]);

//  useMemo(() => {
//     console.log('work')
//   },[inputRef])

  useEffect(() => {
    console.log('work');
    inputRef.current.reset();
   },[inputRef])

 

    return (
        <>
        <form action=""
        onSubmit={handleSubmit}
        ref={inputRef}
        >
        <h2 className="text-lg font-semibold pt-6 pb-2 border-t-2 text-center ">Car Details</h2>
              
            <div className='flex gap-4'>
              <input className="border-b-2 border-black" type="text" name='model' placeholder="model" defaultValue={initialData.model} />
                <input className="border-b-2 border-black" type="text" name='year' placeholder="year"  defaultValue={initialData.year}  />
                <input className="border-b-2 border-black" type="text" name='color' placeholder="color"  defaultValue={initialData.color} />
                <button className="border-2 border-black rounded-md" type="submit">Submit</button>
            </div>

        </form>
        </>
      );
}
 
export default CarDetails;
