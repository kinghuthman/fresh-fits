import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

// currently no need to hold state
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
/** dynamically add in a class value name if it is present, otherwise add nothing  */
    className = {`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        {/** want the size of content to stay the same, using a div that allows me to select the background-image as its own*/}
        <div className='background-image' style ={{
        backgroundImage: `url(${imageUrl})`}}/>
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>  
)

// withRouter is a HOC that returns a modified component with access to history, location, and match
export default withRouter(MenuItem);