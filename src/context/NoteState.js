
import noteContext from "./Context";
import { useState } from "react";

const NoteState = (props)=>{
    const [modal,setModal] = useState(false)
    const [Enote,setENote] = useState({title:'',description:'',tag:''})
    const [user,setUser] = useState({})
    const [note,setNote] =  useState([])

    const updateModal =(value)=>{
        setModal(value);
    }
    const updateENote =(value)=>{
        setENote(value);
    }


const getUser =async ()=>{
    let result = await fetch(`${process.env.REACT_APP_HOST}/api/auth/getuser`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        }
    });
    result = await result.json();
    setUser(result);
}
const getNotes =async ()=>{
    let result = await fetch(`${process.env.REACT_APP_HOST}/api/notes/fetchallnotes`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        }
    });
    let newNote = await result.json();
    setNote(newNote);
}

const addNote = async (nte) =>{
    let result = await fetch(`${process.env.REACT_APP_HOST}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({title:nte.title,description:nte.description,tag:nte.tag}),
      });
      let newNote = await result.json();
    
    setNote([newNote,...note]);
    

}

const deleteNote = async(id) =>{
    const newNote=  note.filter(not => not._id!== id)
    setNote(newNote)
    let result = await fetch(`${process.env.REACT_APP_HOST}/api/notes/deletenote/${id}`, {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });
      result = await result.json();
      console.log(result);
      if(result.Success) {
        alert(result.Success)
      }
      
      
    
}

const editNote = async(nte) =>{
    for (let index = 0; index < note.length; index++) {
       const element = note[index];
        if (element._id === nte._id) {
            element.title = nte.title
            element.tag = nte.tag
            element.description = nte.description
        }
        
    }
    let result = await fetch(`${process.env.REACT_APP_HOST}/api/notes/updatenote/${nte._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({title:nte.title,description:nte.description,tag:nte.tag}),
      });
      // eslint-disable-next-line
      result = await result.json();


}


    return(
        <noteContext.Provider value={{note,addNote,deleteNote,getNotes,modal,updateModal,Enote,editNote,updateENote,user,getUser}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;