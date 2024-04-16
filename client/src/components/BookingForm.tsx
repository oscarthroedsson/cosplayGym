import { createPortal } from "react-dom";

interface BookingFormProps {
  closeForm: () => void; // Funktion som inte tar emot några argument och inte returnerar något
  getName: (e: React.ChangeEvent<HTMLInputElement>) => void; // Funktion som tar emot en React.ChangeEvent<HTMLInputElement> och inte returnerar något
  bookSession: () => void; // Funktion som inte tar emot några argument och inte returnerar något
}

export default function BookingForm({ closeForm, getName, bookSession }: BookingFormProps) {
  return createPortal(
    <div className="absolute h-full w-full inset-0 bg-slate-50 bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
      <div className=" md:max-h-[90%] xl:max-h-[80%] overflow-x-scroll rounded-md shadow-xl shadow-slate-200 bg-slate-100 p-6">
        <nav className="w-full text-end">
          <button onClick={closeForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        <form action="" className="w-full">
          <label htmlFor="" className="flex flex-col font-bold">
            Your name
            <input type="text" className="p-2 rounded-lg mr-2 font-light text-sm mt-2" onChange={getName} />
          </label>
          <button
            type="button"
            className="px-4 py-1 bg-amber-400 my-2 text-sm font-semibold rounded-md mr-auto w-full mt-6"
            onClick={bookSession}
          >
            Book session
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
