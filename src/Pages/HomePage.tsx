import { HomeCards } from "@/Components/HomeCards";

function HomePage() {
    const pages = [
        {
            name: "Products",
            image: "/products.png",
            link: "/products",
            description: "Gestion des produits"
        },
        {
            name: "Users",
            image: "/users.png",
            link: "/users",
            description: "Gestion des utilisateurs"
        },
        {
            name: "StatsDashboard",
            image: "/stats.png",
            link: "/stats",
            description: "Statistiques et analyses"
        },
        {
            name: "FidelityCard",
            image: "/fidelity.png",
            link: "/fidelity",
            description: "Programme de fidélité"
        }
    ];

    return (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {pages.map((page) => (
                <HomeCards
                    key={page.name}
                    title={page.name}
                    description={page.description}
                    image={page.image}
                    link={page.link}
                />
            ))}
        </div>
    );
}

export default HomePage;
