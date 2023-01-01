export default function Contact() {
  return (
    <>
      <div className='animate-in slide-in-from-top-10 duration-1000 py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-gray-900 dark:text-white'>
          Contact Me
        </h2>
        <form
          action='https://formspree.io/f/xvodadqp'
          method='POST'
          className='space-y-8'
        >
          <div>
            <label
              htmlFor='fname'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              First Name
            </label>
            <input
              type='text'
              id='fname'
              name='firstname'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Your first name...'
              required
            />
          </div>
          <div>
            <label
              htmlFor='lname'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Last Name
            </label>
            <input
              type='text'
              id='lname'
              name='lastname'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Your last name...'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@something.com'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Message
            </label>
            <textarea
              id='message'
              rows='6'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
              name='message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Send Message
          </button>
        </form>
      </div>
      <div className='py-4'></div>
    </>
  );
}
