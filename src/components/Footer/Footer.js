import React from "react";


const Footer = (props) => {
    return (
        <div className="py-3 footer d-flex justify-content-center">
            Designed by: <span className="ml-2">
                <a target="_blank" rel='noopener noreferrer' className="text-green" href={props.link}> Cornelius
            Okeke</a></span>
        </div>
    )

}



export default Footer;