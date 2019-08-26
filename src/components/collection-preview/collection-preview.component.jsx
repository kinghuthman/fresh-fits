import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

// 'collection-preview' contains entire collection for each directory
// 'preview' filter just 4 items, items.map will list out each item in that directory
// destructure off the id and the rest of the itemprops
const CollectionPreview = ({title, items }) => (
    <div className = 'collection-preview'>
        <h1 classname = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key = {id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview