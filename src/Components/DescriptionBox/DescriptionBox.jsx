import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An e-commerce website is more than just a digital store; it's an experience. It's the convenience of shopping from your couch, the joy of discovering hidden gems, and the satisfaction of having your needs met with a click. So, step into the vibrant world of e-commerce and let the shopping adventure begin!
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox