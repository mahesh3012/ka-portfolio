import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    window.addEventListener('resize',()=>{
        const menu=document.getElementById('hamburgerMenu');
        if(window.innerWidth>1100){
            if(menu.style.display==='none')menu.style.display='flex'
        }
        else{
            menu.style.display='none';
        }
    })
    function toggleMenu(){
            const icon=document.getElementById('hamburgerIcon');
            const menu=document.getElementById('hamburgerMenu');
                if(menu.style.display==='none' || menu.style.display===""){
                    menu.style.display='flex';
                    icon.style.backgroundColor="#323845";
                }
                else if(menu.style.display==="flex"){
                    menu.style.display="none";
                    icon.style.removeProperty("background-color");
                }
    }
    return (
        <section id="navbar" className="text-slate-100 bg-gray-900 shadow-lg shadow-black" >
            <div className="w-full flex flex-row justify-between align-middle">
                <div id='main' className="w-1/5 flex m-1">
                    <Link to="#homeMain" className="cursive w-full text-center pt-1">Kushagra Agrawal</Link>
                </div>
                <FontAwesomeIcon icon={faBars} id="hamburgerIcon" onClick={toggleMenu}/>
                <div id="hamburgerMenu" className="w-4/5 justify-end">
                    <div className="w-1/2 h-full flex flex-row justify-around funky items-center" id="navigationMenu">
                        <Link to="#about" className="w-1/3 hover:text-yellow-400">About</Link>
                        <Link to="#originals" className="w-1/3 hover:text-yellow-400">Originals</Link>
                        <Link to="#covers" className="w-1/3 hover:text-yellow-400">Covers</Link>
                    </div>

                    <div className="w-1/6 flex flex-row justify-end mr-3 items-center" id="socialMenu">
                        <a id="spotify" href="https://open.spotify.com/artist/1RtAx3MNib37ayyxammUxc?si=pXPOGFVwSiOAADQQNSfXIQ" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="-33.4974 -55.829 290.3108 334.974">
                                <path d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0" fill="#ffffff" /></svg>
                        </a>
                        <SocialMediaIconsReact id="yotube" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="youtube-play" iconColor="rgba(247,247,244,1)" backgroundColor="rgba(219,53,53,0)" iconSize="5" roundness="20%" url="https://www.youtube.com/c/KushagraAgrawalMusic" size="50" className="mr-1" target="_blank" />
                        <SocialMediaIconsReact id="instagram" borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(247,247,244,1)" backgroundColor="rgba(255,255,255,0)" iconSize="5" roundness="20%" url="https://www.instagram.com/kushagra_agrawal_1/" size="50" taget="_blank" />
                    </div>
                </div>    
            </div>
        </section>
    );
}