import { useState, useMemo } from "react";
import { Input } from "@/Components/ui/input";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/Components/ui/table";

export default function DataTable({ title, data, columns }) {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const pageSize = 5;

    const filteredData = useMemo(() => {
        if (!filter) return data;
        return data.filter(row =>
            columns.some(col => String(row[col]).toLowerCase().includes(filter.toLowerCase()))
        );
    }, [data, filter, columns]);

    const paginatedData = useMemo(() => filteredData.slice(page * pageSize, (page + 1) * pageSize), [filteredData, page]);

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Input
                placeholder="Recherche..."
                value={filter}
                onChange={(e) => { setFilter(e.target.value); setPage(0); }}
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map(col => <TableHead key={col}>{col}</TableHead>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData.map((row, idx) => (
                        <TableRow key={idx}>
                            {columns.map(col => <TableCell key={col}>{row[col]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-between mt-2">
                <button onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0} className="btn btn-sm">Précédent</button>
                <span>Page {page + 1} / {Math.ceil(filteredData.length / pageSize)}</span>
                <button
                    onClick={() => setPage(p => Math.min(p + 1, Math.floor(filteredData.length / pageSize)))}
                    disabled={(page + 1) * pageSize >= filteredData.length}
                    className="btn btn-sm"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
