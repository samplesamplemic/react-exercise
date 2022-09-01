import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
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

  return (
    <>
      <div className="flex gap-4 items-end mt-4">
        Github Info:{" "}
        {data && <span className="font-semibold">{data.login}</span>}
        {data && (
          <img className="w-16" src={data.avatar_url} alt="my_profile"></img>
        )}
      </div>
    </>
  );
};

export default GithubUser;
