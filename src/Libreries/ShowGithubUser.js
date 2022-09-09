import { useEffect, useState } from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom';
import GithubUserList from '../Function/GithubUserList';


const ShowGithubUser = (props) => {
    const {username } = useParams();

    return ( 
        <>
            <GithubUserList username={username}/>
        </>
     );
}
 
export default ShowGithubUser;