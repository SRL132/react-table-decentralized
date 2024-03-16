import React, { useState } from 'react'
import AddModal from './AddModal'

type AddButtonProps = {
  className: string
}

const AddButton = ({className}: AddButtonProps) => {
    const [showModal, setShowModal] = useState(false)
    const handleButtonClick = () => {
        setShowModal(true)
      }
    
      const handleCloseModal = () => {
        setShowModal(false)
      }
      const handleAddJob = () => {
    
      }
  return (
    <>
      <button onClick={handleButtonClick} className={`btn btn-primary bg-warning text-dark ${className}`}>Add Job</button>
      {showModal && <AddModal onSubmit={handleAddJob} onClose={handleCloseModal}/>}
    </>
  )
}

export default AddButton