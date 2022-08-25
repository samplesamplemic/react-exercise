import React from "react";

//class
export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p className="text-l flex items-center">Welcome, {this.props.name}!</p>
        <Age age={this.props.age} />
        {/* {(props.age >= 18) && <Age age = {props.age} />} conditional rendering 01 */}
        {/* {(props.age) && <Age age = {props.age} />} conditional rendering 02*/}
        {/* {(props.age > 18 && props.age < 65) && <Age age = {props.age} />} conditional rendering 03*/}
        {/* {(props.age > 18 && props.age < 65) && props.name == "John" && <Age age = {props.age} />} conditional rendering 04*/}
      </>
    );
  }
}

//function
// export const Welcome = (props) => {
//     return (
//         <>
//             <p className="text-l flex items-center">Welcome, {props.name}!</p>
//             <Age age={props.age} />
//              {/* {(props.age >= 18) && <Age age = {props.age} />} conditional rendering 01 */}
//              {/* {(props.age) && <Age age = {props.age} />} conditional rendering 02*/}
//              {/* {(props.age > 18 && props.age < 65) && <Age age = {props.age} />} conditional rendering 03*/}
//              {/* {(props.age > 18 && props.age < 65) && props.name == "John" && <Age age = {props.age} />} conditional rendering 04*/}
//         </>

//     )
// }

Welcome.defaultProps = {
  name: <strong>SamSample</strong>,
};

export const Age = (props) => {
  return (
    <>
      {
        /*conditional rendering 05*/
        props.age > 18 ? (
          <p className="text-l flex items-center">Your age is {props.age}</p>
        ) : (
          <p className="text-l flex items-center">You are very young!</p>
        )
      }
    </>
  );
};
