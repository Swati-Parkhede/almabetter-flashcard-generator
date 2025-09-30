import React, { useEffect, useState } from 'react'
import './CreateFlashCardSet.css'
function CreateFlashCardSet(props) {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    props.detailsChanged(groupName, description);
  }, [groupName, description])

  return (
    <>
      <div className="CreateFlashPage">
        <label htmlFor="createGroup">Create Group*</label>
        <div className="CardDetails">
          <div>
            <input className="CardSetCb" onChange={(e) => { setGroupName(e.target.value) }} type='text' />
          </div>
          <div className="UploadimageBtn">
            <img className="smallImage" src="/upload.png" alt="Upload" />
            Upload Image
          </div>
        </div>
        <div className="AddDesc">
          <label htmlFor="Add description">Add description</label>
          <br />
          <textarea rows="4" className="descriptionText" onChange={(e) => setDescription(e.target.value)} placeholder="Description about what flashcards are about" />
          <br />
        </div>
      </div>
    </>
  );
}

export default CreateFlashCardSet;