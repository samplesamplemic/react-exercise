import React,{ useState } from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage = (props) => {
 const [lange, setLange] = useState({ //context-02
    en: "English",
    it: "Italiano"
 })

    return ( 
        <>
        <LanguageContext.Consumer>
            { lang => {
                return (
             <h1
             className="text-2xl font-bold pl-4 border-l-2 "
             >{lange[lang]}</h1> 

                )
            }}
        </LanguageContext.Consumer>
        </>
     );
}
 
export default DisplayLanguage;