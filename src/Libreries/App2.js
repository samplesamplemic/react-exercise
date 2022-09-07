import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { Welcome } from '../props/props';
import Counter from '../state/count';
import ShowGithubUser from './ShowGithubUser';

const App2 = () => {
    let user = 'samplesamplemic';
    //const [user, setUser] = useState('');setUser((e) => e.target.value)
    return (
        <div className="flex text-center flex-col">
        <h1 className='text-xl font-bold mt-3 py-4 border-t-2 border-black'> React Router </h1>
        <Routes>
            <Route  path ='/' element={<Welcome name='mic2' />}  />
            <Route path='/counter' element={<Counter />} />
            <Route path={`/users/:${user}`} element={<ShowGithubUser username={user} />} /> 
         </Routes>

        </div> 
     );
}
 
export default App2;