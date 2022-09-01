import React, { useState, useEffect } from "react";

const GithubUserList = ({ username, input }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  const dataDisplay = (data) => {
    if (data) {
     // console.log(data);
      return (
        <>
        
          <span className="font-semibold">{data.name}</span>
          <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
          
        </>
      );
    }
  };

  return (
    <div className="flex gap-4 items-end mt-4">
   
      Github Info: {dataDisplay(data)}
    </div>
  );
};

export default GithubUserList;
