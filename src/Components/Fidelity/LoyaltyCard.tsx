import { Card, CardHeader, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import ProductIcon from "./ProductIcon";

interface LoyaltyCardProps {
    nombreTampons: number;
    recompense: string;
}

export default function LoyaltyCard({ nombreTampons, recompense }: LoyaltyCardProps) {
    const totalTampons = 8;

    return (
        <div className="p-6">
            <Card>
                <CardHeader>Carte de Fidélité</CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                    <div className="flex gap-2">
                        {[...Array(totalTampons)].map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center 
                  ${idx < nombreTampons ? "bg-yellow-400 border-yellow-600" : "bg-gray-200 border-gray-400"}`}
                            >
                                <ProductIcon size={20} color={idx < nombreTampons ? "#FFD700" : "#AAA"} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="font-semibold">Récompense :</p>
                        <p>{recompense}</p>
                    </div>

                    <Button size="sm" variant="default">Accéder à la boutique de snacks</Button>
                </CardContent>
            </Card>
        </div>
    );
}
