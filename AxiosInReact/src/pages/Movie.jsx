import { useEffect, useState } from "react";

import {Card} from '../components/UI/Card'
import { getMovie } from "../services/getService";

export const Movie = ()=>{
    const [data ,setData] = useState([]);

    const getMovieData =async()=>{
        try {
           const res = await getMovie();
           console.log(res.data.Search)
           setData(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    };

     useEffect(()=>{
        getMovieData();
     },[])

    return <ul className="container grid grid-four--cols">{
    data.map((curEle)=>{
        return <Card key={curEle.imdbID}
        
        movieData= {curEle}/>
    })
}
    </ul>
};