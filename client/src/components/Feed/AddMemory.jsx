import React from 'react'
import {useState} from 'react';

//we will have to get the props latitutde and longitude anyhow from the Map page;
//usecontext abhi nhi jaanat main so sorry brooss
//abhi ke testing ke liye bs manual props daala hai
function AddMemory({latitude , longitude}) {
    //This is the file that will be selected
    const [selectedfile,addfilechange] = useState({file: null});

    
    return (
        <div className="AddingMemory">
            <p>Longitude: {longitude} Latitude : {latitude}</p>
            <input placeholder="Name of the place"/>
            <br/>
            <p>Wanna add some memories?</p>
            <input type="file" onChange={(e)=>{
                addfilechange({file:URL.createObjectURL(e.target.files[0])});
            }}></input>
            <img src={selectedfile.file}/>
            <p>Write something about this place !</p>
            <input placeholder="How was your experience?"/>
            <br/>
            <button>Add Memory</button>
      <iframe
        src="https://deprov447.github.io/Imgur-Upload/"
        title="W3Schools Free Online Web Tutorials"
        width="500px"
        height="800px"
      ></iframe>
        </div>
    )
}

export default AddMemory
