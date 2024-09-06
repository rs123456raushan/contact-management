import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleContact = () => {
        setIsOpen(!isOpen);
        navigate("/");
    };

    const handleChart = () => {
        setIsOpen(!isOpen);
        navigate("/chart");
    };

    const handleMap = () => {
        setIsOpen(!isOpen);
        navigate("/map");
    };

    const handleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ width: isOpen ? '18rem' : '3rem' }} className="h-screen">
            <span
                className="absolute text-white text-4xl top-6 left-4 cursor-pointer"
                onClick={handleSidebar}
            >
                <img width={50} height={50} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD9vnKk5oPrEHIthwjMIshbnqJgQDgdAvfA&s'} alt='' />
            </span>
            <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <h1 className="font-bold text-gray-200 text-[15px] ml-6">Sidebar</h1>
                        <p
                            className="bi bi-x cursor-pointer ml-28 lg:hidden"
                        ></p>
                        <p onClick={handleSidebar} style={{ cursor: 'pointer' }} className="bi bi-app-indicator indicator px-2 py-1 rounded-md bg-blue-600">X</p>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <div onClick={handleContact} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Contacts</span>
                </div>
                <div className="my-4 bg-gray-600 h-[1px]"></div>
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    onClick={handleSubmenu}
                >
                    <i className="bi bi-chat-left-text-fill"></i>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Charts and Maps</span>
                        <span className="text-sm rotate-180" id="arrow">
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </div>
                </div>
                <div
                    className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuOpen ? 'block' : 'hidden'}`}
                >
                    <h1 onClick={handleChart} className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Covid Cases Line Chart</h1>
                    <h1 onClick={handleMap} className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Covid Cases Map</h1>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;