import React, { useState } from 'react'
import CreateFlashCardSet from '../components/CreateFlashCardSet/CreateFlashCardSet';
import EditFlashCardItemList from '../components/EditFlashCardItemList/EditFlashCardItemList';
import MyFlashCards from './MyFlashCards';

function CreateFlashCardsPage() {
  const [group, setGroup] = useState({
    groupName: "",
    description: "",
    flashCards: []
  });

  const handleCreateBtnClick = () => {
    const existingData = JSON.parse(localStorage.getItem("flashCardApp")) || {};
    existingData[group.groupName] = group;
    localStorage.setItem("flashCardApp", JSON.stringify(existingData));
    //ToDo: Route to my flashcard page
  }

  const handleGroupDetailsChange = (groupName, description) => {
    group["groupName"] = groupName;
    group["description"] = description;
    setGroup(group);
  }

  const handleFlashcardlistChange = (flashcards) => {
    group["flashCards"] = flashcards;
    setGroup(group);
  }

  return (
    <>
      <CreateFlashCardSet detailsChanged={handleGroupDetailsChange} />
      <EditFlashCardItemList listChanged={handleFlashcardlistChange} />
      <div className='BtnContainer' >
        <button className='CreateFlashcardBtn' onClick={handleCreateBtnClick}>Create</button>
      </div>
      <MyFlashCards />
      
    </>
  )
}

export default CreateFlashCardsPage;