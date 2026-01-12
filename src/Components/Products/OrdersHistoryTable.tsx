import React, { useState, useMemo } from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";

interface Order {
    id: number;
    user: string;
    produit: string;
    quantite: number;
    date: string;
}

interface OrdersHistoryTableProps {
    orders: Order[];
}

export default function OrdersHistoryTable({ orders }: OrdersHistoryTableProps) {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const pageSize = 5;

    const filteredOrders = useMemo(() => {
        if (!filter) return orders;
        return orders.filter(o =>
            ["user", "produit"].some(key =>
                String(o[key as keyof Order]).toLowerCase().includes(filter.toLowerCase())
            )
        );
    }, [orders, filter]);

    const paginatedOrders = useMemo(() => filteredOrders.slice(page * pageSize, (page + 1) * pageSize), [filteredOrders, page]);

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Historique des commandes</h2>
            <Input placeholder="Recherche..." value={filter} onChange={(e) => { setFilter(e.target.value); setPage(0); }} />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Utilisateur</TableHead>
                        <TableHead>Produit</TableHead>
                        <TableHead>Quantité</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {paginatedOrders.map(o => (
                        <TableRow key={o.id}>
                            <TableCell>{o.user}</TableCell>
                            <TableCell>{o.produit}</TableCell>
                            <TableCell>{o.quantite}</TableCell>
                            <TableCell>{o.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between mt-2">
                <button onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0} className="btn btn-sm">Précédent</button>
                <span>Page {page + 1} / {Math.ceil(filteredOrders.length / pageSize)}</span>
                <button
                    onClick={() => setPage(p => Math.min(p + 1, Math.floor(filteredOrders.length / pageSize)))}
                    disabled={(page + 1) * pageSize >= filteredOrders.length}
                    className="btn btn-sm"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
