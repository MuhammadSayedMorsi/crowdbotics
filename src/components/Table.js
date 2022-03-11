import AddNote from "./AddNote";
export default function Table() {
  return (
    <div>
      <table className="w-full text-left bg-[#f2f5f7] ">
        <tr>
          <th></th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                MON 7
              </span>
              <AddNote />
            </div>
          </th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                WED 23
              </span>
              <AddNote />
            </div>
          </th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                FRI 43
              </span>
              <AddNote />
            </div>
          </th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                SAT 8
              </span>
              <AddNote />
            </div>
          </th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                MON 6
              </span>
              <AddNote />
            </div>
          </th>
          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                SUN 23
              </span>
              <AddNote />
            </div>
          </th>

          <th>
            <div className="flex justify-center items-center  cursor-pointer td-text transition-all duration-500 ease-in-out">
              <span className="text-sm font-semibold text-[#97A2AE] hover:underline mr-2">
                MON 3
              </span>
              <AddNote />
            </div>
          </th>
        </tr>
        <tr>
          <td>
            <div className="show-move flex items-center ml-[20px] cursor-pointer relative transition duration-500 ease-in-out">
              <img
                src="/move-indicator.svg"
                alt="move-icon"
                className="absolute -left-3 opacity-0"
              />
              <div className="w-[30px] h-[30px] bg-black rounded-full mr-[6px]" />
              <div className="flex flex-col items-start">
                <h6 className="text-xs text-[#646464] font-semibold">
                  Muhammad Sayed
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
          <td>
            <div
              className="opacity-0 hover:opacity-100 h-[36px] border-2 solid border-[#A0AFBE]  flex rounded-sm mx-[6px]  justify-center items-center cursor-pointer transition duration-500 ease-in-out relative before:content-['+'] before:text-[30px] before:absolute before:-top-2.5 before:text-[#a0afbe]
            "
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
