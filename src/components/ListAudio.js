import React from 'react';

const ListAudio = (props) => {

const audiobooks = props.audiobooks.map(audiobook => (
    <li key={props.full_sort_key}>
        {/* <img src={audiobook.cover_thumb} alt="cover"/> */}
        <h3>{audiobook.author}</h3>
        <a href={audiobook.url} target="_blank" rel="noopener noreferrer"><h2>{audiobook.title}</h2></a>
    </li>
))
    return ( 
    <ul>
        <h1>Znaleziono : {props.audiobooks.length} {props.list}</h1>
        {audiobooks}
    </ul>);
}
 
export default ListAudio;