import { useState } from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // const [agreed, setAgreed] = useState(false)
  const [formState, setFormState] = useState({
    subject: '',
    message: '',
    phone: '',
    firstName: '',
    lastName: '',
  })
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-18 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-oxygen">Get in touch</h2>
      </div>
      <form onSubmit={() => {
        window.location.href = 'mailto:eg.everittgill@gmail.com?subject=' + formState.subject + '&body=' + formState.message + "      Reach me at " + formState.phone
      }} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
           <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                onChange={(event) => {setFormState({...formState, firstName: event.target.value})}}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                onChange={(event) => {setFormState({...formState, lastName: event.target.value})}}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> 
           <div>
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
              Subject
            </label>
            <div className="mt-2.5 w-100">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                onChange={(event) => {setFormState({...formState, subject: event.target.value})}}
                className="block w-100 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone Number
            </label>
            <div className="mt-2.5 w-100">
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="phone"
                onChange={(event) => {setFormState({...formState, phone: event.target.value})}}
                className="block w-100 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                onChange={(event) => {setFormState({...formState, message: event.target.value})}}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className='card__btn block w-full rounded-md text-center'
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
