function CountriesInfo({ country }) {
  if (!country) {
    return (
      <p className="flex flex-1 justify-center items-center">
        Select a country to see details
      </p>
    );
  }
  console.log(country);
  return (
    <div className="flex flex-col gap-4 flex-1 justify-center items-center text-center">
      <h1>Country: {country.name?.common}</h1>
      <p className="text-3xl">Capital: {country?.capital}</p>

      <img src={country.flags?.png} alt="" width={"150px"} />
      <div>
        <p className="mb-2">Description about flag:</p>
        {country.flags?.alt ? (
          <p>{country.flags.alt}</p>
        ) : (
          <p>No additional description available.</p>
        )}
      </div>
    </div>
  );
}

export default CountriesInfo;
