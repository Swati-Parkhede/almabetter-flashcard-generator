import React from 'react'
import "./EditFlashCardItem.css";

function EditFlashCardItem(props) {
    return (
        <>
            <div className='cardPage'>
                <div className='CardItemIndx'>
                   {props.cardItemIndex}
                </div>
                <label htmlFor='text'>Enter Term*</label>
                <label htmlFor='text'>Enter Defination*</label>
                <label></label>
                <label></label>
                <input type="text" className='TextArea'></input>
                <textarea className='TextArea' />
                <div className='CardImagebtn'>Select Image</div><br />
            </div>
        </>
    )
}
export default EditFlashCardItem