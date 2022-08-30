const Sum = ({num=[1, 2, 3, 4]}) => {
    return ( 
        <>
            <h1>{num.reduce((a, b) => a + b, 0)}</h1>
        </>
     );
}
 
export default Sum;