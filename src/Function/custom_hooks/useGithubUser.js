import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (
             async function(username) {
                try {
                    setLoading(true);
                    const reponse = await fetch(`https://api.github.com/users/${username}`);
                    const data = await reponse.json();
                    setData(data);
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false);
                }

            })()
    }, [username])


    return { data, error, loading }
}

export default useGithubUser;