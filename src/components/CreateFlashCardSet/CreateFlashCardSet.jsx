import React, { useEffect, useRef, useState } from 'react'
import './CreateFlashCardSet.css'
import EditFlashCardItem from '../EditFlashCardItem/EditFlashCardItem';
import { useNavigate } from 'react-router-dom';

function CreateFlashCardSet() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [flashCards, setFlashCards] = useState([{ term: "", description: "" }]);
  const fileInputRef = useRef(null);

  const onSelectImage = () => {
    fileInputRef.current.click();
  }
  const handleOnClick = () => {
    flashCards.push({ term: "", description: "" })
    setFlashCards([...flashCards])
  };
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleFlashCardUpdate = (idx, newterm, newdescription, newImage) => {
    flashCards[idx] = { term: newterm, description: newdescription, image: newImage }
    setFlashCards([...flashCards]);
  }

  const handleCreateBtnClick = () => {
    const existingData = JSON.parse(localStorage.getItem("flashCardApp")) || {};
    existingData[groupName] = {
      groupName: groupName,
      description: description,
      image: image,
      flashCards: flashCards
    };
    localStorage.setItem("flashCardApp", JSON.stringify(existingData));
    navigate("/my-flashcards");
  }

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
          <div className="UploadimageBtn secondary-btn" onClick={onSelectImage}>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
            <img className="smallImage" src="/upload.png" alt="Upload" />Upload Image
          </div>
          <div>
            {image && (
              <>
                <img className="upload_img" src={image} alt="Uploaded preview" />
              </>
            )}
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
      <div className='flashCardList'>
        <div>
          {
            flashCards.map((fc, index) =>
              <EditFlashCardItem key={index} cardItemIndex={index} flashcardChanged={handleFlashCardUpdate} />
            )
          }
        </div>
        <div className='AddCardItemBtn' onClick={handleOnClick}> + Add more</div>
      </div>
      <div className='BtnContainer' >
        <button className='primary-btn' onClick={handleCreateBtnClick}>Create</button>
      </div>
    </>
  );
}

export default CreateFlashCardSet;