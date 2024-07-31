import './App.css'
import CountriesList from './components/CountriesList'
import CountriesInfo from './components/CountriesInfo'
import { useState } from 'react'

function App() {
  const [selectedCountry, selSelectedCountry] = useState(null)

  return (
    <div className='flex justify-center w-screen gap-10'>
      <CountriesList onCountrySelect={selSelectedCountry}/>
      <CountriesInfo country={selectedCountry}/>
    </div>
  )
}

export default App
