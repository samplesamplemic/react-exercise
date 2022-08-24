export const Welcome = (props) => {
    return (
        <>
            <p className="text-l flex items-center">Welcome, {props.name}!</p>
             {/* {(props.age >= 18) && <Age age = {props.age} />} conditional rendering 01 */}
             {(props.age) && <Age age = {props.age} />} {/*conditional rendering 02*/}
        </>
       
    )
}
 
Welcome.defaultProps = {
    name: <strong>SamSample</strong>,
};

export const Age = (props) => {
    return ( 
        <>
            <p className="text-l flex items-center">Your age is {props.age}</p>
       
        </>
     );
}
 


