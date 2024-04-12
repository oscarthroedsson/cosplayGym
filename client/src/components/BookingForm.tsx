import { createPortal } from "react-dom";

export default function BookingForm() {
  return createPortal(
    <div className="absolute h-full w-full inset-0 bg-slate-50 bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
      <div className=" h-full md:max-h-[90%] xl:max-h-[80%] overflow-x-scroll rounded-md shadow-xl shadow-slate-200 bg-slate-100 p-6">
        <form action="" className="">
          <label htmlFor="">
            name
            <input type="text" />
          </label>
        </form>
      </div>
    </div>,
    document.body
  );
}
