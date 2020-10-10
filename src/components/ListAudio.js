import React from 'react';

const ListAudio = (props) => {

const audiobooks = props.audiobooks.map(audiobook => (
    <li key={props.full_sort_key}>
        <h3>{audiobook.author}</h3>
        <h2>{audiobook.title}</h2>
    </li>
))
    return ( 
    <ul>
        <h1>Znaleziono : {props.audiobooks.length} {props.list}</h1>
        {audiobooks}
    </ul>);
}
 
export default ListAudio;