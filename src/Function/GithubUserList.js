import React, { useState, useEffect } from "react";

const GithubUserList = ({ username, input }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    setError(null);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error('User not found'))
        }

        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch(error => {
       console.log(setError(error)); 
       })
       .finally(() => {
        setLoading(false);
       })
  }, [username]);

  const dataDisplay = (data) => {
    // console.log(data);
    return (
      <>
       {loading && <h2>Loading...</h2>}
        {data &&
          <>
            <span className="font-semibold">{data.name}</span>
            <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
          </>
        }
        {error && <h1>User not found.</h1>}

      </>
    );
  
  };

return (
  <div className="flex gap-4 items-end mt-4">

    Github Info: {dataDisplay(data)}
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