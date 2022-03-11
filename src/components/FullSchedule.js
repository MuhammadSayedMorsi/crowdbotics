import Date from "../components/SelectDate";
import GroupBy from "../components/GroupBy";
import { useState } from "react";
import FitlerOptions from "../components/FitlerOptions";
export default function FullSchedule() {
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterStats, setFilterStats] = useState(false);
  return (
    <>
      <div className="px-[20px] h-[60px] flex items-center justify-between">
        <div className="flex items-center">
          <button className="w-[36px] h-[36px] flex items-center justify-center border solid border-[#d8d8d8] opacity-60 rounded-sm hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out mr-2.5">
            <span className="w-[18px] h-[18px] flex border-2 solid border-[#e2e2e2]"></span>
          </button>
          <div className="flex items-center">
            <button className="svg-hover w-[36px] h-[36px] flex items-center justify-center border-b border-t border-l solid border-[#d8d8d8] opacity-60 rounded-tl-sm rounded-bl-sm hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e2e2e2"
                strokeWidth="3"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="svg-hover w-[36px] h-[36px] flex items-center justify-center border solid border-[#d8d8d8] opacity-60 hover:opacity-100 hover:bg-[#ebf5ff] transition duration-500	ease-in-out rounded-tr-sm rounded-br-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e2e2e2"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <Date />
        </div>
        <div className="flex items-center">
          <GroupBy />
          <button
            onClick={() => setFilterStatus(!filterStatus)}
            className="w-auto min-h-[36px] flex items-center justify-center border solid border-[#d8d8d8] hover:bg-[#ebf5ff] text-xs font-semibold text-[#5F7183] tracking-wider transition duration-500	ease-in-out rounded-sm px-2.5 ml-2.5"
          >
            <span className={filterStatus ? "text-[#0085ff]" : ""}>
              Filters
            </span>
            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
              <g
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h34v34H0z" />
                <path
                  d="M16 17h10m-7 5H8m0-5h5m9 5h4M8 12h11m3 0h4m-4-2v4-4zm-3 10v4m-6-9v4"
                  stroke={filterStatus ? "#0085ff" : "#9CA6B0"}
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
          <button
            onClick={() => setFilterStats(!filterStats)}
            className="w-auto min-h-[36px] flex items-center justify-center border solid border-[#d8d8d8] hover:bg-[#ebf5ff] text-xs font-semibold text-[#5F7183] tracking-wider transition duration-500	ease-in-out rounded-sm px-2.5 ml-2.5"
          >
            <span className={filterStats ? "text-[#0085ff]" : ""}>Stats</span>

            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h34v34H0z" />
                <path
                  d="M13 17v3m-4-1v1m8-5v5m4-7v7m4-10v10M8 24h18"
                  stroke={filterStats ? "#0085ff" : "#9CA6B0"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      {filterStatus ? <FitlerOptions filterStatus={filterStatus} /> : ""}
      {filterStats ? (
        <div className="bg-[#eaeef2] flex items-center justify-center">
          <div class="flex flex-col items-center justify-center px-[25px] hover:bg-[#e1e5e9] h-[60px] cursor-pointer transition duration-500	ease-in-out">
            <div class="text-[#0085FF] text-lg">0</div>
            <div class="text-xs text-[#97A2AE] font-semibold uppercase">
              available shifts
            </div>
          </div>
          <div class="flex flex-col items-center justify-center px-[25px] hover:bg-[#e1e5e9] h-[60px] cursor-pointer transition duration-500	ease-in-out">
            <div class="text-[#0085FF] text-lg">0</div>
            <div class="text-xs text-[#97A2AE] font-semibold uppercase">
              available shifts
            </div>
          </div>
          <div class="flex flex-col items-center justify-center px-[25px] hover:bg-[#e1e5e9] h-[60px] cursor-pointer transition duration-500	ease-in-out">
            <div class="text-[#0085FF] text-lg">0</div>
            <div class="text-xs text-[#97A2AE] font-semibold uppercase">
              available shifts
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
