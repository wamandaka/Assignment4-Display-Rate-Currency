import { useState, useEffect } from "react";
import Table from "./components/Table";
import { getRate } from "./api/getRate";
// import './App.css'

function App() {
  const [rate, setRate] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const currency = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];
  const calculateBuy = (rate) => (parseFloat(rate) * 1.02).toFixed(4);
  const calculateSell = (rate) => (parseFloat(rate) * 0.98).toFixed(4);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true); // Set loading state to true
        const result = await getRate();
        // Assuming result.rates contains the relevant rate data
        if (result && result.rates) {
          const ratesArray = currency.map((name) => result.rates[name]); // Map specific rates by names
          setRate(ratesArray);
        }
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setIsLoading(false); // Set loading state to false once data is fetched
      }
    })();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-success text-white">
      {isLoading ? (
        <div className="text-center">
          <p className="mt-2 uppercase">Loading rates, please wait...</p>
        </div>
      ) : (
        <Table
          rates={rate}
          currency={currency}
          calculateBuy={calculateBuy}
          calculateSell={calculateSell}
        />
      )}
    </div>
  );
}

export default App;
