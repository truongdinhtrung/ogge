import React from "react";
import Img1 from "../../src/assets/a1Introduce.png"
import Img2 from "../../src/assets/a2Introduce.png"
import Img3 from "../../src/assets/a3Introduce.png"
import Img4 from "../../src/assets/a4Introduce.png"
import Img5 from "../../src/assets/a5Introduce.png"
import Img6 from "../../src/assets/a6Introduce.png"
function Introduce(){
    return(
        <div>
           <div className="flex items-center justify-center my-[30px] ">
                <img className="" src={Img1}></img>
           </div>
           <p className="text-[#ff7e00] text-xl font-bold items-center flex justify-center">
                Chào mừng đến với Oggefood - Trải nghiệm đặt đồ ăn online chất lượng hàng đầu!
            </p>
            <div className="relative flex items-center mt-[80px]">
                <div className="bg-[#ff7e00] w-full h-[450px] opacity-[0.7] "></div>
                <div className="absolute w-full mx-[150px] flex items-center space-x-[80px]  ">
                    <img src={Img2} className="w-[500px]" alt="Food" />
                    <div className="bg-[#ff7e00] w-[500px] ml-[80px] h-[300px] flex items-center justify-center">
                        <p className="text-white text-center px-4">
                            Oggefood - Đặt đồ ăn ngon mọi lúc, mọi nơi. Với Oggefood, bạn 
                            chỉ cần vài cú chạm là đã có ngay món ăn yêu thích giao tận nhà. 
                            Ứng dụng kết nối bạn với hàng ngàn nhà hàng, quán ăn đa dạng, 
                            giúp bạn dễ dàng lựa chọn và thưởng thức những món ngon hấp dẫn.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" mt-[80px]">
                <div className=" w-full mx-[150px] flex items-center space-x-[80px]  ">
                    <div className="bg-[#ff7e00] w-[500px] h-[250px] flex items-center justify-center">
                        <p className="text-white text-center px-4">
                        Oggefood mang đến cho bạn nhiều 
                        hơn cả việc đặt đồ ăn. Với giao 
                        diện thân thiện, tính năng tìm 
                        kiếm thông minh và các chương 
                        trình khuyến mãi hấp dẫn, 
                        Oggefood sẽ làm cho mỗi lần đặt 
                        hàng của bạn trở nên đặc biệt.
                        </p>
                    </div>
                    <img src={Img3} className=""  alt="Food" />
                </div>
            </div>
            <div className=" mt-[200px] mx-[30px]">
                <div className="flex">
                    <div className="float-left flex mt-[77px]   bg-[#ff7e00]  ">
                        <img src={Img4} className="w-[300px] h-[500px] "></img> 
                        <img src={Img5} className="relative w-[300px] h-[500px] -top-[100px]"></img> 
                        <img src={Img6} className="relative w-[300px] h-[500px] -top-[50px]"></img> 
                    </div>
                    <div className="absolute h-[200px] w-[60%]  mt-[377px]">
                        <div className="absolute bg-white  opacity-45 inset-0"></div>
                        <div className="relative py-5 mt-[70px] mx-[30px] text-center ">
                            <p className="text-black font-bold">
                                Our story is not just about the coffee
                                <p>
                                    Bởi vì tuổi trẻ của tôi là bạn, là tất cả những hoạn nạn,
                                    những vui buồn, tất cả mọi điều chúng ta cùng trải qua. Là bạn bè,
                                    chỉ cần thương mến sẽ thành gia đình.
                                </p>
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col w-[40%] mt-[218px] ">
                        <div className="border border-[#ff7e00] ml-[30px]  bg-[#fff3e0] p-4">
                            <p className="text-[#ff7e00] pt-[50px] ">
                                Cảm ơn bạn vì đã lựa chọn OggeFood, nếu bạn có cần bất cứ việc gì cần liên hệ với OggeFood, cảm phiền bạn hãy cho chúng tôi biết. 
                                Xin hãy để lại đôi dòng thông tin để OggeFood có thể dễ dàng liên lạc hồi đáp bạn.
                            </p>
                        </div>
                        <div className="bg-[#ff7e00] text-white h-[180px] flex justify-end items-center ">
                            <div className="mr-[30px] space-y-3">
                                <p className="font-bold">Công ty TNHH 5 thành viên OggeFood</p>
                                <p className="">📞 Hotline: 0123.456.789</p>
                                <p>📍 Địa chỉ: 806 Quốc Lộ 22, ấp Mỹ Hoà 3, Hóc Môn, Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Introduce;