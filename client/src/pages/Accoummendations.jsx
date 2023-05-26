import React from "react";
import AddPlace from "../components/AddPlace";
import { useLocation } from "react-router-dom";
import PlacesList from "../components/PlacesList";

const AccoummendationsPage = (props) => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let status = searchParams.get("status");
  return (
    <div>
      {status === "new" && <AddPlace />}
      {status !== "new" && <PlacesList />}
    </div>
  );
};

export default AccoummendationsPage;
