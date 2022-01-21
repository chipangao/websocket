import React, { useState } from 'react';

function ButtonUI(props) {

    return (
        <button
            style={{
                background: `${props.background || "#fff"}`,
                width: `${props.width || "10vw"}`,
                //border: `${props.border || "1px solid"}`,
                //color: `${props.color || "1px solid"}`,
            }}
            onClick={() => console.log("working!")}>
            {props.text}
        </button>

    )
}

export default ButtonUI;
