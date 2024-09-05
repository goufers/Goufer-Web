/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

interface statusState {
  setShowStatusCard: (item: any) => void;
  currentStatus: string;
}

const StatusCard = ({ setShowStatusCard, currentStatus }: statusState) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [taskStatus, setTaskStatus] = useState(currentStatus);
  const [startDate, setStartDate] = useState<any>("204-2-11");
  const [dueDate, setDueDate] = useState<any>("204-12-11");

  // Ref for Flatpickr instances
  const startDatePickerRef = useRef<Flatpickr | null>(null);
  const dueDatePickerRef = useRef<Flatpickr | null>(null);

  // Define status options
  const statusOptions = [
    {
      label: "Inprogress",
      textColor: "text-[#FFC107]",
      bgColor: "bg-[#FFF9E8]",
    },
    {
      label: "Completed",
      textColor: "text-[#1BA345]",
      bgColor: "bg-[#F2FFF6]",
    },
    {
      label: "Cancelled",
      textColor: "text-[#DC362E]",
      bgColor: "bg-[#FFF8F8]",
    },
  ];

  const currentStatusStyle = statusOptions.find((option) => option.label === taskStatus) || {
    textColor: "text-black", // Default color
    bgColor: "bg-white", // Default background color
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleStatusChange = (status: string) => {
    setTaskStatus(status);
    setDropdownOpen(false);
  };

  // Function to handle calendar icon click and focus the date picker
  const handleIconClick = (type: "start" | "due") => {
    if (type === "start" && startDatePickerRef.current) {
      startDatePickerRef.current.flatpickr.open(); // Open the calendar popup
    }
    if (type === "due" && dueDatePickerRef.current) {
      dueDatePickerRef.current.flatpickr.open(); // Open the calendar popup
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center z-10 fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm  bg-[#101c161d]">
      <div className="flex flex-col w-[972px] h-[595px] mx-auto mt-24 hover:shadow-lg shadow-md bg-white items-center rounded-[20px] z-10 fixed left-0 right-0 bottom-0 top-0 backdrop-blur-sm  bg-[#101c161d]">
        <div className="flex flex-row w-[928px] h-[124px] mt-6 justify-between">
          <div className="flex flex-col w-[432px] h-[124px] gap-[15px]">
            <img src="/images/boxb.svg" alt="task record" className="w-[48px] h-[48px]" />
            <h1 className="text-[#322F37] font-[600px] text-[18px]">Task Details</h1>
            <p className="text-[#605D66] font-[400px] text-[14px]">
              View and update your task.
            </p>
          </div>

          <div className="flex flex-col w-[270px] h-auto items-end justify-between">
            <img
              src="./images/exit.jpg"
              alt=""
              className="w-[22px] h-[22px]"
              onClick={() => setShowStatusCard("none")}
            />
            <div className="flex flex-row w-[194px] h-[28px]">
              <p className="text-[#322F37] font-normal text-[12px] pt-1">Task Status:</p>
              <div className="flex w-[120px] h-[28px] relative ml-2">
                <div
                  className={`w-[90px] h-[28px] flex justify-center items-center ${currentStatusStyle.bgColor}`}
                >
                  <p className={`text-[15px] ${currentStatusStyle.textColor}`}>{taskStatus}</p>
                </div>
                <img
                  src="/images/chevron-down.svg"
                  alt=""
                  className="cursor-pointer border border-[#AEA9B4] rounded-[4px]"
                  onClick={handleToggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white shadow-lg z-10">
                    {statusOptions.map((option) => (
                      <div
                        key={option.label}
                        className={`flex justify-center items-center h-[28px] w-[100px] cursor-pointer border border-[#AEA9B4] rounded-[4px] ${option.bgColor}`}
                        onClick={() => handleStatusChange(option.label)}
                      >
                        <p className={`text-[15px] ${option.textColor}`}>{option.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-9 w-[928px] h-[399px]">
          <div className="flex flex-row w-[926px] h-[70px] items-center justify-around">
            <div className="mb-4 relative">
              <p className="text-[#344054] text-left w-[84px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Assigned To
              </p>
              <div className="flex w-[455px] h-[44px] items-center justify-center rounded-full border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Type name"
                  className="w-[427px] h-[24px] focus:outline-none pl-3 text-[#344054]"
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Start Date
              </p>
              <div className="flex w-[219px] h-[44px] items-center justify-between rounded-full border border-[#D0D5DD] px-2">
                <Flatpickr
                  ref={startDatePickerRef} // Attach the ref to the Flatpickr
                  value={startDate}
                  onChange={(date: Date[]) => setStartDate(date[0] as Date)}
                  options={{ dateFormat: "Y-m-d" }}
                  className="w-[159px] h-[24px] pl-2 focus:outline-none"
                  placeholder="Select Date"
                />
                <img
                  src="/images/calendar-03.svg"
                  alt="Calendar Icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => handleIconClick("start")}
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Due Date
              </p>
              <div className="flex w-[219px] h-[44px] items-center justify-center rounded-full border border-[#D0D5DD]">
                <Flatpickr
                  ref={dueDatePickerRef} // Attach the ref to the Flatpickr
                  value={dueDate}
                  onChange={(date: Date[]) => setDueDate(date[0] as Date)}
                  options={{ dateFormat: "Y-m-d" }}
                  className="w-[159px] h-[24px] pl-2 focus:outline-none"
                  placeholder="Select Date"
                />
                <img
                  src="/images/calendar-03.svg"
                  alt="Calendar Icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => handleIconClick("due")}
                />
              </div>
            </div>
          </div>

          <div className="flex mt-6 flex-row w-[926px] h-[96px] items-center justify-between">
            <div className="w-[455px] h-[96px]">
              <p className="text-[#344054] text-left w-[127px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Requested Service
              </p>
              <div className="flex w-[455px] h-[44px] items-center justify-center rounded-full border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Service"
                  className="w-[427px] h-[24px] focus:outline-none pl-3 text-[#344054]"
                />
              </div>
            </div>

            <div className="w-[455px] h-[96px]">
              <p className="text-[#344054] text-left w-[69px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Attach file
              </p>
              <div className="flex w-[455px] h-[44px] items-center justify-center rounded-full border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Upload File"
                  className="w-[427px] h-[24px] focus:outline-none pl-3 text-[#344054]"
                />
                <img src="/images/upload.svg" alt="upload file" className="pr-3" />
              </div>
              <p className="w-[455px] h-[20px] text-[12px] pt-2">
                <span className="text-[#007F00]">Click to upload </span>or drag and drop SVG,
                PNG, JPEG OR GIF (max. 800x 400px)
              </p>
            </div>
          </div>

          <div className="w-[928px] ">
            <p className="text-[#344054] text-left w-[127px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
              Comment
            </p>
            <div className="flex flex-col w-[925px] h-auto items-start rounded-[10px] border border-[#D0D5DD]">
              <textarea
                placeholder="Service"
                className="w-[900px] mt-2 h-[100px] focus:outline-none pl-3 text-[#344054] border-red-400 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[928px] h-[40px]  mb-6 justify-between">
          <p className="text-[#B3261E] text-[14px] font-[Roboto]  font-[400]">
            Please note that when task status is changed, the affected person(s) <br /> will be
            notified.
          </p>

          <button className="w-[455px] h-[40px] bg-[#007F00] text-white rounded-full py-2 px-4 mb-6 hover:bg-green-500">
            Update & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
