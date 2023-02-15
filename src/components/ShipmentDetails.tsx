import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import TransitEventsTable from "./TransitEventsTable";

const ShipmentDetails = () => {
  const shipmentData = useSelector(
    (state: RootState) => state.trackShipment.data
  );

  const deliveryDate = new Date(shipmentData?.PromisedDate || "");
  // check if array is not empty
  const timestamp =
    (shipmentData?.TransitEvents !== undefined &&
      shipmentData?.TransitEvents[0]?.timestamp) ||
    "";
  const lastUpdate = new Date(timestamp);
//<section className="container w-[95vw] md:full mx-auto flex flex-col md:flex-row md:justify-around border border-[#e4e7ec] rounded-[10px] p-3 md:p-9 mt-16">
      
  return (
    <>
      <section className="container w-[95vw] md:full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-around border border-[#e4e7ec] rounded-[10px] p-3 md:p-9 mt-16">
        <div>
          <h2 className="text-secondary text-xl">
            Shipment Number {shipmentData?.TrackingNumber}
          </h2>
          <h3
            className={`${
              (shipmentData?.CurrentStatus?.state == "DELIVERED" ||
                "DELIVERED_TO_SENDER") &&
              "text-green-700 "
            }text-xl font-bold mt-2`}
          >
            {shipmentData?.CurrentStatus?.state.replaceAll("_", " ")}
          </h3>
        </div>
        <div className="mt-5 md:mt-0">
          <h2 className="text-secondary text-xl">Last Update</h2>
          <h3 className="text-xl font-bold mt-2">
            {lastUpdate?.toDateString() != "Invalid Date" &&
              lastUpdate?.toDateString()}
          </h3>
        </div>
        <div className="mt-5 lg:mt-0">
          <h2 className="text-secondary text-xl">Provider</h2>
          <h3 className="text-xl font-bold mt-2">{shipmentData?.provider}</h3>
        </div>
        <div className="mt-5 lg:mt-0">
          <h2 className="text-secondary text-xl">Delivery Date</h2>
          <h3 className="text-xl font-bold mt-2">
            {deliveryDate?.toDateString() != "Invalid Date" &&
              deliveryDate?.toDateString()}
          </h3>
        </div>
      </section>
      <TransitEventsTable />
    </>
  );
};

export default ShipmentDetails;
