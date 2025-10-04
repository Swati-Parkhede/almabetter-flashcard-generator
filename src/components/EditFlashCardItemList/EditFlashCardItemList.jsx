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

    const handleFlashCardUpdate = (idx, newterm, newdescription) => {
        flashcards[idx] = { term: newterm, description: newdescription }
        setFlashcards([...flashcards]);

    }

    return (
        <div className='flashCardList'>
            <div>
                {
                    flashcards.map((fc) =>
                        <EditFlashCardItem cardItemIndex={flashcards.length} flashcardChanged={handleFlashCardUpdate} />
                    )
                }
            </div>
            <button className='AddCardItemBtn' onClick={handleOnClick}> + Add more</button>
        </div>
    )
}

export default EditFlashCardItemList
