import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-contain lg:bg-cover md:bg-auto bg-no-repeat bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80')]" />
      <div className='bg-gray-200 h-96'>
        <h2 className="text-center font-bold text-2xl py-5">
          Welcome to Wendy's Makeup Studio
        </h2>
        <div className="m-5">
          <h4 className="pb-4">
            I have been in the Makeup industry for about 4 years now and have
            worked with a variety of clients for various occassions. These
            include but are not limited to:
          </h4>
          <p className="pb-2 pl-3">A) Weddings</p>
          <p className="pb-2 pl-3">B) Quinceaneras</p>
          <p className="pb-3 pl-3">C) Birthdays</p>
          <h2>
            My place of work is dependant on the client's request. I am able to
            perform in my studio or I would be able to travel to the client's
            home.
          </h2>
          <p className="text-sm text-red-500 pt-2 pb-4">
            * Travel distance will be subject to a fee.
          </p>
          <h2 className="pb-10">
            If you are looking to get a full makeover, you can fill out the form{" "}
            <span className="underline hover:text-blue-600">
              <Link to="/Contact">here</Link>
            </span>{" "}
            or can call me at (328)192-2343 to set up an appointment.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home