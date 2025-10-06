import React from 'react'
import GroupPallete from '../components/GroupPallete/GroupPallete'

function MyFlashCards() {
    const dataStr = localStorage.getItem("flashCardApp")
    const dataObj = JSON.parse(dataStr)
    return (
        dataObj === null ? <div className='noDataMsg'>No Flashcards Created Yet</div> :
        <GroupPallete dataObj={dataObj}/>
    )
}

export default MyFlashCards