import {Routes, Route} from 'react-router-dom';
import { Welcome } from '../props/props';
import Counter from '../state/count';

const App2 = () => {
    return (
        <div className="flex text-center flex-col">
        <h1 className='text-xl font-bold mt-3 py-4 border-t-2 border-black'> React Router </h1>
        
        <Routes>
            <Route  path ='/' element={<Welcome name='mic2' />}  />
            <Route path='/counter' element={<Counter />} />
        </Routes>

        </div> 
     );
}
 
export default App2;