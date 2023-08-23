import React, { useContext, useState } from 'react'
import noteContext from '../../context/Context'

const DeleteModal = ({ id }) => {
    const context = useContext(noteContext);
    const { deleteNote, updateDeleteModal } = context;
    const [deletingText, setDeletingText] = useState(false)

    const handleDeleteModal = () => {
        setDeletingText(true)
        deleteNote(id);
        setDeletingText(false);
        updateDeleteModal(false);


    }
    return (
        <>
            <div id="deleteModal" tabIndex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed mt-[35vh] right-0 ml-[37vw] z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-xl shadow dark:bg-gray-800 sm:p-5">
                        <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                            <span className="sr-only">Close modal</span>
                        </button>
                        <svg className="text-gray-600  w-10 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        <p className="mb-4 text-gray-500 dark:text-gray-900">Are you sure you want to delete this item?</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button data-modal-toggle="deleteModal" onClick={() => updateDeleteModal(false)} type="button" className="py-2 px-3 text-base font-medium text-BoxWhite-50 bg-BoxFocus-50 rounded-lg border-1  hover:bg-white  hover:border-BoxFocus-50  hover:text-gray-900 focus:z-10 ">
                                No, cancel
                            </button>
                            <button type="submit" onClick={handleDeleteModal} className="py-2 px-3 text-base font-medium text-center 
               border-1 border-red-600 text-red-600 bg-BoxWhite-50 rounded-lg hover:text-BoxWhite-50 hover:bg-red-600  ">
                                Yes, I'm sure
                            </button>
                        </div>
                        {
                            deletingText &&
                            <p className="mb-2 mt-2 text-gray-500 dark:text-gray-900">Deleted</p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal
