const key = import.meta.env.VITE_API_KEY;
const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${key}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`;

export async function getRate() {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}
