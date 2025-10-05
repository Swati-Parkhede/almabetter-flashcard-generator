import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CreateFlashCardSet from '../components/CreateFlashCardSet/CreateFlashCardSet';
import EditFlashCardItemList from '../components/EditFlashCardItemList/EditFlashCardItemList';
import MyFlashCards from './MyFlashCards';

// Validation Schema using Yup
const validationSchema = Yup.object({
  groupName: Yup.string()
    .trim()
    .required('Group name is required'),
  description: Yup.string(),
  image: Yup.string(),
  flashCards: Yup.array()
    .of(
      Yup.object({
        term: Yup.string(),
        description: Yup.string(),
        image: Yup.string()
      })
    )
    .test('at-least-one-complete', 'At least one complete flashcard (both term and definition) is required', function(flashCards) {
      if (!flashCards || flashCards.length === 0) return false;
      
      const validFlashcards = flashCards.filter(
        card => card.term && card.term.trim() !== "" && card.description && card.description.trim() !== ""
      );
      
      return validFlashcards.length > 0;
    })
    .test('validate-partial-cards', 'If you fill either term or definition, both must be filled', function(flashCards) {
      if (!flashCards || flashCards.length === 0) return true;
      
      for (let i = 0; i < flashCards.length; i++) {
        const card = flashCards[i];
        const hasTerm = card.term && card.term.trim() !== '';
        const hasDescription = card.description && card.description.trim() !== '';
        
        // If either field has content, both must have content
        if ((hasTerm && !hasDescription) || (!hasTerm && hasDescription)) {
          return this.createError({
            message: `Flashcard ${i + 1}: Both term and definition must be filled if either one is filled`,
            path: `flashCards[${i}]`
          });
        }
      }
      
      return true;
    })
});

function CreateFlashCardsPage() {
  const initialValues = {
    groupName: "",
    description: "",
    image: "",
    flashCards: [{ term: "", description: "", image: "" }]
  };

  const handleSubmit = (values, { setSubmitting, resetForm, setFieldError }) => {
    try {
      // Filter out incomplete flashcards before saving
      const validFlashcards = values.flashCards.filter(
        card => card.term && card.term.trim() !== "" && card.description && card.description.trim() !== ""
      );

      if (validFlashcards.length === 0) {
        setFieldError('flashCards', 'At least one complete flashcard is required');
        setSubmitting(false);
        return;
      }

      const groupToSave = {
        ...values,
        flashCards: validFlashcards
      };

      const existingData = JSON.parse(localStorage.getItem("flashCardApp")) || {};
      existingData[values.groupName] = groupToSave;
      localStorage.setItem("flashCardApp", JSON.stringify(existingData));
      
      alert("Flashcard set created successfully!");
      resetForm();
      
      //ToDo: Route to my flashcard page
    } catch (error) {
      console.error('Error saving flashcard set:', error);
      alert('An error occurred while saving the flashcard set.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting, setFieldValue }) => (
        <Form>
          <CreateFlashCardSet 
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
          <EditFlashCardItemList 
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
          
          {/* Display top-level validation errors */}
          {errors.flashCards && typeof errors.flashCards === 'string' && (
            <div className="validation-errors" style={{ 
              color: 'red', 
              margin: '10px 0', 
              padding: '10px',
              backgroundColor: '#ffe6e6',
              border: '1px solid #ff9999',
              borderRadius: '4px'
            }}>
              <strong>{errors.flashCards}</strong>
            </div>
          )}
          
          <div className='BtnContainer'>
            <button 
              className='primary-btn' 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CreateFlashCardsPage;