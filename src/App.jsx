import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Header from './components/Header'

function App() {
  const loadedCoffees=useLoaderData()
  const [coffees,setCoffees]=useState(loadedCoffees)

  return (
  <div>
      <Header></Header>
    <div className='py-10 space-y-5'>
    
      <h1 className='text-4xl text-purple-700 text-center'>Coffee Store</h1>
     <div className='grid md:grid-cols-2 gap-10 container mx-auto'>
     {
      coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
     }
     </div>
     
    </div>
  </div>
  )
}

export default App
