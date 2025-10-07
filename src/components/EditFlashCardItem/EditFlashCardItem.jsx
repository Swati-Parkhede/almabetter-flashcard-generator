import React, { useEffect, useRef, useState } from 'react'
import "./EditFlashCardItem.css";

function EditFlashCardItem(props) {
    const [term, setTerm] = useState("")
    const [description, setDescription] = useState("")
    const fileInputRef = useRef(null);
    const [image, setImage] = useState();

    useEffect(() => {
        props.flashcardChanged(props.cardItemIndex, term, description, image)
    }, [term, description, image])

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
            <div className='cardPage'>
                <div className='CardItemIndx'>
                    {props.cardItemIndex + 1}
                </div>
                <div className='column'>
                    <label htmlFor='text'  >Enter Term*</label>
                    <input type="text" onChange={(e) => { setTerm(e.target.value) }} className='TextArea'></input>
                </div>
                <div className='column'>
                    <label htmlFor='text'>Enter Defination*</label>
                    <textarea className='TextArea' onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className='column'>
                    {image &&

                        (<div className='selected_img_container'>
                            <img className="selected_img" src={image} alt="Uploaded preview" />
                            <div>
                                <div className='edit-btn' onClick={onSelectImage}>
                                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                                    <img src='/edit.png' height={"18px"} />
                                </div>
                                <div className='edit-btn' onClick={() => setImage(null)}>
                                    <img height={"18px"} src='/delete.png' />
                                </div>
                            </div>
                        </div>
                        )

                        ||
                        (<div className='CardImagebtn secondary-btn' onClick={onSelectImage}>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                            <span>Select Image</span>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}
export default EditFlashCardItem