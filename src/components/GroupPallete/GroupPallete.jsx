import React from 'react'
import "./GroupPallete.css"
import GroupPalleteCard from '../GroupPalleteCard/GroupPalleteCard'

function GroupPallete(props) {
    const dataObj = props.dataObj
    const keys = Object.keys(dataObj)
    return (
        <div className='pallete'>
            <div className='card-grid'>
                {keys.map((k) => (
                    <div className='card-wrapper' key={k}>
                        <GroupPalleteCard 
                            groupName={dataObj[k].groupName}
                            description={dataObj[k].description}
                            image={dataObj[k].image}
                            cardCount={dataObj[k].flashCards.length}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupPallete