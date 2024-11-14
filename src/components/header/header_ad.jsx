import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoWeb from '../../../src/assets/Oggy.png';
import User from '../../../src/assets/User.png';

function HeaderAD() {
    const location = useLocation();
    const storeId = location.state?.storeId;

    return (
        <>
            <div className="px-4 sm:px-[150px] py-[15px] border-b bg-[#ff7e00]">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <Link to='' state={{ storeId }}>
                        <img src={LogoWeb} className="w-[120px] sm:w-[200px] bg-white mb-2 sm:mb-0" alt="Logo Web" />  
                    </Link>
                    <div className="flex flex-1 justify-center">
                        <div className="flex flex-row gap-8 space-x-[150px]">
                            <Link className='text-white font-bold border-b-2 border-white rounded-sm' to='/store' state={{ storeId }}>
                                Cửa hàng
                            </Link>
                            <Link to='/driver' className='hover:text-black text-white font-bold border-b-2 border-white rounded-sm' state={{ storeId }}>     
                                Tài xế
                            </Link>
                            <Link className='hover:text-black text-white font-bold border-b-2 border-white rounded-sm' to='' state={{ storeId }}>
                                Doanh thu
                            </Link>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 text-white bg-[#ff7e00] hover:bg-[#ef4c2b] py-3 font-medium px-4 rounded-md'>
                        <img className='w-[22px] h-[28px]' src={User} alt="User Icon" />
                    </button>
                </div>
            </div>

            <div className="flex justify-end mt-[50px] px-4 sm:px-[150px]">
                <div className="flex w-[687px] h-9 bg-white rounded-xl border border-[#ff7e00] items-center px-4">
                    <input 
                        type="text" 
                        placeholder="Search ..." 
                        className="flex-grow outline-none text-[#ff7e00] placeholder-[#ff7e00]"
                    />
                    <span className="text-[#ff7e00]">🔍</span>
                </div>
            </div>
        </>
    );
}

export default HeaderAD;
