import React, { useRef, useState } from 'react'
import './CreateFlashCardSet.css'
import EditFlashCardItem from '../EditFlashCardItem/EditFlashCardItem';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

function CreateFlashCardSet() {
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const onSelectImage = () => {
    fileInputRef.current.click();
  }

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

  const handleCreateBtnClick = (values) => {
    const existingData = JSON.parse(localStorage.getItem("flashCardApp")) || {};
    existingData[values.groupName] = {
      groupName: values.groupName,
      description: values.description,
      image: image,
      flashCards: values.flashCards
    };
    localStorage.setItem("flashCardApp", JSON.stringify(existingData));
    navigate("/my-flashcards");
  }

  const initialValues = {
    groupName: "",
    description: "",
    flashCards: [{ term: "", description: "", image: null }]
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.groupName) {
      errors.groupName = 'Group name is required';
    }
    
    // Validate flashcards
    if (!values.flashCards || values.flashCards.length === 0) {
      errors.flashCards = 'At least one flashcard is required';
    } else {
      const flashCardErrors = [];
      values.flashCards.forEach((flashCard, index) => {
        const flashCardError = {};
        if (!flashCard.term) {
          flashCardError.term = 'Term is required';
        }
        if (!flashCard.description) {
          flashCardError.description = 'Definition is required';
        }
        if (Object.keys(flashCardError).length > 0) {
          flashCardErrors[index] = flashCardError;
        }
      });
      if (flashCardErrors.length > 0) {
        errors.flashCards = flashCardErrors;
      }
    }
    
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        handleCreateBtnClick(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="CreateFlashPage">
            <div className='text-label'>
              <label htmlFor="createGroup">Create Group*</label>
            </div>
            <div className="CardDetails">
              <div>
                <Field 
                  id="createGroup" 
                  name="groupName"
                  className="CardSetCb" 
                  type='text' 
                />
                <ErrorMessage name="groupName" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
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
              <Field 
                as="textarea"
                id="add-description" 
                name="description"
                rows="4" 
                className="descriptionText" 
                placeholder="Description about what flashcards are about" 
              />
              <br />
            </div>
          </div>
          <FieldArray name="flashCards">
            {({ push, remove, form }) => (
              <div className='flashCardList'>
                <div>
                  {form.values.flashCards.map((flashCard, index) => (
                    <EditFlashCardItem 
                      key={index} 
                      cardItemIndex={index} 
                    />
                  ))}
                </div>
                <div className='AddCardItemBtn' onClick={() => push({ term: "", description: "", image: null })}>
                  + Add more
                </div>
              </div>
            )}
          </FieldArray>
          <div className='BtnContainer' >
            <button className='primary-btn' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateFlashCardSet;