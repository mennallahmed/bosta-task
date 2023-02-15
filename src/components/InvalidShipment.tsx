import warningIcon from "../assets/warning-icon.svg";

const InvalidShipment = () => {
  return (
    <div className="container flex items-start gap-3 mx-auto w-11/12 lg:w-3/4 bg-[#fef3f2] text-xl font-semibold border border-[#fecdca] mt-24 p-4 md:p-10 rounded-2xl">
      <img src={warningIcon} alt="warningIcon" />
      <p>
        No record of this tracking number can be found at this time, please
        check the number and try again later. For further assistance, please
        contact Customer Service.
      </p>
    </div>
  );
};

export default InvalidShipment;
