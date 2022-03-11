import { useState } from "react";
import FullSchedule from "../components/FullSchedule";
export default function Activity() {
  const [activeTabe, setActiveTab] = useState(1);
  const ToggleTabs = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex items-center justify-between add-shadow h-[56px] px-[20px]">
        <div className="flex items-center">
          <button
            className={`
          ${
            activeTabe === 1
              ? "w-[200px] h-[30px] text-[#0085FF] border-b-[3px] solid border-[#0085FF]"
              : "text-[#b0b8c0]"
          }
          w-auto  h-[55px] mr-10 text-sm font-semibold uppercase`}
            onClick={() => ToggleTabs(1)}
          >
            Full schedule
          </button>
          <button
            className={`
         ${
           activeTabe === 2
             ? "w-[200px] h-[30px] text-[#0085FF] border-b-[3px] solid border-[#0085FF]"
             : "text-[#b0b8c0]"
         }
           w-auto  h-[55px] mr-10 text-sm font-semibold uppercase`}
            onClick={() => ToggleTabs(2)}
          >
            My schedule
          </button>
          <button
            className={`
          ${
            activeTabe === 3
              ? "w-[200px] h-[30px]  text-[#0085FF] border-b-[3px] solid border-[#0085FF]"
              : "text-[#b0b8c0]"
          }
            w-auto  h-[55px] text-sm font-semibold uppercase`}
            onClick={() => ToggleTabs(3)}
          >
            Pending approval
          </button>
          <button
            className={`
          ${
            activeTabe === 4
              ? "w-[200px] h-[30px] text-[#0085FF] border-b-[3px] solid border-[#0085FF]"
              : "text-[#b0b8c0]"
          }
            w-auto  h-[55px]  text-sm font-semibold uppercase ml-10`}
            onClick={() => ToggleTabs(4)}
          >
            UNAVAILABILITY
          </button>
        </div>

        <div className="flex items-center">
          <button className="w-[36px] h-[36px] border solid border-[#d8d8d8] opacity-60 rounded-sm hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out mr-2.5">
            <img src="/fullscreen.svg" alt="full-screen-icon" />
          </button>
          <button className="w-[36px] h-[36px] border solid border-[#d8d8d8] opacity-60 rounded-sm hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out mr-2.5">
            <img src="/print.svg" alt="full-screen-icon" />
          </button>
          <button className="w-[36px] h-[36px] border solid border-[#d8d8d8] opacity-60 rounded-sm hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out">
            <img src="/export.svg" alt="full-screen-icon" />
          </button>
        </div>
      </div>

      {activeTabe === 1 ? <FullSchedule /> : ""}
      {activeTabe === 2 ? <div className="p-8">2</div> : ""}
      {activeTabe === 3 ? <div className="p-8">3</div> : ""}
      {activeTabe === 4 ? <div className="p-8">4</div> : ""}
    </>
  );
}
