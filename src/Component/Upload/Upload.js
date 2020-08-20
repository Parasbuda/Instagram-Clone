import React, { useState } from "react"
import "./Upload.css"
import { Button } from "@material-ui/core"
import {  db, storage } from "../../firebase"
import firebase from "firebase"


const Upload = ({username}) => {
  const [caption, setCaption] = useState("")
  const [progress, setProgress] = useState("")
  const [image, setImage] = useState(null)
  

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      (error) => {
        alert(error.message)
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url=> {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
                imageUrl: url,
              uername:username,
            })
              setProgress(0)
              setCaption("")
              setImage(null)
          })
      }
    )
  }
  return (
      <div className="upload">
          <progress className="upload__progress" value={progress} max="100"/>
      <input
        type="text"
        placeholder="What's on your mind ?"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button className="upload__button" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}

export default Upload
