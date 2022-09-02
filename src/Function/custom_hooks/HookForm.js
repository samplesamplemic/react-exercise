import useForm from './useForm';

function HookForm() {
const {formData, handleChange} = useForm({
    username: '',
    password: '',
})

const {username, password} = formData;
   
return ( 
        <div className="p-4 rounded-md bg-slate-200 mt-4">
            <input type="text" 
             className="mr-4 bg-transparent border-b-2 border-black"
             name='username' placeholder='username' value={username} onChange={handleChange} />
            <input type="password" 
              className="bg-transparent border-b-2 border-black"
             name='password' placeholder='password' value={password} onChange={handleChange} />
             <div className="flex mt-4">

            <p className="basis-3/6">Username:&nbsp;{formData.username}</p>
            <p className="basis-3/6">Password:&nbsp;{formData.password}</p>
             </div>
        </div>
     );
}
 
export default HookForm;