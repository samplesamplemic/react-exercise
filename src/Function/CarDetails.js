import { useEffect, useMemo, useRef, useState } from "react";
//import {useForm}from "react-hook-form";



const CarDetails = () => {
 
    let initialData = {
        model: 'Fiat Pandas',
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
    inputRef.current.value = '';
  },[inputRef])

 

    return (
        <>
        <form action=""
        onSubmit={handleSubmit}
        ref={inputRef}
        >
            <div>
                <input type="text" name='model' placeholder="model" defaultValue={initialData.model} />
                <input type="text" name='year' placeholder="year"  defaultValue={initialData.year}  />
                <input type="text" name='color' placeholder="color"  defaultValue={initialData.color} />
                <button type="submit">Submit</button>
            </div>

        </form>
        </>
      );
}
 
export default CarDetails;
