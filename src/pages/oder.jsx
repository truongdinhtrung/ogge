import React from "react";
import HeaderUser from "../components/header/header_user";
import ListOrder from "../components/order/list_order";
function Order(){
    return(
        <div>
           <div>
            <HeaderUser></HeaderUser>
           </div>
            <div>
            <ListOrder></ListOrder>
            </div>
        </div>
    );
}

export default Order;