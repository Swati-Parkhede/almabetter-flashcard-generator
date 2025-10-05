import React, { useRef } from 'react'
import { Field, ErrorMessage } from 'formik';
import "./EditFlashCardItem.css";

function EditFlashCardItem({ cardItemIndex, values, errors, touched, setFieldValue, onRemove, showRemove }) {
    const fileInputRef = useRef(null);
    const fieldName = `flashCards[${cardItemIndex}]`;
    const currentCard = values.flashCards[cardItemIndex];

    const onSelectImage = () => {
        fileInputRef.current.click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            setFieldValue(`${fieldName}.image`, base64);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setFieldValue(`${fieldName}.image`, "");
    };

    return (
        <>
            <div className='cardPage'>
                <div className='CardItemIndx'>
                    {cardItemIndex + 1}
                    {showRemove && (
                        <button 
                            type="button" 
                            onClick={onRemove}
                            style={{
                                marginLeft: '10px',
                                backgroundColor: '#ff4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Remove
                        </button>
                    )}
                </div>
                <div className='column'>
                    <label htmlFor={`${fieldName}.term`}>Enter Term*</label>
                    <Field
                        name={`${fieldName}.term`}
                        type="text"
                        className='TextArea'
                    />
                    <ErrorMessage name={`${fieldName}.term`} component="div" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }} />
                </div>
                <div className='column'>
                    <label htmlFor={`${fieldName}.description`}>Enter Definition*</label>
                    <Field
                        as="textarea"
                        name={`${fieldName}.description`}
                        className='TextArea'
                    />
                    <ErrorMessage name={`${fieldName}.description`} component="div" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }} />
                </div>
                <div className='column'>
                    {currentCard?.image ? (
                        <div className='selected_img_container'>
                            <img className="selected_img" src={currentCard.image} alt="Uploaded preview" />
                            <div>
                                <div className='edit-btn' onClick={onSelectImage}>
                                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                                    <img src='/edit.png' height={"18px"} />
                                </div>
                                <div className='edit-btn' onClick={removeImage}>
                                    <img height={"18px"} src='/delete.png' />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='CardImagebtn secondary-btn' onClick={onSelectImage}>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                            <span>Select Image</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default EditFlashCardItem