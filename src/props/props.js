export const Welcome = (props) => {
    return (
        <>
            <p className="text-l flex items-center">Welcome, {props.name}!</p>
            <Age age = {props.age} />
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
 


