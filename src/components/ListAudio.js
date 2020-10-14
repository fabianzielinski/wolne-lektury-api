import React from 'react';

const ListAudio = (props) => {

const itemList = props.itemList.map(item => (
    <li key={props.full_sort_key}>
        {/* <img src={item.cover_thumb} alt="cover"/> */}
        <h3>{item.author}</h3>
        <a href={item.url} target="_blank" rel="noopener noreferrer"><h2>{item.title}</h2></a>
    </li>
))
    return ( 
    <ul>
        <h1>Znaleziono : {props.itemList.length} {props.list}</h1>
        {itemList !== null ? itemList : <p>Ładuje ...</p>}
    </ul>);
}
 
export default ListAudio;