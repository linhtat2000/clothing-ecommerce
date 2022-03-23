import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/Collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";

import "./Shop.styles.scss";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const fetchCollectionsStartHandler = dispatch(fetchCollectionsStart());

  useEffect(() => {
    fetchCollectionsStartHandler();
  }, [fetchCollectionsStartHandler]);

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
};

export default ShopPage;
