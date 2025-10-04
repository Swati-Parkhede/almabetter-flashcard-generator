import React, { useEffect, useRef, useState } from 'react'
import './CreateFlashCardSet.css'
function CreateFlashCardSet(props) {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(localStorage.getItem("myImage") || "");
  const fileInputRef = useRef(null);
  useEffect(() => {
    props.detailsChanged(groupName, description, image);
  }, [groupName, description, image])

  const onSelectImage = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setImage(base64); // update preview
    };
    reader.readAsDataURL(file);
  };
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
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <img className="smallImage" src="/upload.png" alt="Upload" />Upload Image
          </div>
          <div>
            {image && (
              <>
                <img className="upload_img" src={image} alt="Uploaded preview"  />
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
    </>
  );
}

export default CreateFlashCardSet;