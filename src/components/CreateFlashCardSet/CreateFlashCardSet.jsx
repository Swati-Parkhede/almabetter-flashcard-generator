import React from 'react'
import './CreateFlashCardSet.css'
function CreateFlashCardSet() {
  return (
    <>
      <div className="CreateFlashPage">
        <label htmlFor="createGroup">Create Group*</label>
        <div className="CardDetails">
          <div>
            <input className="CardSetCb" list="categories" />
            <datalist id="categories">
              <option value="a"></option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
            </datalist>
          </div>
          <div className="UploadimageBtn">
            <img className="smallImage" src="/upload.png" alt="Upload" />
            Upload Image
          </div>
        </div>
        <div className="AddDesc">
          <label htmlFor="Add description">Add description</label>
          <br />
          <textarea rows="4" className="descriptionText" placeholder="Description about what flashcards are about" />
          <br />
        </div>
      </div>
    </>
  );
}

export default CreateFlashCardSet;