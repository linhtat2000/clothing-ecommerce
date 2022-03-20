import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/Collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";

import "./Shop.styles.scss";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    console.log(this.props);

    return (
      <div className="shop-page">
        <Route path={`${match.path}`} element={CollectionsOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          element={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
