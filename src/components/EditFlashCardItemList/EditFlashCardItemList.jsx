import React, { useEffect, useState } from 'react'
import "./EditFlashCardItemList.css"
import EditFlashCardItem from '../EditFlashCardItem/EditFlashCardItem'

const EditFlashCardItemList = (props) => {
    const [flashcards, setFlashcards] = useState([1])

    const handleOnClick = () => {
        flashcards.push(flashcards.length + 1)
        setFlashcards([...flashcards])
    };
    useEffect(() => {
        props.listChanged(flashcards);
    }, [flashcards])


    return (
        <div>
            <div>
                {
                    flashcards.map((fc) =>
                        <EditFlashCardItem key={fc} cardItemIndex={fc} />
                    )
                }
            </div>
            <button className='AddCardItemBtn' onClick={handleOnClick}> + Add more</button>
        </div>
    )
}

export default EditFlashCardItemList
