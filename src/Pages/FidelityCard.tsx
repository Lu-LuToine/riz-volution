import { useState, useEffect } from "react";
import LoyaltyCard from "@/Components/Fidelity/LoyaltyCard";

export default function FidelityCard() {
    const [carte, setCarte] = useState({ nombreTampons: 0, recompense: "" });

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(json => setCarte(json.carteFidelite))
            .catch(err => console.error("Erreur chargement JSON :", err));
    }, []);

    if (!carte.recompense) return <p>Chargement...</p>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Carte de Fidélité</h1>
            <LoyaltyCard nombreTampons={carte.nombreTampons} recompense={carte.recompense} />
        </div>
    );
}
