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

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 bg-white rounded-lg py-2 px-6 shadow-sm">
                        <input
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="flex-1 px-2 py-2 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-[200px]"
                        />

                        <div className="hidden lg:block h-8 w-[1px] bg-gray-200"></div>
                        <div className="lg:hidden h-[1px] w-full bg-gray-200"></div>

                        <div className="relative flex items-center gap-2 px-4 cursor-pointer text-gray-500 hover:text-gray-700 justify-between lg:justify-start">
                            <span className="text-md pointer-events-none">Select Location</span>
                            <ChevronDown className="w-4 h-4 pointer-events-none" />
                        </div>

                        <div className="hidden lg:block h-8 w-[1px] bg-gray-200"></div>
                        <div className="lg:hidden h-[1px] w-full bg-gray-200"></div>

                        <div className="relative flex items-center gap-2 px-4 cursor-pointer text-gray-500 hover:text-gray-700 justify-between lg:justify-start">
                            <span className="text-md pointer-events-none">Job Type</span>
                            <ChevronDown className="w-4 h-4 pointer-events-none" />
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg flex items-center justify-center gap-2 font-normal transition-colors">
                            <Search className="w-4 h-4" />
                            <span>Search</span>
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm text-gray-400">Similar:</span>
                        <button className="px-4 py-1.5 border border-gray-400 rounded-lg text-xs font-medium text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors">Frontend</button>
                        <button className="px-4 py-1.5 border border-gray-400 rounded-lg text-xs font-medium text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors">Backend</button>
                        <button className="px-4 py-1.5 border border-gray-400 rounded-lg text-xs font-medium text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors">Graphic Designer</button>
                    </div>
                </div>
            </div>

            {/* Featured Jobs */}
            <div>
                <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl text-gray-800">Featured Jobs</h2>
                    <a href="#" className="text-sm text-blue-600 font-medium border-b-2 border-blue-600/50">See Featured Jobs</a>
                </div>
                <div className="flex flex-wrap gap-4">
                    {FEATURED_JOBS.map(job => (
                        <div key={job.id} className="flex-1 min-w-[220px] max-w-full">
                            <JobCard job={job} />
                        </div>
                    ))}
                    {/* Spacer to align last row if needed, typically flex-1 min-w handles it ok for "boxy" feel */}
                </div>
            </div>

            {/* Recommended Jobs */}
            <div>
                <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-xl text-gray-800">Recommended Jobs</h2>
                    <a href="#" className="text-sm text-blue-600 font-medium border-b-2 border-blue-600/50">See Recommended Jobs</a>
                </div>
                <div className="flex flex-wrap gap-4">
                    {RECOMMENDED_JOBS.map(job => (
                        <div key={job.id} className="flex-1 min-w-[220px] max-w-full">
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
                <div className="flex flex-wrap gap-4">
                    {RECOMMENDED_JOBS.map(job => (
                        <div key={job.id + 10} className="flex-1 min-w-[220px] max-w-full">
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
