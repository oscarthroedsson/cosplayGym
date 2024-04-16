export function HeaderComponent() {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-12 w-full gap-12">
        <div className=" flex flex justify-between items-center flex-col gap-8 sm:gap-16">
          <hgroup className="text-center flex flex-col gap-6 max-w-2xl">
            <h1 className="font-semibold text-4xl">WE CREATE SUPERHEROS</h1>
            <p>
              We help you get strong and in shape. After a few weeks, you will look in the mirror and see your superhero
              self, not on the cinema or television.
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
        </div>
      </div>
    </>
  );
}
