import React from 'react'
import GroupPallete from '../components/GroupPallete/GroupPallete'

function MyFlashCards() {
    const dataStr = localStorage.getItem("flashCardApp")
    const dataObj = JSON.parse(dataStr)
    return (
        <GroupPallete dataObj={dataObj}/>
    )
}

export default MyFlashCards