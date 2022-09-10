import React, { useState, useEffect } from "react";
import GithubUserswr from "../Libreries/swr/GithubUser_swr";

const GithubUserList = ({ username, input }) => {

  const {data, error, onRefresh} = GithubUserswr(username) //swr-01


  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setLoading(true)
  //   setError(null);
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         setError(new Error('User not found'))
  //       }

  //       return response.json();
  //     })
  //     .then((json) => {
  //       setData(json);
  //     })
  //     .catch(error => {
  //      console.log(setError(error)); 
  //      })
  //      .finally(() => {
  //       setLoading(false);
  //      })
  // }, [username]);

  
  // const dataDisplay = (data) => {
  //   // console.log(data);
  //   return (
  //     <>
  //      {!data && !error && <h2>Loading...</h2>}
  //      {error && <h3>An error has occurred</h3>}
  //       {data && !error && 
  //         <>
  //           <span className="font-semibold">{data.name}</span>
  //           <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
  //         </>
  //       }
  //       {error && <h1>User not found.</h1>}

  //     </>
  //   );
  
  // };

return (

  <div className="flex gap-4 items-end mt-4">
 
    {/* swr-03 */}  <button className="p-2 rounded-md border-2 border-black" onClick={onRefresh}>Refresh</button>
    Github Info: <>
       {!data && !error && <h2>Loading...</h2>}
       {error && <h3>An error has occurred</h3>}
        {data && !error && 
          <>
            <span className="font-semibold">{data.name}</span>
            <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
          </>
        }
        
      </>
  </div>
);
};

export default GithubUserList;


//with async function
// async function fetchGithubUser(username) {
//   setLoading(true);
//   setError(null);

//   try{
//     const response = await fetch (url.parse(username));
//     const data = await response.json();

//     setData(data);
//   } catch(error) {
//     setError(error);
//     setData(null);
//   }
//   finally {
//     setLoading(false);
//   }
// }

// useEffect(() => {
//   fetchGithubUser(username)
// }, [username])