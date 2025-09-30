import React from 'react'
import CreateFlashCardSet from '../components/CreateFlashCardSet/CreateFlashCardSet';
import EditFlashCardItemList from '../components/EditFlashCardItemList/EditFlashCardItemList';

function CreateFlashCardsPage() {
  return (
    <>
      <CreateFlashCardSet />
      <EditFlashCardItemList />
      <div className='BtnContainer' >
        <button className='CreateFlashcardBtn'>Create</button>
      </div>
    </>
  )
}

export default CreateFlashCardsPage;