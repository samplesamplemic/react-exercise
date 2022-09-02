import {useState} from 'react';

const useForm = (initialState = {}) => {
const [user, setUser] = useState(initialState)

 const handleChange = (e) => {
 setUser((prev) => ({...prev, [e.target.name]:e.target.value}))
 }

    return {
        formData: user,
        handleChange: handleChange,
    }
}
 
export default useForm;