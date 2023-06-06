import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const Home = () => {
  return (
    <>
    <AddNote/>
    <div className="container w-[70%] ">
      <hr />
    </div>
      <Notes/>
    </>
  )
}

export default Home