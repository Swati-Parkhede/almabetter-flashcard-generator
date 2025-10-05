import React, { useState } from 'react'
import TitleBar from '../components/TitleBar/TitleBar'
import CreateFlashCardsPage from './CreateFlashCardsPage'
import MyFlashCards from './MyFlashCards';
import { useLocation, useNavigate } from 'react-router-dom';

function MainFlashCards() {
    const navigate = useNavigate();
    const location = useLocation();
    const tabIndex = location.pathname.includes("my-flashcards") ? 1 : 0;
    return (
        <>
            <TitleBar />
            <div className='tabsPanel'>
                <div className={tabIndex == 0 ? "tab select-tab" : "tab"} onClick={() => navigate("/create-new")}>Create New</div>
                <div className={tabIndex == 1 ? "tab select-tab" : "tab"} onClick={() => navigate("/my-flashcards")}>My Flashcards</div>
            </div>
            {
                tabIndex == 0 ? <CreateFlashCardsPage /> : <MyFlashCards />
            }
        </>
    )
}

export default MainFlashCards