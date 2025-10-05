import React, { useRef } from 'react'
import { Field, ErrorMessage } from 'formik';
import './CreateFlashCardSet.css'

function CreateFlashCardSet({ values, errors, touched, setFieldValue }) {
  const fileInputRef = useRef(null);

  const onSelectImage = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setFieldValue('image', base64);
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
            <Field
              id="createGroup"
              name="groupName"
              type="text"
              className="CardSetCb"
              value={values.groupName}
            />
            <ErrorMessage name="groupName" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }} />
          </div>
          <div className="UploadimageBtn secondary-btn" onClick={onSelectImage}>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
            <img className="smallImage" src="/upload.png" alt="Upload" />Upload Image
          </div>
          <div>
            {values.image && (
              <>
                <img className="upload_img" src={values.image} alt="Uploaded preview" />
              </>
            )}
          </div>
        </div>
        <div className="AddDesc">
          <div className='text-label'>
            <label htmlFor="add-description">Add description</label>
          </div>
          <Field
            as="textarea"
            id="add-description"
            name="description"
            rows="4"
            className="descriptionText"
            placeholder="Description about what flashcards are about"
          />
          <ErrorMessage name="description" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }} />
          <br />
        </div>
      </div>
    </>
  );
}

export default CreateFlashCardSet;