import React, { useState } from 'react'
import "./EditFlashCardItem.css";



function EditFlashCardItem(props) {
    const [term, setTerm] = useState("")


    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <>
            <div className='cardPage'>
                <div className='CardItemIndx'>
                    {props.cardItemIndex}
                </div>
                <label htmlFor='text'  >Enter Term*</label>
                <label htmlFor='text'>Enter Defination*</label>
                <div></div>
                <div></div>
                <input type="text" onChange={handleChange} className='TextArea'></input>
                <textarea className='TextArea' />
                <div className='CardImagebtn'>Select Image</div><br />
            </div>
                {term === "" && <div className='errormsg'>Please enter the details</div>}
        </>
    )
}
export default EditFlashCardItem