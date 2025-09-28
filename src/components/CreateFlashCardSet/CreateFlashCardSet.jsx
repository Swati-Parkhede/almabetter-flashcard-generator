import React from 'react'
import './CreateFlashCardSet.css'
import { Formik, Form } from "formik";
import { EditFlashCardItemList } from '../EditFlashCardItemList/EditFlashCardItemList';
function CreateFlashCardSet() {
  return (
    <div className='CreateFlashPage'>
      <form >
        <label htmlFor="createGroup">Create Group*<br />
          <input list='categories' />
          <datalist id='categories'>
            <option value="a"></option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </datalist>
        </label>
      </form>
      <Formik
        initialValues={{ image: null }}
        onSubmit={(values) => {
          console.log(values.image);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
            />
          </Form>
        )}
      </Formik>
      <div>
        <label className='AddDesc' htmlFor="Add description">Add description</label><br/>
        <textarea />
      </div>
      <EditFlashCardItemList />
    </div>
  )
}

export default CreateFlashCardSet;