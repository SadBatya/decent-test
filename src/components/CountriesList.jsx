import { useEffect, useState } from "react";
import axios from "axios";

export default function CountriesList({ onCountrySelect }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(data);
      } catch (error) {
        console.error(error, "ошибка запроса Api");
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="flex flex-col text-left gap-2 overflow-y-auto max-h-screen">
      {countries.map((country, index) => (
        <button
          key={index}
          className="border"
          onClick={() => onCountrySelect(country)}
        >
          {country.name.common}
        </button>
      ))}
      <button>asdasdsad</button>
    </div>
  );
}
