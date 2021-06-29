import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SongForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
        <h1>Add Song</h1>
        <Form>
            <div>
                <Field className="form-control" type="text" name="movie" placeholder="Movie"/>
                {touched.movie && errors.movie && <span style={{ color: 'red',fontSize: 'small'}}>{errors.movie}</span>}
            </div>
            <div>
                <Field className="form-control" type="text" name="title" placeholder="Title"/>
                {touched.title && errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div>
            <div>
                <Field className="form-control" type="number" name="songlength" placeholder="Song Length"/>
                {touched.songlength && errors.songlength && <span style={{ color: 'red' }}>{errors.songlength}</span>}
            </div>
            <div>
                <Field className="form-control" type="text" name="singer" placeholder="Singer"/>
                {touched.singer && errors.singer && <span style={{ color: 'red' }}>{errors.singer}</span>}
            </div>
            <br/>
            <button className="btn btn-dark" type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikSongForm = withFormik({
    mapPropsToValues({movie, title, songlength, singer}) {
        return {
            movie: movie || '',
            title: title || '',
            songlength: songlength || '',
            singer: singer || '',
        }
    },
    validationSchema: Yup.object().shape({
        movie: Yup.string().min(3, 'Movie name must be at least 3 characters in length').required('Movie Name is required'),
        title: Yup.string().min(4, 'Title must be at least 4 characters in length').required('Title is required'),
        songlength: Yup.number().required('Song Length is required'),
        singer: Yup.string().min(4, 'Singer must be at least 4 characters in length').required('Singer Name is required')
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if (values.movie === 'God') {
                setErrors({ movie: 'You cannot add God as an employee' })
            } else {
                resetForm()
                alert(JSON.stringify(values));
            }
			setSubmitting(false);
        }, 2000);
    }
})(SongForm)

export default FormikSongForm
