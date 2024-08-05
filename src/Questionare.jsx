import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Questionare = () => {
  const formRef = useRef();

  const submit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Send form data to Google Sheets
    const formEle = formRef.current;
    const formData = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbyizDsoUZxZQ66xie5soBrgc79Pzeqmq1SZSVWc6_A1ZcfrpjEg4eyDsJDoolCIe_HZkg/exec',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_mhblrvt', // Your EmailJS service ID
        'template_dp6su6l', // Your EmailJS template ID
        formRef.current,
        'flkIJMq5whfnkSsyW' // Your EmailJS user ID
      )
      .then(
        () => {
          console.log('Email sent successfully!');
        },
        (error) => {
          console.log('Failed to send email...', error.text);
        }
      );
  };

  return (
    <form ref={formRef} className='form' onSubmit={submit}>
      <div className="space-y-12 sm:space-y-16 py-10 bg-white px-20 rounded-2xl">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            This information will be held privately on a simanof Databse.
          </p>
        </div>

        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Student First Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="StudentFirstName"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Student Last Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="StudentLastName"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Student Age
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="Age"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Country
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="Country"
                  className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                City
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="City"
                  type="text"
                  className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="instrument" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Instrument
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="Instrument"
                  className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Chorus</option>
                  <option>Violin</option>
                  <option>Viola</option>
                  <option>Cello</option>
                  <option>Bass</option>
                  <option>Flute</option>
                  <option>Bassoon</option>
                  <option>Clarinet</option>
                  <option>Oboe</option>
                  <option>Trumpet</option>
                  <option>Trombone</option>
                  <option>Tuba</option>
                  <option>Percussion</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="parents-first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Parents First Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="ParentsFirstName"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="parents-last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Parents Last Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="ParentsLastName"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Email Address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="Email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Phone Number
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  name="PhoneNumber"
                  type="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Added Questions */}

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Name of Music Teacher
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
             
                  name="MusicTeacher"
                  type="text"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                T Shirt Size
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                
                  name="ShirtSize"
                
                  className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
            
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                First Tour?
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                
                  name="FirstTour"
               
                  className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Yes</option>
                  <option>No</option>
                 
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Name of School
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
             
                  name="SchoolName"
                  type="text"
              
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Result
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                 
                  name="Result"
                  type="text"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Questionare;
