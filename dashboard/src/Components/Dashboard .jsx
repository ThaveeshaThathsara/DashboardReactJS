import React, { useState, useEffect } from 'react';
import data from '../../public/userData.json';
import Air from '../assets/Dashboard/ac.png'
import Electrical from '../assets/Dashboard/electric.png'
import Heating from '../assets/Dashboard/heat.png'
import Solar from '../assets/Dashboard/solar.png'
import order from '../assets/Dashboard/mal.png';


const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
   
    setTasks(data);
  }, []);

  return (
    <div className="flex-1 p-5">

      <div className='p-1 flex'>
        <h1 className=' font-bold text-[25px]'>Dashboard</h1>
        <div className=' flex mt-2 '>
            <h1 className='ml-10'>Home &gt; Dashboard </h1>

        </div>    
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">

        <div className="p-4 bg-white rounded shadow flex gap-5">
            <div>
                <img src={order} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold">Active Order</h2>
            <p className="text-2xl font-bold">2</p>
            </div>
          
        </div>

         <div className="p-4 bg-white rounded shadow flex gap-5 ">
            <div>
                <img src={Heating} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold">Heating</h2>
            <p className="text-2xl font-bold">13</p>
            </div>
          
        </div>


         <div className="p-4 bg-white rounded shadow flex gap-5 ">
            <div>
                <img src={Electrical} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold">Electrical</h2>
            <p className="text-2xl font-bold">2</p>
            </div>
          
        </div>


         <div className="p-4 bg-white rounded shadow flex gap-5">
            <div>
                <img src={Air} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold">Air Conditionar</h2>
            <p className="text-2xl font-bold">3</p>
            </div>
          
        </div>


         <div className="p-4 bg-white rounded shadow flex gap-5 ">
            <div>
                <img src={Solar} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold">Solar Panel</h2>
            <p className="text-2xl font-bold">2</p>
            </div>
          
        </div>

        
      </div>
        

            <div className=' flex justify-between  p-2  bg-white'>
                <div className=''>
                    <h1 className=' font-bold text-[25px]'>Service Details</h1>
                </div>
                <div className=' flex  gap-5'>

                <div >
                    
                    <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay"  className="text-black focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm p-3 text-center inline-flex items-center bg-gray-200 " type="button">All Services <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor"   d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                    </div>
    
                    <div>
                    <div className="relative max-w-sm ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input type="text" className=" border border-gray-300 text-black text-sm rounded-lg   block w-full ps-10 p-2.5 bg-gray-100 " placeholder="Date"/>
                            </div>
                    </div>
                    <input  type="text" placeholder="Search " className="px-4 py-2 border  mr-4 rounded-xl bg-gray-200" />
                    <div>
    
                    </div>


                </div>
                

            </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className=' bg-gray-200  '>
              <th className="px-4 py-2">Work Code</th>
              <th className="px-4 py-2">Work Location</th>
              <th className="px-4 py-2">Work Details</th>
              <th className="px-4 py-2">Service Schedule</th>
              <th className="px-4 py-2">Invoice No.</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Payment</th>
              <th className="px-4 py-2">Feedback</th>
              <th className="px-4 py-2">Open Ticket</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 bg-gray-200">{task["Work Code"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Work Location"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Work Details"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Service Schedule"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Invoice No."]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Amount"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Payment"]}</td>
                <td className="border px-4 py-2 bg-gray-200">{task["Feedback"]}</td>
                <td className="border px-4 py-2 bg-gray-200">
                  <button className= " bg-yellow-500 text-white pt-1 pb-1 pr-1 pl-1  rounded">
                    {task["Open Ticket"]}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between">
        <span className=' font-bold'>Showing 1 to 6 of {tasks.length } entries</span>
        <nav className="inline-flex ml-4">
            <button className=' font-bold mr-1'>&lt;</button>
          <a href="#" className="px-2 py-1 border rounded-l">1</a>
          <a href="#" className="px-2 py-1 border">2</a>
          <a href="#" className="px-2 py-1 border">3</a>
          <a href="#" className="px-2 py-1 border rounded-r">4</a>
          <button className=' font-bold ml-1'>&gt;</button>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
