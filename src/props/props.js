const Welcome = (props) => {
    return (
        <>
             <p className="text-l flex items-center">Welcome, {props.name}!</p>
             <p className="text-l flex items-center">Your age is {props.age}</p>
        </>
       
    )
}
 
Welcome.defaultProps = {
    name: "everyone",
    age:25
};

export default Welcome;