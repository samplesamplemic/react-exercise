//swr-01
import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

const useGithubUser = (username) => {
   const { data, error, mutate  } = useSWR(`https://api.github.com/users/${username}`, fetcher)
  console.log(data);
  function handleRefreshUser() {
    mutate()
   }
     
  return  {laoding:!data && !error, data, error, onRefresh: handleRefreshUser};
     
   //( 
   //      <>
   //         {!data && !error && <h3>Loading...</h3>}
   //         {error && <h3>An error has occurred</h3>}
   //         {data && !error && <ul>
   //          { data.map(user => (
   //             <li key={user.login}>{user.login}</li>
   //          )) }
   //         </ul>}
   //      </>
   //   );
}
 
export default useGithubUser;



// import { useState, useEffect } from 'react';

// const useGithubUser = (username) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

    
//              async function fetchGithubUser(username) {
//                 try {
//                     setLoading(true);
//                     const reponse = await fetch(`https://api.github.com/users/${username}`);
//                     const data = await reponse.json();
//                     setData(data);
//                     if(reponse.status !== 200){
//                         setError(new Error("User not found"))
//                     }
//                 } catch (err) {
//                     setError(err)
//                 } finally {
//                     setLoading(false);
//                 }

//             }

//            useEffect(() => {
//             fetchGithubUser(username)
//            },[username])


//     return { data, error, loading, fetchGithubUser} //custom-hook-04 ex
// }

// export default useGithubUser;

