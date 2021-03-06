import Locations from "./filterOptions/Locations";
export default function FitlerOptions({ filterStatus }) {
  return (
    <div className="h-[60px] transition-height duration-700 ease-in-out border-t solid border-[#e2e2e2] flex items-center px-[20px]">
      <Locations />
    </div>
  );
}
