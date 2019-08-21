import React from 'react';
import './menu-item.styles.scss';

// currently no need to hold state
const MenuItem = ({title, imageUrl, size}) => (
    <div style ={{
        backgroundImage: `url(${imageUrl})`
    }}
/** dynamically add in a class value name if it is present, otherwise add nothing  */
    className = {`${size} menu-item`}>
        <div className = 'content'>
            <h1 className = 'title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem