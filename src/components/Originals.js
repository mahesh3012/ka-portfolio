import React, {useEffect,useState} from "react";
import sanityClient from "../client.js";
import getYouTubeID from "get-youtube-id";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons'

export default function Originals() {
    const [originals,setOriginals]=useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "originals"]{
            title,
            url,
            description
        }`).then((data)=>setOriginals(data))
        .catch(console.error);
    },[]);
    return (
        <main>
        <section id="originals" className="w-full  p-12"><h1>Originals</h1>
        <span className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {originals && originals.map((original,index)=>(
        <span className="container">   
        <a href={original.url} className="hover:opacity-80 bg-black hover:shadow-lg" target="_blank"><img src={"https://img.youtube.com/vi/"+getYouTubeID(original.url)+"/0.jpg"} alt={original.url}/></a> 
        <div className="overlay"><FontAwesomeIcon icon={faPlay} className="playIcon"/></div>
        </span>    
        //<iframe width="100%" src={"https://www.youtube.com/embed/"+getYouTubeID(original.url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ))}
        </span>
        </section>
        </main>
    );
}