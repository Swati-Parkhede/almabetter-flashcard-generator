import React, { useState } from 'react'
import CreateFlashCardSet from '../components/CreateFlashCardSet/CreateFlashCardSet';
import EditFlashCardItemList from '../components/EditFlashCardItemList/EditFlashCardItemList';

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
    //route to my flashcard page
  }

  const handleGroupDetailsChange = (groupName, description) => {
    group["groupName"] = groupName;
    group["description"] = description;
    setGroup(group);
  }

  return (
    <>
      <CreateFlashCardSet detailsChanged={handleGroupDetailsChange} />
      <EditFlashCardItemList />
      <div className='BtnContainer' >
        <button className='CreateFlashcardBtn' onClick={handleCreateBtnClick}>Create</button>
      </div>
    </>
  )
}

export default CreateFlashCardsPage;