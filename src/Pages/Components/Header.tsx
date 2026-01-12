import Favicon from "react-favicon";
import ResponsiveHook from "../../Hooks/ResponsiveHook.tsx";
import { Button } from "@/Components/ui/button"
import {Link} from "react-router";

function Header(){
    const width = ResponsiveHook();

    return (
        <>
        <Favicon url="/favicon_bde.png" />
        <header
            className="flex justify-between items-center p-8 top-0 w-full z-20"
            style={{ backgroundColor: "#0F172A" ,
            }}
        >

            {width > 768 ? (
                    <div className="flex items-center justify-between w-full">
                            <Link to="/">
                                <img
                                    src="/logo_bde_nobg.png"
                                    className="h-12 w-auto"
                                />
                            </Link>

                        <div className="flex gap-8">
                            <Button asChild>
                                <Link to="/stats">Stats</Link>
                            </Button>

                            <Button asChild>
                                <Link to="/products">Products</Link>
                            </Button>

                            <Button asChild>
                                <Link to="/users">Users</Link>
                            </Button>

                            <Button asChild>
                                <Link to="/fidelity">Fidelity Card</Link>
                            </Button>
                        </div>

                    </div>

                ) :
                <>
                    <Link to="/">
                        <img
                            src="/logo_bde_nobg.png"
                            className="h-20 w-auto"
                        />
                    </Link>
                </>
            }
        </header>
    </>
    )
}

export default Header;

