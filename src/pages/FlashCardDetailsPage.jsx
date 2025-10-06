import React from 'react'
import ViweFlashcardDetails from '../components/FlashCardDetails/ViweFlashcardDetails'
import { useParams } from 'react-router-dom'

function FlashCardDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <div><ViweFlashcardDetails cardId={id} /></div>
        </>
    )
}
export default FlashCardDetailsPage