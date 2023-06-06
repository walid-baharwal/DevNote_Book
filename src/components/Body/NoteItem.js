import React, { useContext } from 'react'
import noteContext from '../../context/Context'

const NoteItem = ({ note }) => {
  const context = useContext(noteContext)
  const { deleteNote, updateModal ,updateENote } = context
  const dateString = note.date;
  const date = new Date(dateString);
  const day = date.getDate();

  const handleEdit = (note) => {
    updateModal(true)
    updateENote(note)
  }

  return (
    <>
      <div className="py-10 px-2 mx-3 mt-3 lg:w-[30%] md:w-[45%] border-2 rounded-3xl bg-gray-100 bg-opacity-75">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-BoxFocus-50 ">{note.month}</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">{day}</span>
          </div>
          <div className="flex-grow pl-2 pr-5">
            <div className="svgs flex justify-end pb-4">
<div className="delete" title='Delete Note'>
          <svg className='w-8 cursor-pointer fill-slate-500 hover:fill-slate-950'  onClick={() => deleteNote(note._id)} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 60 60" viewBox="0 0 60 60" id="delete"><path d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1
	h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2
	c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6
	h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"></path><path d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"></path></svg>
  </div>
  <div className="edit" title='Edit Note'>

            <svg className='w-8 fill-slate-500 hover:fill-slate-950 cursor-pointer ' onClick={()=> handleEdit(note)} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="edit"><path  d="M435.824,296.954a10,10,0,0,0-10,10v88.791a30.034,30.034,0,0,1-30,30H115.233a30.034,30.034,0,0,1-30-30V135.155a30.034,30.034,0,0,1,30-30h88.791a10,10,0,0,0,0-20H115.233a50.057,50.057,0,0,0-50,50V395.746a50.057,50.057,0,0,0,50,50H395.824a50.057,50.057,0,0,0,50-50V306.955A10,10,0,0,0,435.824,296.954Z"></path><rect width="206.495" height="66.596" x="214.903" y="161.57" transform="rotate(-45 318.15 194.868)"></rect><polygon points="197.775 315.246 249.815 300.83 212.191 263.206 197.775 315.246"></polygon><path d="M427.721,73.566h0a25.027,25.027,0,0,0-35.355,0L381.76,84.172l47.091,47.091,10.606-10.606a25.029,25.029,0,0,0,0-35.355Z"></path></svg>
  </div>
  </div>

            <h2 title='Tag' className="inline-block  py-1 px-1 tracking-widest text-xs rounded font-medium bg-BoxFocus-50 text-white mb-1 uppercase ">{note.tag}</h2>
            <h1 title='Title' className="title-font text-xl font-medium text-gray-900 mb-3">{note.title}</h1>
            <p className="leading-relaxed mb-5 break-all">{note.description}</p>
            <div className="inline-flex items-center" >
              <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">{note.name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem