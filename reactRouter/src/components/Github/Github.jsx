import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data =useLoaderData()
    //1st methode
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sachinjaiswal01')
    //     .then(res => {
    //         if (!res.ok) {
    //             // Check if the response indicates an error
    //             if (res.status === 403) {
    //                 alert('API limit exceeded. Please try again later.'); // Handle API limit exceeded
    //             } else {
    //                 alert('An error occurred: ' + res.statusText); // Handle other errors
    //             }
    //             return; // Exit if there is an error
    //         }
    //         return res.json();
    //     })
    //     .then(data=>{
    //         console.log(data)
    //         setData(data);  //data mil gaya
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-orange-800 text-white p-3.5 text-3xl rounded-md'>
            Github Followers:{data.followers}
            <br/>
            Github Followers:{data.following}

            <img src={data.avatar_url} alt='git picture' width={300} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover'}}/>
        </div>
    )
}

//2nd methode
export default Github

export const githubInfoLoader = async ()=>{
    const res =await fetch('https://api.github.com/users/sachinjaiswal01')
    return (res.json());
}