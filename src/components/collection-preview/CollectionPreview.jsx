import React from "react";

import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
