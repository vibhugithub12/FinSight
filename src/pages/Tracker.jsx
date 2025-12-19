const Tracker = () => {
  return (
    <div className="flex flex-col">
      <p className="text-4xl md:self-center text-center p-4">
        Say <span className="text-primary underline">Hello</span> to the Tracker 👋
      </p>
      <div className="flex h-screen">
        <div className="hidden bg-[url('/images/tracker.png')] md:h-full md:flex bg-contain bg-center bg-no-repeat w-full md:w-1/2"></div>

        <div className="flex flex-col gap-8 py-12 align-middle w-full md:w-1/2">

          <div className="flex flex-col items-center md:flex-row gap-2 w-full">
            <label className="text-xl self-center" htmlFor="credit">Enter Credit amount </label>
            <input className="outline w-28 pl-2 py-1 outline-primary-light" type="number" min={0} max={999999} name="" id="credit" />
            <button className="bg-primary px-4 text-white py-1 hover:bg-secondary hover:scale-105 hover:cursor-pointer transition-all active:scale-95">Add </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <label className="text-xl self-center pr-2" htmlFor="debit" >Enter Debit amount</label>
            <input className="outline w-28 pl-2 py-1 outline-primary-light" type="number" min={0} max={999999} name="" id="debit" />
            <select className="outline outline-primary-light w-40" name="" id="">
              <option value="">Grocery/Food</option>
              <option value="">Cab/Transport</option>
              <option value="">Snacks</option>
              <option value="">Others</option>
            </select>
            <button className="bg-primary px-4 text-white py-1 hover:bg-red-400 hover:scale-105 hover:cursor-pointer transition-all active:scale-95">Spend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
