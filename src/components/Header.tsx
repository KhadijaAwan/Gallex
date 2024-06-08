import Search from "./Search"
import Image from "next/image"
import logo from "../../public/logo.png";

export default function Header() {
    return (
        <header className="bg-blue-950 sticky top-0 z-10">
            <nav className="flex flex-col gap-4 sm:flex-row justify-center sm:justify-between items-center p-3 font-bold max-w-6xl mx-auto text-white">
                <div className="flex mb-2 md:mb-0 justify-center sm:justify-between items-center">
                    <Image src={logo} alt="logo-image" width={28} height={28} />
                    <h2 className="ml-2 text-2xl">Gallex</h2>
                </div>
                <Search />
            </nav>
        </header>
    )
}