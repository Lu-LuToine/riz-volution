import React, { useState, useMemo } from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

interface Product {
    id: number;
    nom: string;
    prix: number;
    actif: boolean;
}

interface ProductsTableProps {
    products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const pageSize = 5;

    const filteredProducts = useMemo(() => {
        if (!filter) return products;
        return products.filter(p =>
            ["nom", "prix"].some(key =>
                String(p[key as keyof Product]).toLowerCase().includes(filter.toLowerCase())
            )
        );
    }, [products, filter]);

    const paginatedProducts = useMemo(() => filteredProducts.slice(page * pageSize, (page + 1) * pageSize), [filteredProducts, page]);

    const handleEdit = (p: Product) => alert(`Éditer ${p.nom}`);
    const handleDelete = (p: Product) => alert(`Supprimer ${p.nom}`);

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Liste des Produits</h2>
            <Input placeholder="Recherche..." value={filter} onChange={(e) => { setFilter(e.target.value); setPage(0); }} />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {paginatedProducts.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.nom}</TableCell>
                            <TableCell>€{p.prix.toFixed(2)}</TableCell>
                            <TableCell>{p.actif ? "Actif" : "Inactif"}</TableCell>
                            <TableCell className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(p)}>Éditer</Button>
                                <Button size="sm" variant="destructive" onClick={() => handleDelete(p)}>Supprimer</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between mt-2">
                <Button size="sm" variant="outline" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Précédent</Button>
                <span>Page {page + 1} / {Math.ceil(filteredProducts.length / pageSize)}</span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.min(p + 1, Math.floor(filteredProducts.length / pageSize)))}
                    disabled={(page + 1) * pageSize >= filteredProducts.length}
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}
