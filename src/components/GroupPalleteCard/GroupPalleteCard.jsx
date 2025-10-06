import React from 'react'
import "./GroupPalleteCard.css"

function GroupPalleteCard(props) {

    return (
        <>
            <div className='outerContainer'>
                <div>
                    <img className='groupImg' src={props.image}></img>
                </div>
                <div className='setContainer'>
                    <div className='title'>{props.groupName}</div>
                    <div className='desc'>{props.description}</div>
                    <div className='count'>
                        {props.cardCount == 0 ? <></> : props.cardCount}
                        <>{props.cardCount == 1 ? " Card" : " Cards"}</>
                    </div>
                    <button
                        className='viewCardBtn'
                        onClick={() => window.location.href = `/flashcards/${props.groupName}`}
                    >
                        View Cards
                    </button>
                </div>
            </div>
        </>
    )
}

export default GroupPalleteCard