import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import ShipmentDetails from "../components/ShipmentDetails";
import InvalidShipment from "../components/InvalidShipment";

const TrackShipment = () => {
  const loadingStatus = useSelector(
    (state: RootState) => state.trackShipment.loadingStatus
  );
  const shipmentData = useSelector(
    (state: RootState) => state.trackShipment.data
  );
  return (
    <>
      <Navbar />
      <SearchInput />
      {(loadingStatus === "fulfilled" && shipmentData?.error !== "Invalid tracking number!") &&
        <ShipmentDetails />
      }
       {(loadingStatus === "fulfilled" && shipmentData?.error === "Invalid tracking number!") &&
        <InvalidShipment />
      }
      
    </>
  );
};

export default TrackShipment;
