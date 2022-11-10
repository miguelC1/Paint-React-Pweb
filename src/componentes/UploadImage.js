import React from "react";
import { useState } from "react";


function UploadImage (){

    const [file, setFile] = useState("");
    const [showImage, setShowImage] = useState("")

  const handleChange= (event) =>{
    setFile(event.target.files[0])
    const showFile = URL.createObjectURL(event.target.files[0])
    console.log(showFile)
    setShowImage(showFile)
  }


    return(
        <div>
            {file && <img src={showImage} alt={file.name}/>}
            <input  type="file"
             name = "file"
             onChange={e => handleChange(e)}
            ></input>
        </div>
    )
}

export default UploadImage;