import React from 'react'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import PickOfTheWeek from './Components/PickOfTheWeek'
import Comments from './Components/Comments'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Menu/>
      <PickOfTheWeek/>
      <Comments/>
      <div className="text-center my-3 text-primary small">Copyright 2022-2023</div>
      
    </>
  )
}

export default App