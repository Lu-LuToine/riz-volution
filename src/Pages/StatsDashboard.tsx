import { useState, useEffect } from "react";
import StatsCards from "@/Components/Stats/StatsCards.tsx";
import DataTable from "@/Components/Stats/DataTable.tsx";
import Charts from "@/Components/Stats/Charts.tsx";

export default function StatsDashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error("Erreur chargement JSON :", err));
    }, []);

    if (!data) return <p>Chargement...</p>;

    const { statistiques, repartitionPaiements, ventesParMois, produits, topClients } = data;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Dashboard Statistiques</h1>

            <StatsCards statistiques={statistiques} />

            <DataTable
                title="Produits actifs"
                data={produits.filter(p => p.actif).map(p => ({ nom: p.nom, prix: p.prix }))}
                columns={["nom", "prix"]}
            />

            <Charts repartitionPaiements={repartitionPaiements} ventesParMois={ventesParMois} />

            <DataTable
                title="Top clients (par commandes)"
                data={topClients.parCommandes.map(c => ({ nom: c.nom, nombreCommandes: c.nombreCommandes }))}
                columns={["Noms", "Nombre de Commandes"]}
            />
        </div>
    );
}