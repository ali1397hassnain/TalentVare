import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Find Jobs');

    const navItems = [
        'Find Jobs', 'Top Companies', 'Job Tracker', 'My Calendar',
        'Documents', 'Messages', 'Notifications'
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
            <div className="px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">V</div>
                    </div>

                    {/* Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                onClick={() => setActiveTab(item)}
                                className={`text-sm ${activeTab === item ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-900 font-medium'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search - Hidden on small mobile */}
                    <div className="relative hidden md:block">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-50 border border-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
                        />
                    </div>

                    {/* Resume Builder Btn - Hidden on small mobile */}
                    <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-md font-normal transition-colors">
                        Resume Builder
                    </button>

                    {/* Profile */}
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
                        <img src="https://ui-avatars.com/api/?name=Albert+Flores&background=0154AA&color=fff" alt="Profile" />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => { setActiveTab(item); setIsMenuOpen(false); }}
                            className={`text-sm ${activeTab === item ? 'text-blue-600 font-semibold' : 'text-gray-500 font-medium'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="h-[1px] bg-gray-100 my-2"></div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-md font-normal w-full">
                        Resume Builder
                    </button>
                </nav>
            )}
        </header>
    );
}
