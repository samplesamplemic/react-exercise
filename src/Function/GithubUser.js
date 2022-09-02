import React, { useState, useEffect } from "react";
import GithubUserList from "./GithubUserList";

//useeffect-ex 03
// const GithubUser = ({ username }) => {  
//   const [data, setData] = useState(null);
// console.log(data);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         setData(json);
//       });
//   }, [username]);

//   return (
//     <>
//       <div className="flex gap-4 items-end mt-4">
//         Github Info:{" "}
//         {data && <span className="font-semibold">{data.login}</span>}
//         {data && (
//           <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
//         )}
//       </div>
//     </>
//   );
// };

// export default GithubUser;


const GithubUser = () => { //useeffect-04 ex
   const [input, setInput] = useState("");
   let [users, setUsers] = useState({
    user: '',
    usersList: [], //needed an object || with an only array cant work(ERROR: USERSS NOT ITERABLE)
  });

  const handleUser = () => {
   const user = document.querySelector(".username").value; //used this instead of input cause of the limit num of api calls
    //console.log(user)
    //console.log(input);
    setUsers({ usersList: [...users.usersList, input], user: user });
  };

  useEffect(() => {
    console.log(users);
    //here modify users, like duplicate ecc..?
    //maybe in <li>
  }, [users]);

  return (
    <div className=" p-4 bg-slate-200 rounded-md">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="username bg-transparent mr-4 p-2 border-b-2 border-black"
        placeholder="username"
      />

      <button
        className="float-right p-2 border-2 border-black rounded-md"
        onClick={() => {
          handleUser();
        }}
      >
        INS
      </button>
      <GithubUserList username={users.user} />

      <p className="pt-2 mt-4 border-t-2 border-black">Previous research</p>
      <ul>
        {users &&
          users.usersList.map((item, index) => {
            return (
              <li className="my-2 list-decimal list-inside" key={index + item}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default GithubUser;
