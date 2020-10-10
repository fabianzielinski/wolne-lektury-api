import React from 'react';

const ButtonList = (props) => {
    return ( <button onClick={props.click}>{props.bTitle}</button> );
}
 
export default ButtonList;