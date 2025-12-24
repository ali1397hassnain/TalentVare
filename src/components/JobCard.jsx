import { MapPin, Clock, Bookmark } from 'lucide-react';
import MicrosoftTeamsLogo from '../assets/microsoft-teams-svg.svg';

export default function JobCard({ job }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-3 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-blue-100 transition-all duration-300 relative group h-full">
            {job.promoted ? (
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-0.5 block">Promoted</span>
            ) : (
                <div className="h-[18px] mb-0.5"></div>
            )}

            <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex-shrink-0 flex items-center justify-center p-2">
                    <img src={MicrosoftTeamsLogo} alt="Microsoft Teams" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                    <h3 className="text-gray-900 text-[15px] leading-tight truncate" title={job.title}>{job.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 truncate">{job.company}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs truncate">{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs truncate">{job.time} | <span className="text-blue-600 font-medium">{job.applicants} applicants</span></span>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 mt-auto pt-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium py-2 rounded-lg transition-colors shadow-sm shadow-blue-200">
                    Apply Now
                </button>
                <button className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-50 rounded-md transition-colors">
                    <Bookmark className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
