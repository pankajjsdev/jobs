import Image from "next/image";
import Link from "next/link";

const links = [
    { title: 'Home', path: '/' },
    { title: 'Jobs', path: '/jobs' },
    { title: 'Companies', path: '/companies' },
    { title: 'Pages', path: '/pages' },
    { title: 'Blog', path: '/blog' },
];

function Header() {
    return (
        <header className="fixed w-full py-6 shadow">
            <div className="container flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            width={200}
                            height={100}
                            alt="Company Logo"
                        />
                    </Link>
                    <nav className="ml-[20%]">
                        <ul className="inline-flex space-x-6">
                            {links.map(({ title, path }) => (
                                <li key={path} className="hover:text-secondary-500">
                                    <Link href={path}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <button>Log In</button>
                    <button>Post A Job</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
