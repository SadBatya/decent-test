import { useEffect, useState } from "react";
import axios from "axios";

export default function CountriesList({ onCountrySelect }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <div
          key={index}
          className="border m-1 p-2 cursor-pointer hover:bg-gray-500 transition-all"
          onClick={() => onCountrySelect(country)}
        >
          {country.name.common}
        </div>
      ))}
    </div>
  );
}
