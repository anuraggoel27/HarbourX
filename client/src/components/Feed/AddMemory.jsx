import React,{useState} from 'react'


//we will have to get the props latitutde and longitude anyhow from the Map page;
//usecontext abhi nhi jaanat main so sorry brooss
//abhi ke testing ke liye bs manual props daala hai
const AddMemory=(props)=>{
    //This is the file that will be selected
    const [selectedfile,addfilechange] = useState({file: null});

    
    return (
        <div className="AddingMemory">
            <p>Longitude: {} Latitude : {}</p>
            <input placeholder="Name of the place"/>
            <br/>
            <p>Wanna add some memories?</p>
            <input type="file" onChange={(e)=>{
                addfilechange({file:URL.createObjectURL(e.target.files[0])});
            }}></input>
            <img src={selectedfile.file} alt=""/>
            <p>Write something about this place !</p>
            <input placeholder="How was your experience?"/>
            <br/>
            <button>Add Memory</button>
        </div>
    )
}

export default AddMemory
