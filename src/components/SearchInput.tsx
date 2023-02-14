import { useState } from 'react';
import type { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getShipmentStatus } from "../redux/trackShipment/trackShipmentSlice";
import searchIcon from "../assets/search-icon.svg";

const SearchInput = () => {
  const count = useSelector((state: RootState) => state.trackShipment.data);
  const dispatch = useDispatch<AppDispatch>();
  const [trackingNumber, setTrackingNumber] = useState('');
  return (
    <div className="container mx-auto text-center mt-16">
      <h2 className="text-xl font-bold text-gray">Track your shipment</h2>
      <div className="flex justify-center mt-5 h-16">
        <input
          className="w-96 border border-[#e4e7ec] hover:border-[#1dabb3] focus:border-[#1dabb3] outline-none rounded-bl-[10px] rounded-tl-[10px] pl-4"
          type={"text"}
          placeholder="Tracking No."
          value={trackingNumber}
          onChange={(e)=> setTrackingNumber(e.target.value)}
        />
        <button
          className="bg-primary w-16 rounded-br-[10px] rounded-tr-[10px]"
          onClick={() => {
            dispatch(getShipmentStatus(trackingNumber));
          }}
        >
          <img className="mx-auto" src={searchIcon} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
