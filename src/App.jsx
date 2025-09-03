
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react';

function App() {
  
  const Loadedcoffees = useLoaderData();
  const [coffees,setCoffees] = useState(Loadedcoffees)

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center text-purple-600 my-20'>
        Assalamualaikum here is the best coffee: {coffees.length}
      </h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
      }
      </div>
    </div>
  )
}

export default App
