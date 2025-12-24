import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex w-[280px] flex-shrink-0 flex-col gap-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Banner */}
                <div className="h-24 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>

                {/* Profile Info */}
                <div className="px-6 pb-6 text-center -mt-10">
                    <div className="w-20 h-20 mx-auto rounded-full border-4 border-white overflow-hidden shadow-sm">
                        <img src="https://ui-avatars.com/api/?name=Albert+Flores&background=0154AA&color=fff" alt="Albert Flores" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="mt-3 font-semibold text-2xl text-gray-900">Albert Flores</h3>
                    <p className="text-md leading-relaxed line-clamp-2 w-5/6 mx-auto" title="Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Clinton, Maryland</p>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-lg">Profile Visitors</span>
                    <span className="text-blue-600 font-semibold">140</span>
                </div>
                <div className="h-[1px] bg-gray-50"></div>
                <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-lg">Resume Viewers</span>
                    <span className="text-blue-600 font-semibold">20</span>
                </div>
                <div className="h-[1px] bg-gray-50"></div>
                <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-lg">My Jobs</span>
                    <span className="text-blue-600 font-semibold">88</span>
                </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50">
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">My calendar</h4>
                        <p className="text-lg">Upcoming Interviews</p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </aside>
    );
}
