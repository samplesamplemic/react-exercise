import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
             async function fetchGithubUser(username) {
                try {
                    setLoading(true);
                    const reponse = await fetch(`https://api.github.com/users/${username}`);
                    const data = await reponse.json();
                    setData(data);
                    if(reponse.status !== 200){
                        setError(new Error("User not found"))
                    }
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false);
                }

            }

           useEffect(() => {
            fetchGithubUser(username)
           },[username])


    return { data, error, loading, fetchGithubUser} //custom-hook-04 ex
}

export default useGithubUser;

