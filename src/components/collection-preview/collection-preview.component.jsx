import React from 'react';

import './collection-preview.styles.scss';

// 'collection-preview' contains entire collection for each directory
// 'preview' filter just 4 items, items.map will list out each item in that directory
const CollectionPreview = ({title, items }) => (
    <div className = 'collection-preview'>
        <h1 classname = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <div key = {item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview