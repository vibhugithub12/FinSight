import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";

const Tracker = () => {
  const [expenses, setExpenses] = useState({
    saving: 0,
    grocery_food: 0,
    cab_transport: 0,
    snacks: 0,
    others: 0,
  });

  const [credit, setCredit] = useState("");

  const [creditError, setCreditError] = useState(false);

  const makeCredit = () => {
    if (Number(credit) < 0) {
      setCredit("");
      return;
    }
    setExpenses({ ...expenses, saving: expenses.saving + Number(credit) });
    setCredit("");
    setCreditError(false);
  };

  const [debit, setDebit] = useState("");

  const [debitError, setDebitError] = useState(false);

  const[totalError,setTotalError]=useState(false);

  const [selectedExpense,setSelectedExpense]=useState('grocery_food');

  const makeDebit = () => {
    if (Number(debit) < 0) {
      setDebit("");
      return;
    }
    if(Number(debit) > expenses.saving){
      setTotalError(true);
      return;
    }else{
      setTotalError(false);
    }
    setExpenses({ ...expenses, 'saving': expenses.saving - Number(debit),[selectedExpense]:expenses[selectedExpense]+Number(debit)});
    setDebit("");
    setDebitError(false);
  };


  return (
    <div className="flex flex-col">

      <p className="text-4xl md:self-center text-center p-4">
        Say <span className="text-primary">Hello</span> to the Tracker
        👋
      </p>
      <div className="flex h-screen">
        <div className="hidden bg-[url('/images/tracker.png')] md:h-full md:flex bg-contain bg-center bg-no-repeat w-full md:w-1/2"></div>

        <div className="flex flex-col gap-8 py-12 align-middle w-full md:w-1/2">
          <div className="flex flex-col md:items-start items-center md:flex-row gap-2 w-full">
            <label className="text-xl " htmlFor="credit">
              Enter Credit amount
            </label>
            <div className="flex flex-col relative">
              <input
                value={credit}
                onChange={(e) => {
                  if (Number(e.target.value) < 0) {
                    setCreditError(true);
                    setCredit(e.target.value);
                    return;
                  } else {
                    setCreditError(false);
                    setCredit(Number(e.target.value));
                  }
                }}
                className="outline w-28 pl-2 py-1 outline-primary-light"
                type="number"
                min={0}
                max={999999}
                name=""
                id="credit"
              />
              {creditError && (
                <p className="absolute text-xs md:top-2 md:left-0 mt-8 w-50 -left-10 text-red-400 ">
                  Credit should be greater than 0!
                </p>
              )}
            </div>
            <button
              onClick={makeCredit}
              className="bg-primary px-4 mt-2 md:my-0 text-white py-1 hover:bg-secondary hover:scale-105 hover:cursor-pointer transition-all active:bg-secondary active:scale-95"
            >
              Add
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <label className="text-xl self-center pr-2" htmlFor="debit">
              Enter Debit amount
            </label>
            <div className="flex flex-col relative">
            <input
              value={debit}
              onChange={(e) => {
                console.log(Number(e.target.value)); 
          
                  if (Number(e.target.value) < 0) {
                    setDebitError(true);
                    setDebit(e.target.value);
                    return;
                  } else {
                    setDebitError(false);
                    setDebit(Number(e.target.value));
                  }
                }}
              className="outline w-28 pl-2 py-1 outline-primary-light"
              type="number"
              min={0}
              max={999999}
              name=""
              id="debit"
            />
              {debitError && (
                <p className="absolute text-xs md:top-2 md:left-0 mt-8 w-50 -left-10 text-red-400 ">
                  Debit should be greater than 0!
                </p>
              )
              }
              {totalError && (
                <p className="absolute text-xs md:top-2 md:left-0 mt-12 w-75 -left-23 text-red-400 ">
                  Total expenses cannot exceed the total income.
                </p>
              )}
            </div>
            <select value={selectedExpense} onChange={(e)=>{setSelectedExpense(e.target.value);console.log(e.target.value)}}
              className="outline outline-primary-light w-40 mt-6 md:my-0"
              name=""
              id=""
            >
              <option value="grocery_food">Grocery/Food</option>
              <option value="cab_transport">Cab/Transport</option>
              <option value="snacks">Snacks</option>
              <option value="others">Others</option>
            </select>
            <button onClick={makeDebit} className=" bg-primary px-4 mt-2 md:my-0 text-white py-1 hover:bg-red-400 hover:scale-105 hover:cursor-pointer  transition-all active:bg-red-400 active:scale-95">
              Spend
            </button>
          </div>

          <div>
            <PieChart
              series={[
                {
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },

                  data: [
                    { id: 0, value: expenses.saving, label: "Savings" },
                    {
                      id: 1,
                      value: expenses.grocery_food,
                      label: "Grocery/Food",
                    },
                    {
                      id: 2,
                      value: expenses.cab_transport,
                      label: "Cab/Transport",
                    },
                    { id: 3, value: expenses.snacks, label: "Snacks" },
                    { id: 4, value: expenses.others, label: "Others" },
                  ],
                },
              ]}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
