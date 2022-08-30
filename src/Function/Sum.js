const Sum = (props) => {
    return ( 
        <>
            <h1>{props.num.reduce((a, b) => a + b, 0)}</h1>
        </>
     );
}
 
export default Sum;