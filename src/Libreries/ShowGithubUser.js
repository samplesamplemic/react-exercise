import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import GithubUserList from '../Function/GithubUserList';


const ShowGithubUser = (props) => {
    

    return ( 
        <>
            <GithubUserList username={props.username}/>
        </>
     );
}
 
export default ShowGithubUser;