import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Delicious <span className='text-yellow-600'>Desserts</span></h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-300 hover:text-yellow-600">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 hover:text-yellow-600">About</Link>
                    </li>
                    <li>
                        <Link href="/menu" className="text-gray-300 hover:text-yellow-600">Menu</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-300 hover:text-yellow-600">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
