const Welcome = (props) => {
    return (
        <p className="text-l flex items-center">Welcome, {props.name}!</p>
    )
}
 
Welcome.defaultProps = {
    name: "everyone"
};

export default Welcome;