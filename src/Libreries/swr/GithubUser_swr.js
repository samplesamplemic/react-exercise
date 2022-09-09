import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

const GithubUserswr = (username) => {
  
      const { data, error  } = useSWR(`https://api.github.com/users/${username}`, fetcher)
     console.log(data);
         return  {data, error};
   
   
     
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
 
export default GithubUserswr;