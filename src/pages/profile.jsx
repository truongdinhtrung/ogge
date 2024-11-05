import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoWeb from '../../src/assets/OggeeDriver.png';
import User from '../../src/assets/User.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: 'abc@gmail.com',
    fullName: '',
    birthYear: '',
    gender: '',
    phoneNumber: '',
    address: '',
    driverLicense: '',
    vehicleOwnership: '',
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Lưu dữ liệu thành công!');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="px-4 sm:px-[150px] py-[15px] border-b bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between">
            <Link to="/home-page">
              <img src={LogoWeb} className="w-[120px] sm:w-[200px] mb-2 sm:mb-0" alt="Logo Web" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center relative">
            <button
              className="flex items-center gap-2 text-white bg-[#ff7e00] hover:bg-[#ef4c2b] py-3 font-medium px-4 rounded-md"
              onClick={toggleDropdown}
            >
              <img className="w-[22px] h-[28px]" src={User} alt="User Icon" />
            </button>

            {isOpen && (
              <div className="absolute top-14 right-auto w-48 bg-white shadow-lg space-y-2 rounded-lg p-4 text-black">
                <p>{formData.email}</p>
                <hr className="my-2" />
                <Link to="/profile" className="block cursor-pointer hover:text-gray-700">Profile</Link>
                <Link to="/oder" className="block cursor-pointer hover:text-gray-700">Đơn hàng</Link>
                <Link to="/revenue" className="block cursor-pointer hover:text-gray-700">Doanh thu</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-[50px] flex justify-center">
        <div className="rounded-[20px] shadow-2xl w-[668px] h-[701px] p-8 border border-gray-300">
          <div className="flex flex-col items-center">
            <div className="rounded-full border-[2px] w-[100px] h-[100px] flex items-center justify-center mb-4"></div>
            <div className="text-center font-semibold text-lg mb-8">{formData.email}</div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Họ và tên', name: 'fullName' },
              { label: 'Năm sinh', name: 'birthYear' },
              { label: 'Giới tính', name: 'gender' },
              { label: 'Số điện thoại', name: 'phoneNumber' },
              { label: 'Địa chỉ', name: 'address' },
              { label: 'Giấy phép lái xe', name: 'driverLicense' },
              { label: 'Giấy sở hữu xe', name: 'vehicleOwnership' },
            ].map((field) => (
              <div key={field.name} className="flex items-center">
                <label className="w-1/3 text-right pr-4 text-orange-500 font-semibold">{field.label}:</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-2/3 border rounded px-2 py-1"
                />
              </div>
            ))}
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded mt-6 font-semibold">
              Lưu
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
