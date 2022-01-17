import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import "./Shop.styles.scss";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} element={<CollectionsOverview />} />
      <Route
        path={`${match.path}/:collectionId`}
        element={<CollectionPage />}
      />
    </div>
  );
};

export default ShopPage;
