import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 lg:px-6 xl:px-8 py-8 pt-20 lg:pt-24 max-w-[1700px] mx-auto w-full">
                <Sidebar />
                <div className="flex-1 min-w-0">
                    {children}
                </div>
            </main>
        </div>
    );
}
