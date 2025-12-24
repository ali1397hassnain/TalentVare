import { MapPin, Clock, Bookmark } from 'lucide-react';
import MicrosoftTeamsLogo from '../assets/microsoft-teams-svg.svg';

export default function JobCard({ job }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 px-5 py-2 flex flex-col gap-3 hover:shadow-md transition-shadow relative">
            {job.promoted && (
                <span className="text-[10px] font-medium text-gray-900 uppercase tracking-wide mb-1 block">Promoted</span>
            )}

            <div className="flex justify-between items-start">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center p-1 text-indigo-600">
                        {/* Logo */}
                        <img src={MicrosoftTeamsLogo} alt="Microsoft Teams" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h3 className="text-gray-900 text-md">{job.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{job.company}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs">{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs">{job.time} | <span className="text-blue-600">{job.applicants} applicants</span></span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-1">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-normal px-8 py-2 rounded-lg transition-colors">
                    Apply Now
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                    <Bookmark className="w-5 h-5 text-lg" />
                </button>
            </div>
        </div>
    );
}
