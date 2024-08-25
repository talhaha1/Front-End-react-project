import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <div className="flex-grow flex items-center justify-center bg-black text-white">
        <div className="w-full  mx-auto py-16 px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl bg-gray-400 font-bold text-gray-800 py-32 mb-4">Our Services</h1>
            <div className="h-1 bg-blue-500 mx-auto w-20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6 bg-blue-500 p-6 rounded-full">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 2v2m0 14v2m-6.364-4.364l-1.414-1.414M4 12H2m14.364 6.364l1.414 1.414M20 12h2M7.636 5.636l-1.414-1.414M17.778 4.222l1.414 1.414M7.636 18.364l-1.414 1.414M16.222 18.364l1.414-1.414M12 4a8 8 0 110 16 8 8 0 010-16z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Business Analytics</h2>
              <p className="text-gray-400 leading-relaxed px-4">
                Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6 bg-blue-500 p-6 rounded-full">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v8a2 2 0 002 2h2m10-6H7m10 0a2 2 0 110-4m-10 4a2 2 0 110-4m6 8v2m-6-2v2m12-12H5V5a2 2 0 012-2h10a2 2 0 012 2v2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Digital Marketing & Analytics</h2>
              <p className="text-gray-400 leading-relaxed px-4">
                Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6 bg-blue-500 p-6 rounded-full">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2 2m-2-2v6m8-6h.01M4 10h.01M4 6h16M4 14h.01M4 18h16"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Automation & Integration</h2>
              <p className="text-gray-400 leading-relaxed px-4">
                Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the integration of standard applications. We help you reduce manual efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Services;
