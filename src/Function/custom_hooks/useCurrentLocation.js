import { useEffect, useState } from "react";

//custom-hooks-05 ex
const useCurrentLocation = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
   
  const onChange = ({coords}) => {
    setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude
    });
  };

  const onError= (error) => {
    setError(error.message);
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    if(!geo) {
        setError('Location not found.');
        return;
    }
    const  watcher = geo.watchPosition(onChange, onError);
    return() => geo.clearWatch(watcher);
  }, [])

    return {...position, error}
}
 
//export default useCurrentLocation;

const HookPosition = () => {
    const{latitude, longitude, error} = useCurrentLocation();


    return (  
        <>
        <div className="p-4 bg-slate-200 rounded-md mt-4 flex flex-col gap-2">
            <h2 className=" text-lg font-semibold">Position</h2>
            <p>latitude: {latitude}</p>
            <p>longitude: {longitude}</p>
            <p>{error}</p>
        </div>

        </>
    );
}
 
export default HookPosition;