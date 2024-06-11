import Dashboard from "./Dashboard ";
import Home from "../assets/Sidbar/Home.png"
import Profile from "../assets/Sidbar/Profile.png"
import Services from "../assets/Sidbar/Services.png"
import Tickets from "../assets/Sidbar/Teckets.png"
import Payment from "../assets/Sidbar/Payment.png"
import Feedback from "../assets/Sidbar/Rating.png"
import Settings from "../assets/Sidbar/Settings.png"
import User from "../assets/Sidbar/userimg.jpg"
import userImg from '../assets/Sidbar/userimg.jpg'
import Plug from '../assets/Sidbar/plug.png'
import Notification  from '../assets/Dashboard/notifi.png'

const Sidebar = () => {
  return (
    <div>
        <div className=" bg-white p-1">
                
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between  border-b p-1">
        <div className=" flex gap-5">
        <img src={Plug} className=" w-10"/>
        <h1 className=" text-[25px] font-bold text-teal-700 cursor-pointer">SparkSocket</h1>
        </div>
   
        <div className="flex items-center">
          <input  type="text" placeholder="Search" className="px-4 py-2 border  mr-4 rounded-xl bg-gray-200" />
          <img src={Notification} alt="Admin" className="h-30 w-10 rounded-full cursor-pointer" />
         
          <img src={userImg} alt="Admin" className=" cursor-pointer ml-5 h-10 w-10 rounded-full" />
        
                <div className=" ml-5">
                    <h1 className=" font-semibold">Dipak Deb Nath</h1>
                    
                    <h3 className=" text-[10px]">Super Admin</h3>
                </div>
          
          
        </div>
        
    </header>
            </div>

            
    <div className="flex flex-col sm:flex-row ">
        
        
        <div className="w-[10]  bg-white shadow-md">
          <div className="p-4">
            
            <div className="text-center mb-6">
              <img src={User} alt="User" className="h-20 w-20 rounded-full mx-auto " />
              <h2 className="mt-2 font-semibold">Phillips Curtis</h2>
              <p className="text-gray-500">Employee ID: 0015</p>
            </div>
            <nav className=" p-1">
                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Home} className=" w-[30px] h-[30px] mt-2"/>
                        <a href="#" className="block py-2.5 px-4 rounded-xl transition duration-200 ">Home</a>
                </div>

                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Services} className=" w-[30px] h-[30px] mt-2"/>
                        <a href="#" className="block py-2.5 px-4 rounded-xl  transition duration-200 ">Services</a>
                </div>

                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Profile} className=" w-[30px] h-[30px] mt-2"/>
                        <a href="#" className="block py-2.5 px-4 rounded-xl  transition duration-200 ">Profile</a>
                </div>

                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Tickets} className=" w-[30px] h-[30px] mt-2"/>
                        <a href="#" className="block py-2.5 px-4 rounded-xl  transition duration-200 ">Tickets</a>
                </div>

                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Payment} className=" w-[30px] h-[30px] mt-2"/>
                       <a href="#" className="block py-2.5 px-4 rounded-xl  transition duration-200 ">Payment Info</a>
                </div>

                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Feedback} className=" w-[30px] h-[30px] mt-2"/>
                         <a href="#" className="block py-2.5 px-4 rounded-xl  transition duration-200 ">Feedback & Rating</a>
                </div>
                <div className=" flex  transition duration-200 hover:bg-teal-700 rounded-xl px-4 gap-2">
                        <img src={Settings} className=" w-[30px] h-[30px] mt-2"/>
                        <a href="#" className="block py-2.5   ">Settings</a>
                </div>
             
              
              
              
             
             
            </nav>
          </div>
          
        </div>
  
        <div className="flex-1">
          <Dashboard/>
        </div>

      </div>



    </div>

  );
};

export default Sidebar;
