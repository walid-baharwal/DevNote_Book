import React,{useContext} from 'react'
import noteContext from '../../context/Context'

const Edit = () => {
  const context = useContext(noteContext)

  const {modal,updateModal,Enote,updateENote,editNote} = context
  
  const handleChange = (e)=>{
    e.preventDefault();
    updateENote({...Enote,[e.target.name]:e.target.value})
  }
  const handleClick = (note)=>{
    editNote(note);
    updateModal(false)
  }
  
  return (
   <>

  { modal &&

<div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow  lg:left-[60%] md:left-[8%] top-20">
         
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Update Note
                </h3>
                <button onClick={()=>updateModal(false)} type="button" className="text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-black" data-modal-hide="staticModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
       
            <div className="p-1 space-y-6">

            <section className="text-gray-600 body-font relative pb-2">
  <div className="container sm:py-0 md:py-0 py-4 mx-auto">
    <div className=" md:w-3/4 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600" >Title</label>
            <input type="text" id="ename" name="title" onChange={handleChange} value={Enote.title} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600" >Tag</label>
            <input type="text" onChange={handleChange} id="eemail" name="tag" value={Enote.tag} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="emessage" onChange={handleChange} name="description"  value={Enote.description}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 h-28 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto border-2 border-BoxFocus-50  py-2 px-8 focus:outline-none hover:bg-BoxFocus-50 hover:text-white rounded text-lg"
            onClick={()=>handleClick(Enote)}  >Update Note</button>
        </div>
    
      </div>
    </div>
  </div>
</section>
             
            </div>
         
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                {/* <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button> */}
                {/* <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
            </div>
        </div>
    </div>
</div>

}
   </>
  )
}

export default Edit