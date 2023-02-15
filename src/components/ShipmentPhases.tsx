import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import checkIcon from "../assets/check-icon.svg";

const ShipmentPhases = () => {
  const shipmentData = useSelector(
    (state: RootState) => state.trackShipment.data
  );

  const setBgColor = (phase: string) => {
    let color;

    if (phase == "last phase") {
      color =
        shipmentData?.CurrentStatus?.state === "DELIVERED" ||
        "DELIVERED_TO_SENDER"
          ? "bg-green-500"
          : "bg-gray-200";
    } else {
      color =
        shipmentData?.CurrentStatus?.state === "DELIVERED" ||
        "DELIVERED_TO_SENDER"
          ? "bg-green-500"
          : shipmentData?.CurrentStatus?.state === "NOT DELIVERED"
          ? "bg-yellow-400"
          : shipmentData?.CurrentStatus?.state === "CANCELED"
          ? "bg-red-600"
          : "bg-gray-200";
    }
    return color;
  };

  return (
    <section className="container w-[95vw] md:full mx-auto border border-[#e4e7ec] rounded-[10px] p-2 pt-6 md:p-9">
      <div className="grid grid-cols-3 md:justify-around">
        <div
          className={`${setBgColor("")} relative bg-gray-200 h-2 rounded-tl-full rounded-bl-full`}
        >
          <img
            className={`${setBgColor("")} bg-gray-200 absolute left-0 -top-1/2 rounded-full`}
            src={checkIcon}
            alt="check Icon"
          />
        </div>
        <div className={`${setBgColor("")} relative bg-gray-200 h-2`}>
          <img
            className={`${setBgColor("")} absolute left-0 -top-1/2 bg-gray-200 rounded-full`}
            src={checkIcon}
            alt="check Icon"
          />

          <img
            className={`${setBgColor("")} absolute right-0 -top-1/2 bg-gray-200 rounded-full`}
            src={checkIcon}
            alt="check Icon"
          />
        </div>
        <div className={`${setBgColor("last phase")} relative bg-gray-200 h-2 rounded-tr-full rounded-br-full`}>
          <img
            className={`${setBgColor("last phase")} absolute right-0 -top-1/2 bg-gray-200 rounded-full`}
            src={checkIcon}
            alt="check Icon"
          />
        </div>
      </div>
      <div className="flex justify-between text-center mt-4">
        <h3 className="">Created</h3>
        <h3 className="">Order Received</h3>
        <h3 className="">Out for Delivery</h3>
        <h3 className="">Delivered</h3>
      </div>
    </section>
  );
};

export default ShipmentPhases;
