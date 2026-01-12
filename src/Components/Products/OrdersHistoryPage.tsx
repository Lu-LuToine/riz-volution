import { useState, useEffect } from "react";
import OrdersHistoryTable from "./OrdersHistoryTable";

export default function OrdersHistoryPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(json => {
                // Ici, adapter en fonction de ta structure JSON pour les commandes
                setOrders(json.commandes || []);
            })
            .catch(err => console.error("Erreur chargement JSON :", err));
    }, []);

    if (!orders.length) return <p>Chargement...</p>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Historique des commandes</h1>
            <OrdersHistoryTable orders={orders} />
        </div>
    );
}
