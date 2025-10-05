import React from 'react'
import { FieldArray, ErrorMessage } from 'formik';
import "./EditFlashCardItemList.css"
import EditFlashCardItem from '../EditFlashCardItem/EditFlashCardItem'

const EditFlashCardItemList = ({ values, errors, touched, setFieldValue }) => {

    return (
        <div className='flashCardList'>
            <FieldArray name="flashCards">
                {({ push, remove }) => (
                    <div>
                        {values.flashCards && values.flashCards.map((flashcard, index) => (
                            <div key={index}>
                                <EditFlashCardItem
                                    cardItemIndex={index}
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    setFieldValue={setFieldValue}
                                    onRemove={() => remove(index)}
                                    showRemove={values.flashCards.length > 1}
                                />
                                {/* Display individual flashcard errors */}
                                {errors.flashCards && errors.flashCards[index] && typeof errors.flashCards[index] === 'string' && (
                                    <div style={{ 
                                        color: 'red', 
                                        fontSize: '12px', 
                                        marginTop: '4px',
                                        marginBottom: '8px',
                                        padding: '4px 8px',
                                        backgroundColor: '#ffe6e6',
                                        border: '1px solid #ff9999',
                                        borderRadius: '4px'
                                    }}>
                                        {errors.flashCards[index]}
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        <div className='AddCardItemBtn' onClick={() => push({ term: "", description: "", image: "" })}>
                            + Add more
                        </div>
                        
                        {/* Display flashCards array level errors */}
                        <ErrorMessage name="flashCards" component="div" style={{ 
                            color: 'red', 
                            fontSize: '14px', 
                            marginTop: '8px',
                            padding: '8px',
                            backgroundColor: '#ffe6e6',
                            border: '1px solid #ff9999',
                            borderRadius: '4px'
                        }} />
                    </div>
                )}
            </FieldArray>
        </div>
    )
}

export default EditFlashCardItemList
