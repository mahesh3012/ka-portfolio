import React from "react";
import image from "../HomeImage.jpg";

export default function Home(){
    return (
        <main className="relative" id="homeMain">
        <img src={image} alt="trumpet_image" id="homeImage"/>
        <h1 id="mainText">Music is the strongest form of <br/>Magic</h1>
        </main>
    );
}