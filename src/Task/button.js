import React from "react";

function Button({className,path,alt}){
    return  <button className={className}>
        <img src={path} alt={alt}/>
    </button>
}
export default Button
