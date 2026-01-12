import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/Components/ui/card";
import { Link } from "react-router";
import {Button} from "@/Components/ui/button.tsx";

interface HomeCardsProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export function HomeCards({ title, description, image, link }: HomeCardsProps) {
    return (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
                <img
                    src={image}
                    alt={title}
                    className="w-2/3 object-cover rounded-md"
                />
            </CardContent>

            <CardFooter>
                <Button variant="outline" asChild>
                    <Link to={link} className="text-blue-600 font-medium">
                        Y aller →
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
