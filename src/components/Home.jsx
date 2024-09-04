import React from 'react'
import { useFormik } from 'formik';
import bgImage from '../images/bg-1.jpg'
import bgImage2 from '../images/bg-2.jpg'
import bgImage3 from '../images/bg-3.webp'
import bgImage4 from '../images/bg-4.jpg'
export const Home = () => {
    const formik = useFormik({
        initialValues: {
          Name: '',
          Title: '',
          Company:'',
          Number:'',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      const validate = values => {
        const errors = {};
    
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.Name) {
          errors.Name = 'Required';
        } else if (values.Name.length < 20) {
          errors.Name = 'Must be 20 characters or less';
        }
        if (!values.Title) {
            errors.Name = 'Required';
        } else if (values.Title.length < 20) {
            errors.Title = 'Must be 20 characters or less';
        }
        if (!values.Company) {
            errors.Company = 'Required';
        } else if (values.Company.length < 20) {
            errors.Company = 'Must be 20 characters or less';
        }
        
          
        return errors;
      };
      
  return (
    <div className="flex flex-row ">
        
        <div className="flex flex-col bg-white w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage2})` }}>
        <h2 className="font-bold text-2xl my-5">Fill Your Details..</h2>
        <form  className="flex flex-col gap-10 items-center" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row font-semibold text-2xl  ">
            <label  className="mr-24" htmlFor="Name"> Name </label>
            <input
                id="Name"
                name="Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Name}
                className="border-2 text-black border-sky-700 w-52 text-base "
            />
            </div>
            {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}
        
            <div className="flex flex-row font-semibold text-2xl  ">
            <label className="mr-28" htmlFor="Title">Title</label>
            <input
                id="Title"
                name="Title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Title}
                className="border-2 border-sky-700 w-52 text-base"
            />
            </div>
            {formik.errors.Title ? <div>{formik.errors.Title}</div> : null}
        
            <div className="flex flex-row font-semibold text-2xl  ">
            <label className="mr-16" htmlFor="Company">Company</label>
            <input
                id="Company"
                name="Company"
                type="Text"
                onChange={formik.handleChange}
                value={formik.values.Company}
                className="border-2 border-sky-700 w-52 text-base "
            />
            </div>
            {formik.errors.Company ? <div>{formik.errors.Company}</div> : null}
            <div className="flex flex-row font-semibold text-2xl  ">
            <label  className="mr-2" htmlFor="Number">Phone Number</label>
            <input
                id="Number"
                name="Number"
                type="Text"
                onChange={formik.handleChange}
                value={formik.values.Number}
                className="border-2 border-sky-700 w-52 text-base "
            />
            </div>
            {formik.errors.Number ? <div>{formik.errors.Number}</div> : null}
            <div className="flex flex-row font-semibold text-2xl  ">
            <label className="mr-5" htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border-2 border-sky-700 w-52 text-base"
            />
            </div>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
       <button  className="font-medium text-xl bg-blue-800 text-white px-2 py-2 rounded" type="submit">Submit</button>
       </form>
        </div>
        <div className="flex flex-col bg-neutral-300 w-1/2 h-screen ps-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage2})` }}>
            <p className="text-xl my-5">Your card is ready.Take a Look....</p>
            <div className="flex flex-row w-96 bg-gradient-to-r from-black via-gray-800 to-black h-52 ml-8 rounded-lg text-white">
            <p className="font-bold text-3xl w-1/2 items-center my-20 mx-10"> {formik.values.Company}</p>

            <div className="flex flex-col font-medium my-14 pr-2 italic font-mono ">
            <p>{formik.values.Name}</p>
            <p>{formik.values.Title} </p>
            
            <p>{formik.values.Number}</p>
            <p>{formik.values.email}</p>
            </div>

            </div>

        </div>


    </div>
  )
}
