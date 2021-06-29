import React from 'react';
import axios from "axios";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {Prompt} from 'react-router';

const API_URL = 'http://localhost:3005';
let submitted = true;

export const SongForm = () => {
  const validate = Yup.object({
    Movie: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Title: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    SongLength: Yup.string()
      .required('Song length is required'),
    Singer: Yup.string()
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
  })

  return (
    <div>
    <Formik
      initialValues={{
        Movie: '',
        Title: '',
        SongLength: '',
        Singer: ''
      }}
      validationSchema={validate}
      onSubmit={(values, submitProps) => {
         console.log(values)
        const url = `${API_URL}/data`;
        const ops = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify(values) ,
          url: url
          };
          axios( ops).then((res) => {
          console.log("post response: " + res);
          }).catch(function (error) {
          console.log("post error: " + error);
          });
          
        submitted=false;
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        

      }}

    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Movie" name="Movie" type="text" />
            <TextField label="Title" name="Title" type="text" />
            <TextField label="Song Length" name="SongLength" type="number" />
            <TextField label="Singer" name="Singer" type="text" />
            <button className="btn btn-dark mt-3" type="submit" disabled={!formik.isValid || formik.isSubmitting}>Add Song</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
             <span style={{display:"none"}}>Song is added</span>
          </Form>
        </div>
      )}
    </Formik>
    <Prompt
      when={submitted}
      message='Are you sure you want to leave without adding song?'
    />
  </div>
  )
}