import React, { useState } from 'react'
import TitleBar from '../components/TitleBar/TitleBar'
import CreateFlashCardsPage from './CreateFlashCardsPage'
import MyFlashCards from './MyFlashCards';

function MainFlashCards() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <TitleBar />
            <div className='tabsPanel'>
                <div className={tabIndex == 0 ? "tab select-tab" : "tab"} onClick={() => setTabIndex(0)}>Create New</div>
                <div className={tabIndex == 1 ? "tab select-tab" : "tab"} onClick={() => setTabIndex(1)}>My Flashcards</div>
            </div>
            {
                tabIndex == 0 ? <CreateFlashCardsPage /> : <MyFlashCards />
            }
        </>
    )
}

export default MainFlashCards