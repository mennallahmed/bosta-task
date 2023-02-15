import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const TransitEventsTable = () => {
  const shipmentData = useSelector(
    (state: RootState) => state.trackShipment.data
  );

  const convertToTimeString = (time: string) => {
    const newTime = new Date(time || "");
    return newTime.toLocaleTimeString()
  };

  const convertToDateString = (time: string) => {
    const newTime = new Date(time || "");
    return newTime.toLocaleDateString()
  };

  return (
    <div className="container w-[95vw] md:full mx-auto flex flex-col border border-[#e4e7ec] rounded-[10px] my-16">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b border-[#e4e7ec]">
                <tr>
                  <th
                    scope="col"
                    className="text-secondary text-xl font-semibold px-6 py-4 text-left"
                  >
                    Hub
                  </th>
                  <th
                    scope="col"
                    className="text-secondary text-xl font-semibold px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-secondary text-xl font-semibold px-6 py-4 text-left"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="text-secondary text-xl font-semibold px-6 py-4 text-left"
                  >
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                {shipmentData?.TransitEvents.map((item, index) => {
                  return (
                    <tr key={index} className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-headerColor-900">
                        {item?.hub}
                      </td>
                      <td className="text-sm px-6 py-4 whitespace-nowrap">
                      {convertToDateString(item?.timestamp)}
                      </td>
                      <td className="text-sm px-6 py-4 whitespace-nowrap">
                        {convertToTimeString(item?.timestamp)}
                      </td>
                      <td className="text-sm px-6 py-4 whitespace-nowrap">
                        {item?.reason}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitEventsTable;
