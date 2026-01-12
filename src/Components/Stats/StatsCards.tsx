import { Card, CardHeader, CardContent } from "@/Components/ui/card.tsx";

export default function StatsCards({ statistiques }) {
    const cards = [
        { label: "Total ventes", value: `€${statistiques.totalVentes}` },
        { label: "Bénéfice", value: `€${statistiques.benefice}` },
        { label: "Nombre clients", value: statistiques.nombreClients },
        { label: "Nombre commandes", value: statistiques.nombreCommandes },
        { label: "Produit le plus vendu", value: statistiques.produitPlusVendu.nom },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cards.map((card, idx) => (
                <Card key={idx}>
                    <CardHeader>{card.label}</CardHeader>
                    <CardContent className="text-lg font-semibold">{card.value}</CardContent>
                </Card>
            ))}
        </div>
    );
}
