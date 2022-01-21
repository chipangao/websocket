import React, { useState } from 'react';

function LayoutUI(props) {


    return (
        <div>
            <header>
                {props.header}
            </header>
            <body>
                {props.body}
            </body>
            <footer>
                {props.footer}
            </footer>
        </div>
    )
}

export default LayoutUI;
