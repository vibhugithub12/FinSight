import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col md:flex md:flex-row md:h-screen bg-background-light py-4 md:p-0">
        <div className="bg-[url('/images/expense_bg.png')] bg-contain bg-center bg-no-repeat h-[50vh] md:h-full w-full"></div>
        <div className="md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
          <h2 className="text-primary font-bold text-2xl md:text-4xl px-8 md:p-0">
            Is your money{" "}
            <span className="ping-smooth font-semibold text-primary">
              disappearing
            </span>{" "}
            too?
          </h2>
          <p className="text-black font-light text-lg md:text-lg ">
            Let's fix that!
          </p>

          <NavLink to={"/tracker"}>
            <button className="bg-primary text-white w-fit text-lg md:text-lg p-3 md:p-3 hover:cursor-pointer hover:scale-110 hover:rounded-3xl transition-all  duration-500 ease-in-out ">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      <h2 className="text-black font-bold text-2xl md:text-4xl bg-background-light pt-12 text-center w-full ">
        Where Does Your Money Go?
      </h2>
      <div className=" md:flex-row flex flex-col h-[80vh] bg-background-light px-8 md:px-4">
        <div className="md:w-1/2 md:px-10 flex flex-col text-center items-center justify-center gap-4">
          <p className="text-lg md:text-3xl text-black font-semibold pt-8 md:pt-0"> 💡 Fun Fact</p>
          <p className="text-primary text-lg font-medium md:text-2xl md:text-left px-6 md:px-0">
            According to a recent survey, nearly 65% of people admit to making
            impulse purchases they later regret, and these purchases cost an
            average of $5,400 per year!
          </p>
        </div>
        <div className="bg-[url('/images/money_fact.png')] h-[50vh] md:h-full bg-contain bg-center bg-no-repeat w-full md:w-1/2"></div>
      </div>

      <h2 className="text-primary font-bold text-2xl md:text-4xl bg-background-light md:py-12 text-center w-full ">
        Why Monitoring Matters
      </h2>
      <div className="flex flex-col md:flex-row h-[80vh] bg-background-light px-4">
        <div className="bg-[url('/images/benefits.png')]  bg-contain bg-center bg-no-repeat h-[50vh] md:h-full w-full md:w-1/2"></div>
        <ul className="md:w-1/2 px-5 md:px-20 flex flex-col md:items-left md:text-2xl justify-center gap-2 md:gap-4">
          <li>🟢 Identifies Spending Patterns</li>
          <li>🟢 Sets Clear Goals</li>
          <li>🟢 Supports Emergency Planning</li>
          <li>🟢 Reduces Stress</li>
          <li>🟢 Improves Decision-Making</li>
          <li>&nbsp;</li>
          <button className="bg-black animate-bounce text-white mb-2 md:mb-0 text-lg md:text-lg md:w-fit p-1.5 md:p-3 hover:cursor-pointer hover:scale-110 hover:rounded-3xl transition-all  duration-500 ease-in-out ">
            <NavLink to={"/tracker"}>Start Tracking !</NavLink>
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Home;
