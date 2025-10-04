import React, { useEffect, useState } from 'react'
import "./EditFlashCardItem.css";



function EditFlashCardItem(props) {
    const [term, setTerm] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        props.flashcardChanged(props.cardItemIndex - 1, term, description)
    }, [term, description])

    return (
        <>
            <div className='cardPage' key={props.cardItemIndex}>
                <div className='CardItemIndx'>
                    {props.cardItemIndex}
                </div>
                <label htmlFor='text'  >Enter Term*</label>
                <label htmlFor='text'>Enter Defination*</label>
                <div></div>
                <div></div>
                <input type="text" onChange={(e) => { setTerm(e.target.value) }} className='TextArea'></input>
                <textarea className='TextArea' onChange={(e) => { setDescription(e.target.value) }} />
                <div className='CardImagebtn secondary-btn'>Select Image</div><br />
            </div>
            {term === "" && <div className='errormsg'>Please enter the details</div>}
        </>
    )
}
export default EditFlashCardItem