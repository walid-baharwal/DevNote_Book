import React,{useContext,useState} from 'react'
import noteContext from '../../context/Context'
const AddNote = () => {
  const context = useContext(noteContext)
  const {addNote} = context;

  const [note,setNote] = useState({title:'',description:'',tag:''})
  const handleChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  }
  const handleClick = (e) => {

      e.preventDefault()
      if (note.description) {
        addNote(note)
        setNote({title:'',description:'',tag:''})
        
      }
      else{
        alert('Fields cant be empty')
      }
    }

  return (
    <>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-20 mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600" >Title</label>
            <input type="text" id="name" autoComplete='title' name="title" value={note.title}  onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600" >Tag</label>
            <input type="text" autoComplete='tag' value={note.tag} onChange={handleChange} id="email" name="tag" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="message" value={note.description} onChange={handleChange} name="description"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-BoxFocus-50 h-28 focus:bg-white focus:ring-2 focus:ring-BoxFocus-50  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto border-2 border-BoxFocus-50  py-2 px-8 focus:outline-none hover:bg-BoxFocus-50 hover:text-white rounded text-lg"
            onClick={handleClick} >Add Note</button>
        </div>
    
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AddNote