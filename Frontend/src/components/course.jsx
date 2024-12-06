import React from 'react'
import list from "../assets/list.json"
import Cards from './cards'
function Course() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-17 px-4 dark:bg-slate-900 dark:text-white">
   <div className="mt-28 items-center text-center justify-center">
    <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">here!!</span></h1>
    <p className="mt-10">Here!! you can see all the paid and free books  provided by your own renowned university.You will be getting all your academic books here for free and all your favourite novels and daily magazines at minimal prices.</p>
    <button className="mt-4 px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 duration-300">Back</button>
   </div>
   <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
   { list.map((item)=>(<Cards item={item} key={item.id}/>)

   )
}
    </div>
    </div>
    </>
  )
}

export default Course
