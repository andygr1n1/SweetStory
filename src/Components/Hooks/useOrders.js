import {useState} from "react";

export function useOrder() {
    const [orders, setOrders] = useState([])
    return {orders, setOrders}
}