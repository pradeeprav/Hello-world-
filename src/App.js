import React from "react";
import "./index.css"
import Button from "./Button";

const Apple = () => {
    return (
        <>
            <h1 style = {{textAlign :"center"}}>Hello World</h1>
            <h2 style = {{textAlign :"center"}}> Hello Everyone</h2>
            <Button buttonText = "Apple"/>
            <Button buttonText = "Android"/>
            <Button buttonText = "Windows"/>
        </>
    )
}

export default Apple;