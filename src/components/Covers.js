import React, {useEffect,useState} from "react";
import sanityClient from "../client.js";
import getYouTubeID from "get-youtube-id";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import Originals from "./Originals.js";

export default function Covers() {
    const [covers,setCovers]=useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "covers"]{
            title,
            url,
            description
        }`).then((data)=>setCovers(data))
        .catch(console.error);
    },[]);
    return (
        <main>
        <section id="covers" className="w-full bg-green-300 p-12"><h1>Covers</h1>
        <span className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {covers && covers.map((cover,index)=>(
        <span className="container">
        <a href={cover.url} className="hover:opacity-80 bg-black hover:shadow-lg" target="_blank" rel="noreferrer"><img src={"https://img.youtube.com/vi/"+getYouTubeID(cover.url)+"/0.jpg"} alt={cover.url}/></a> 
        <div className="overlay"><FontAwesomeIcon icon={faPlay} className="playIcon"/></div>
        </span>    
        //<iframe width="100%" src={"https://www.youtube.com/embed/"+getYouTubeID(original.url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ))}
        </span>
        </section>
        </main>
    );
}