import { Navigate, Route, Routes } from 'react-router'
import Header from "./Pages/Components/Header.tsx";
import Users from "@/Pages/Users.tsx";
import HomePage from "@/Pages/HomePage.tsx";
import Error404 from "@/Pages/Error404.tsx"
import Products from "@/Pages/Products.tsx";
import FidelityCard from "@/Pages/FidelityCard.tsx";
import StatsDashboard from "@/Pages/StatsDashboard.tsx";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/stats" element={<StatsDashboard />} />
                <Route path="/fidelity" element={<FidelityCard />} />
                <Route path="/404" element={<Error404 />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </>
    )
}

export default App