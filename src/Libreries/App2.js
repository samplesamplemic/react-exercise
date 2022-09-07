import {Routes, Route} from 'react-router-dom';
import { Welcome } from '../props/props';

const App2 = () => {
    return (
        <div className="flex text-center flex-col">
        <h1 className='text-xl font-bold mt-3 py-4 border-t-2 border-black'> React Router </h1>
        
        <Routes>
            <Route  path ='/' element={<Welcome name='mic2' />}  />
        </Routes>

        </div> 
     );
}
 
export default App2;