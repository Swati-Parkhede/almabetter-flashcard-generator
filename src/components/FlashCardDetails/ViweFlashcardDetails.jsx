import React, { use, useState } from 'react'
import FlashCardDetails from '../../pages/FlashCardDetailsPage'
import './ViweFlashcardDetails.css'
import SharePanel from '../SharePanel/SharePanel'

const ViweFlashcardDetails = (props) => {
    const detailStr = localStorage.getItem("flashCardApp")
    const detailObj = JSON.parse(detailStr)
    const key = props.cardId;
    const [selectedIndx, setSelectedIndx] = useState(0);
    const groupName = detailObj[key].groupName;
    const desc = detailObj[key].description;
    const flashCards = detailObj[key].flashCards;
    const [shareComponentVisible, setshareComponentVisible] = useState(false)
    const handleShareComponentVisibility = (visibility) => {
        setshareComponentVisible(visibility)
    }
    return (
        <>
            <div>
                <div className='FlashcardTitle'> {groupName}</div>
                <div className='FlashcardDes'> {desc}</div>
                <div className='panels'>
                    <div className='panel' >
                        <div className='fc_title'>Flashcards</div>
                        {flashCards.map((fc, index) => (
                            <div className={selectedIndx == index ? "FlashCardName select" : "FlashCardName"} onClick={() => setSelectedIndx(index)} key={index}>{fc.term}</div>
                        ))}
                    </div>
                    <div className="FlashcardInfo panel">
                        <span className='fc_image'></span>
                        <span className='fc_description'>{flashCards[selectedIndx].description}</span>
                    </div>
                    <div className="Share">
                        <div className='panel' onClick={() => { setshareComponentVisible(true) }}>Share</div>
                        <div className='panel'>Download</div>
                        <div className='panel'>Print</div>
                    </div>
                </div>

                <div className='pageNav'>
                    <span className='navBtn' onClick={() => { setSelectedIndx(+selectedIndx - 1 < 0 ? flashCards.length - 1 : selectedIndx - 1) }}>{"<"}</span>
                    <span className='navBtn'>{selectedIndx + 1}/{flashCards.length}</span>
                    <span className='navBtn' onClick={() => { setSelectedIndx((selectedIndx + 1) % (flashCards.length)) }}>{">"}</span>
                </div>

                {shareComponentVisible == true ? <SharePanel onChange={handleShareComponentVisibility} /> : <></>}

            </div>
        </>
    )
}

export default ViweFlashcardDetails