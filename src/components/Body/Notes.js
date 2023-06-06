import React,{useContext,useEffect} from 'react'
import NoteItem from './NoteItem'
import noteContext from '../../context/Context'
import Edit from './Edit'

const Notes = () => {
    const context = useContext(noteContext)
    const {note,getNotes,getUser} = context;
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getUser();
          await getNotes();
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
      // eslint-disable-next-line
    },[]);


  return (
    <>

    <div className="flex">
    <Edit/>
    </div>


      <section className="text-gray-600 body-font">
  <div className="container px-8 py-24 mx-auto">
    <div className="flex flex-wrap lg:ml-16 md:ml-4 -my-8">
        {note.map((note) => (
            <NoteItem  note={note} key={note._id}/>
        ))}
      {/* <NoteItem/> */}
    
    </div>
  </div>
</section>
    </>
  )
}

export default Notes