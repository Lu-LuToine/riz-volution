import { useState, useEffect } from "react";
import ProductsTable from "@/Components/Products/ProductsTable";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(json => setProducts(json.produits))
            .catch(err => console.error("Erreur chargement JSON :", err));
    }, []);

    if (!products.length) return <p>Chargement...</p>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Liste des Produits</h1>
            <ProductsTable products={products} />
        </div>
    );
}
