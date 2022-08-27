const Colors = () => {
    const items = ['red', 'green', 'blue', 'yellow', 'blue']

    return ( 
        <>
            <div>
            <p className="text-xl font-bold pt-4 my-4 border-t-2">Lists</p>
                <ul>
                {items.map((color, index) => 
                 <li key={index}>{color}</li>
                )}
                 
                </ul>
            </div>
        </>
     );
}
 
export default Colors;