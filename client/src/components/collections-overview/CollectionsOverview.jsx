import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionsOverview.styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
