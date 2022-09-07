import  {useContext, useState} from 'react';
import {LanguageContext} from '../Composition/LanguageContext';

//useContext
const DisplayLanguage2 = () => {
    const lang = useContext(LanguageContext);
    
    return (  
        <>
         <h3 className='basis-full text-center'> Language: {lang}</h3>

        </>
    );
}
 
export default DisplayLanguage2;
