import React, { useEffect, useState } from 'react'
import "./EditFlashCardItemList.css"
import EditFlashCardItem from '../EditFlashCardItem/EditFlashCardItem'

const EditFlashCardItemList = (props) => {
    const [flashcards, setFlashcards] = useState([{ term: "", description: "" }])
    const handleOnClick = () => {
        flashcards.push({ term: "", description: "" })
        setFlashcards([...flashcards])
    };
    useEffect(() => {
        props.listChanged(flashcards);
    }, [flashcards])

    const handleFlashCardUpdate = (idx, newterm, newdescription, newImage) => {
        flashcards[idx] = { term: newterm, description: newdescription, image: newImage }
        setFlashcards([...flashcards]);
    }

    return (
        <div className='flashCardList'>
            <div>
                {
                    flashcards.map((fc, index) =>
                        <EditFlashCardItem cardItemIndex={index} flashcardChanged={handleFlashCardUpdate} />
                    )
                }
            </div>
            <div className='AddCardItemBtn' onClick={handleOnClick}> + Add more</div>
        </div>
    )
}

export default EditFlashCardItemList
