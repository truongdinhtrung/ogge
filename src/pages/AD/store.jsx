import React from "react";
import HeaderAD from "../../components/header/header_ad";

function AdStore(){
    return(
        <div>
            <HeaderAD></HeaderAD>
            <div>
                <div className="overflow-hidden  mx-[100px] mt-[80px]">
                    <table className="w-full border-collapse">
                        <thead className='border border-orange-500 '>
                            <tr className="text-orange-500 rounded-2xl">
                                <th className="px-4 py-2 ">Mã đơn hàng</th>
                                <th className="px-4 py-2 ">Mã cửa hàng</th>
                                <th className="px-4 py-2 ">Ngày giao hàng</th>
                                <th className="px-4 py-2  ">Trạng thái</th>
                                <th className="px-4 py-2 ">Phí sản phẩm</th>
                                <th className="px-4 py-2">Phí giao dịch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, index) => (
                                <tr key={index} className="text-center border-b-2 border-black ">
                                    <td className="px-4 py-4 ">DH0001</td>
                                    <td className="px-4 ">TX003</td>
                                    <td className="px-4 ">29/09/2024</td>
                                    <td className="px-4 ">Đã hoàn thành</td>
                                    <td className="px-4 ">20.000 VND</td>
                                    <td className="px-4 ">10.000 VND</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4  mx-[100px]">
                        <span className="text-orange-500 font-bold text-xl">Doanh số: </span>
                        <span className="font-bold text-xl ml-2">60.000 VND</span>
                </div>
            </div>
        </div>
    );
}

export default AdStore;