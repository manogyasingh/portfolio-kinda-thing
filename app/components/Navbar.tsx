const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Skills', href: '#skills' },
    // { name: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-6 w-auto max-w-screen-xl left-1/2 -translate-x-1/2 bg-transparent backdrop-blur-xl z-50 rounded-2xl flex justify-center items-center h-20 px-8 border border-white/10">
            {navLinks.map(link => (
                <a
                    key={link.name}
                    href={link.href}
                    className="mx-2 px-4 py-2 rounded text-white text-sm text-center transition
                        hover:bg-transparent hover:backdrop-blur-md hover:ring-1 hover:ring-white/10 hover:text-red-200"
                    style={{ boxShadow: "none" }}
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
}