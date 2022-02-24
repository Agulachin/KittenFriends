import React from "react";

const Scroll = (props) => {
    return (
        <div id='scrolBox'style={{overflowY: 'scroll', height: '450px'}}>
            {props.children}
        </div>
    )
};

export default Scroll