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
        <div className='text-label'>
          <label htmlFor="createGroup">Create Group*</label>
        </div>
        <div className="CardDetails">
          <div>
            <input id="createGroup" className="CardSetCb" onChange={(e) => { setGroupName(e.target.value) }} type='text' />
          </div>
          <div className="UploadimageBtn secondary-btn">
            <img className="smallImage" src="/upload.png" alt="Upload" />
            Upload Image
          </div>
        </div>
        <div className="AddDesc">
          <div className='text-label'>
            <label htmlFor="add-description">Add description</label>
          </div>
          <textarea id="add-description" rows="4" className="descriptionText" onChange={(e) => setDescription(e.target.value)} placeholder="Description about what flashcards are about" />
          <br />
        </div>
      </div>
    </>
  );
}

export default CreateFlashCardSet;