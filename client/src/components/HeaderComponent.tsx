export function HeaderComponent() {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-12 w-full gap-12">
        <div className=" flex flex justify-between items-center flex-col gap-8 sm:gap-16">
          <hgroup className="text-center flex flex-col gap-6 max-w-2xl">
            <h1 className="font-semibold text-4xl">WE CREATE SUPERHEROS</h1>
            <p>
              We help you get strong, in shape. After a few weeks will you look in the mirror to see your super hero,
              not in the cinema or televevision
            </p>
          </hgroup>

          <div className="flex flex-col gap-8 sm:flex-row">
            <button className="bg-pink-200 py-3 px-6 rounded-md text-pink-800 hover:bg-pink-300 hover:text-pink-900">
              <p className="font-light">
                <span className="font-medium">Read more</span> about us
              </p>
            </button>
            <a
              href="#calander"
              className="bg-emerald-100 py-3 px-6 rounded-md text-emerald-800 hover:bg-emerald-300 hover:text-emerald-900"
            >
              <p className="font-light">
                <span className="font-medium">Become</span> a Super Hero
              </p>
            </a>
          </div>
          <div className="mt-12">
            <a href="#calander">
              <svg
                className="w-12 animate-bounce text-emerald-300"
                aria-hidden="true"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
