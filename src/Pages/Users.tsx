import { useState, useEffect } from "react";
import UsersTable from "@/Components/Users/UsersTable";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(json => setUsers(json.utilisateurs))
            .catch(err => console.error("Erreur chargement JSON :", err));
    }, []);

    if (!users.length) return <p>Chargement...</p>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Liste des Utilisateurs</h1>
            <UsersTable users={users} />
        </div>
    );
}
