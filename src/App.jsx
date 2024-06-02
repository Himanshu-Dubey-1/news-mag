import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {

  const [category, setcategory] = useState("")

  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App