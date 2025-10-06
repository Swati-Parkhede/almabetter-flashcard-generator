import React from 'react'
import "./TitleBar.css"
function TitleBar() {
    return (
        <>
            <div className='titleBar'>
                <div className='logo'>
                    <img className='logo_img' src='/flashcard.png' alt='Flashcard Logo' />
                </div>
                <div className='header'>Flashcards World</div>
            </div>
        </>
    )
}

export default TitleBar