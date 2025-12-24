import { Search, MapPin, ChevronDown } from 'lucide-react';
import JobCard from './JobCard';

const FEATURED_JOBS = [
    {
        id: 1,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: true,
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: true,
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: true,
    },
    {
        id: 4,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: true,
    },
    {
        id: 5,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: true,
    }
];

const RECOMMENDED_JOBS = [
    {
        id: 6,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 7,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 8,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 9,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 10,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 11,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 12,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 13,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 14,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    },
    {
        id: 15,
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        time: "1 day ago",
        applicants: 22,
        promoted: false,
    }
];

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-8">
            {/* Greeting & Search Header */}
            <div className="rounded-xl py-4 border-b border-gray-100">
                <h1 className="text-2xl font-medium text-gray-900 mb-2">
                    Find your Dream Job, <span className="text-blue-600">Albert!</span>
                </h1>
                <p className="text-gray-500 mb-6">Explore the latest listings and apply for the best opportunities available today!</p>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-0 bg-white rounded-xl p-2 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                        <div className="flex-1 flex items-center px-4">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Job Title, Company, or Keywords"
                                className="flex-1 py-2 outline-none text-[15px] text-gray-700 placeholder-gray-400 min-w-[200px]"
                            />
                        </div>

                        <div className="hidden lg:block h-10 w-[1px] bg-gray-100 mx-2"></div>
                        <div className="lg:hidden h-[1px] w-full bg-gray-100 my-2"></div>

                        <div className="relative flex items-center justify-between lg:justify-start gap-3 px-4 py-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors min-w-[160px]">
                            <span className="text-[15px] text-gray-600">Select Location</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>

                        <div className="hidden lg:block h-10 w-[1px] bg-gray-100 mx-2"></div>
                        <div className="lg:hidden h-[1px] w-full bg-gray-100 my-2"></div>

                        <div className="relative flex items-center justify-between lg:justify-start gap-3 px-4 py-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors min-w-[140px]">
                            <span className="text-[15px] text-gray-600">Job Type</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>

                        <div className="p-1">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all shadow-md shadow-blue-600/20">
                                <Search className="w-4 h-4" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pl-1">
                        <span className="text-sm text-gray-400">Similar:</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-colors bg-white">Frontend</button>
                            <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-colors bg-white">Backend</button>
                            <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-colors bg-white">Graphic Designer</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs */}
            <div>
                <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl text-gray-800">Featured Jobs</h2>
                    <a href="#" className="text-sm text-blue-600 font-medium border-b-2 border-blue-600/50">See Featured Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {FEATURED_JOBS.map(job => (
                        <div key={job.id}>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended Jobs */}
            <div>
                <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl text-gray-800">Recommended Jobs</h2>
                    <a href="#" className="text-sm text-blue-600 font-medium border-b-2 border-blue-600/50">See Recommended Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {RECOMMENDED_JOBS.map(job => (
                        <div key={job.id}>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Latest Jobs - reusing recommended data for demo */}
            <div>
                <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl text-gray-800">Latest Jobs</h2>
                    <a href="#" className="text-sm text-blue-600 font-medium border-b-2 border-blue-600/50">See Latest Jobs</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {RECOMMENDED_JOBS.map(job => (
                        <div key={job.id + 10}>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
