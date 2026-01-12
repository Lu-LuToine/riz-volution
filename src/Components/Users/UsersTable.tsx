import { useState, useMemo } from "react";
import { Input } from "@/Components/ui/input";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";

interface User {
    id: number;
    nomComplet: string;
    email: string;
    promo: string;
    codeAdherent: string;
    points: number;
    estAdmin: boolean;
}

interface UsersTableProps {
    users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const pageSize = 5;

    const filteredUsers = useMemo(() => {
        if (!filter) return users;
        return users.filter(user =>
            ["nomComplet", "email", "promo", "codeAdherent"].some(
                key => String(user[key as keyof User]).toLowerCase().includes(filter.toLowerCase())
            )
        );
    }, [users, filter]);

    const paginatedUsers = useMemo(() => filteredUsers.slice(page * pageSize, (page + 1) * pageSize), [filteredUsers, page]);

    const handleEdit = (user: User) => alert(`Éditer ${user.nomComplet}`);
    const handleOrder = (user: User) => alert(`Commander pour ${user.nomComplet}`);
    const handleDelete = (user: User) => {
        if (user.estAdmin) {
            alert("Impossible de supprimer un admin !");
            return;
        }
        alert(`Supprimer ${user.nomComplet}`);
    };

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Liste des utilisateurs</h2>
            <Input
                placeholder="Recherche..."
                value={filter}
                onChange={(e) => { setFilter(e.target.value); setPage(0); }}
            />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Promo</TableHead>
                        <TableHead>Code adhérent</TableHead>
                        <TableHead>Points</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {paginatedUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.nomComplet}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.promo}</TableCell>
                            <TableCell>{user.codeAdherent}</TableCell>
                            <TableCell>{user.points}</TableCell>
                            <TableCell className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>Éditer</Button>
                                <Button variant="outline" size="sm" onClick={() => handleOrder(user)}>Commander</Button>
                                <Button size="sm" variant="destructive" onClick={() => handleDelete(user)} disabled={user.estAdmin}>Supprimer</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between mt-2">
                <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Précédent</Button>
                <span>Page {page + 1} / {Math.ceil(filteredUsers.length / pageSize)}</span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.min(p + 1, Math.floor(filteredUsers.length / pageSize)))}
                    disabled={(page + 1) * pageSize >= filteredUsers.length}
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}
