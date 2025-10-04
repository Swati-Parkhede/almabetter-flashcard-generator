import React from 'react'
import './SharePanel.css'

const SharePanel = (props) => {
    return (
        <>
            <div className='overlay'>
                <div className='highlightBox'>
                <div className='close-btn' onClick={() => props.onChange(false)}>x</div>
                    <div className='title'>Share</div>
                    <div>
                        <div className='links'>
                            <div className='urlBox'>
                                <span className='urlTitle'> Link:</span>
                                <span className='url'> https://www.almabeter.com/abcde</span>
                            </div>
                            <div><img className='linkImg' src='/share.png' /></div>
                            <div><img className='linkImg' src='/copy.png' /></div>
                        </div>
                    </div>
                    <div className='socialIcons'>
                        <div>
                            <img className='icons' src='/facebook.png' alt='Facebook' />
                        </div>
                        <div>
                            <img className='icons' src='/linkedin.png' alt='Facebook' />
                        </div>
                        <div>
                            <img className='icons' src='/whatsapp.png' alt='Facebook' />
                        </div>
                        <div>
                            <img className='icons' src='/twitter.png' alt='Facebook' />
                        </div>
                        <div>
                            <img className='icons' src='/email.png' alt='Facebook' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharePanel
