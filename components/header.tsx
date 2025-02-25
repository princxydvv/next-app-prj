import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black to-transparent">
            <div className="flex items-center justify-between px-4 py-4 md:px-8">
                <Image src="/netflix-logo.svg" alt="Netflix" width={92} height={25} />
                <nav>
                    <ul className="flex space-x-4 text-sm">
                        <li>
                            <Link href="#" className="hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-300">
                                TV Shows
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-300">
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-300">
                                New & Popular
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

