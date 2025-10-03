import React from 'react'
import "./GroupPalleteCard.css"
import { Link } from 'react-router-dom'
import FlashCardDetailsPage from '../../pages/FlashCardDetailsPage'

function GroupPalleteCard(props) {

    return (
        <>
            <div className='outerContainer'>
                <div className='groupImg'></div>
                <div className='setContainer'>
                    <div className='title'>{props.groupName}</div>
                    <div className='desc'>{props.description}</div>
                    <div className='count'>
                        {props.cardCount == 0 ? <></> : props.cardCount}
                        <>{props.cardCount == 1 ? " Card" : " Cards"}</>
                    </div>
                    <button className='viewCardBtn'>View Cards</button>
                </div>
            </div>
        </>
    )
}

export default GroupPalleteCard