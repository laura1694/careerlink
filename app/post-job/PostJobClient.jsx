"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase.config';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { CiCircleCheck } from "react-icons/ci";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function PostJobClient({ session }) {

    const [sending, setSending] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const author = session.user.name
    const authorImg = session.user.image
    const timestamp = new Date().toLocaleDateString()

    const initVal = {
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
        requirements: "",
        link: ""
    }

    const formValidation = Yup.object({
        title: Yup.string().min(5, "Minimum of 5 characters").required("This is required"),
        company: Yup.string().required("This is required"),
        location: Yup.string().required("This is required"),
        type: Yup.string().required("This is required"),
        description: Yup.string().required("This is required").min(10, "Minimum of 10 characters"),
        requirements: Yup.string().required("This is required"),
        link: Yup.string().url("Enter a valid URL")
    })

    return (
        <main className="min-h-dvh p-3">

            <h1 className='text-center md:text-3xl lg:w-1/2 mx-auto font-semibold my-10'>
                Post a Job Opportunity and Connect with Top Talent
            </h1>

            <Formik
                initialValues={initVal}
                validationSchema={formValidation}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        setSending(true)

                        await addDoc(collection(db, "jobs"), {
                            ...values,
                            author,
                            authorImg,
                            timestamp
                        })

                        handleOpen()
                        resetForm()

                    } catch (error) {
                        console.error("Error posting job:", error)
                        alert("Something went wrong ❌")
                    } finally {
                        setSending(false)
                    }
                }}
            >

                <Form className='border border-gray-200 lg:w-1/2 mx-auto p-5 rounded-md shadow-md flex flex-col gap-5 bg-white'>

                    {/* JOB TITLE */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Job Title</label>
                        <Field
                            className="w-full border px-3 py-2 rounded-md"
                            placeholder="e.g. Frontend Developer"
                            name="title"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='title' />
                    </div>

                    {/* COMPANY */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Company Name</label>
                        <Field
                            className="w-full border px-3 py-2 rounded-md"
                            placeholder="e.g. Google, Flutterwave"
                            name="company"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='company' />
                    </div>

                    {/* LOCATION */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Location</label>
                        <Field
                            className="w-full border px-3 py-2 rounded-md"
                            placeholder="e.g. Lagos, Remote"
                            name="location"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='location' />
                    </div>

                    {/* JOB TYPE */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Job Type</label>
                        <Field
                            as="select"
                            name="type"
                            className="w-full border px-3 py-2 rounded-md"
                        >
                            <option value="">Select job type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                        </Field>
                        <ErrorMessage component="p" className='text-xs text-red-600' name='type' />
                    </div>

                    {/* DESCRIPTION */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Job Description</label>
                        <Field
                            as="textarea"
                            rows="3"
                            className="w-full border px-3 py-2 rounded-md"
                            name="description"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='description' />
                    </div>

                    {/* REQUIREMENTS */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Requirements</label>
                        <Field
                            as="textarea"
                            rows="3"
                            className="w-full border px-3 py-2 rounded-md"
                            name="requirements"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='requirements' />
                    </div>

                    {/* LINK */}
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700'>Application Link</label>
                        <Field
                            className="w-full border px-3 py-2 rounded-md"
                            placeholder="https://company.com/apply"
                            name="link"
                        />
                        <ErrorMessage component="p" className='text-xs text-red-600' name='link' />
                    </div>

                    {/* BUTTON */}
                    <button
                        disabled={sending}
                        type='submit'
                        className='bg-blue-600 text-white px-6 py-2 rounded-md w-fit text-xl uppercase'
                    >
                        {
                            sending ? (
                                <FiLoader className='animate-spin text-2xl' />
                            ) : (
                                <span className='flex items-center gap-2'>
                                    Post Job
                                    <FaRegPaperPlane />
                                </span>
                            )
                        }
                    </button>

                </Form>
            </Formik>

            {/* SUCCESS MODAL */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={style} className="flex flex-col items-center gap-5">
                    <CiCircleCheck className='text-7xl text-green-600' />
                    <Typography>Your job was posted successfully 🎉</Typography>
                </Box>
            </Modal>

        </main>
    )
}