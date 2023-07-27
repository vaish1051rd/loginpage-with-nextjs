import React from 'react';
// import { useRouter } from 'next/router';

import Link from 'next/link';



const Login = () => { 
  
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push('/Test');
  // };

  

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200">


        {/* for image */}
        <img src="/images/jelle-de-gier-Qn4G5hEIgqk-unsplash.jpg" alt="Login Image" className="h-full w-full object-cover" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          {/* Additional heading */}
          <h3 className="text-lg font-medium text-gray-600 mb-4">Welcome back! Please login to continue.</h3>
          
          {/* login form  */}
          

          <form>
          <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>


            {/* Forgot Password link */}
            <div className="text-right mb-4">
              <a href="#forgot-password" className="text-sm text-black-600 hover:text-black-800">
                Forgot Password?
              </a>
            </div>



            {/*login button */}
            <Link href="/Test">
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
            </Link>
            
            
            

            {/* "Or" separator */}
            <div className="flex items-center mt-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500">or</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            {/* Register Now button */}
            <button type="button" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-White-600 hover:bg-black-700 focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
