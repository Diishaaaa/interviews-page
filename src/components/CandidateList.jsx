import React from "react";


const candidates = [
  { id: 1, name: "Emily Davis", jobTitle: "AI Engineer", date: "2025-03-23", time: "11:00 AM" },
  { id: 2, name: "Sophia Martinez", jobTitle: "Frontend Developer", date: "2025-03-24", time: "9:00 AM" },
  { id: 3, name: "Liam Carter", jobTitle: "Cloud Engineer", date: "2025-03-25", time: "3:00 PM" },
  { id: 1, name: "Emily Davis", jobTitle: "AI Engineer", date: "2025-03-23", time: "11:00 AM" },
  { id: 2, name: "Sophia Martinez", jobTitle: "Frontend Developer", date: "2025-03-24", time: "9:00 AM" },
  { id: 3, name: "Liam Carter", jobTitle: "Cloud Engineer", date: "2025-03-25", time: "3:00 PM" },
  
];


const pendingActions = [
  { text: "Confirm Interview Slot", sub: "Urgent", urgent: true },
  { text: "Reminder: Interview in 2 Days", sub: "Feb 10, 2025" },
  { text: "Reschedule Interview Slot", sub: "Urgent", urgent: true },
  { text: "Call with Recruiter at 5 PM", sub: "Today" },
  { text: "Applied for XYZ Role", sub: "Feb 5, 2025" },
  { text: "Task: Update LinkedIn Profile", sub: "Pending" },
  { text: "Confirm Interview Slot", sub: "Urgent", urgent: true },
  { text: "Reminder: Interview in 2 Days", sub: "Feb 10, 2025" },
  { text: "Reschedule Interview Slot", sub: "Urgent", urgent: true },
  { text: "Call with Recruiter at 5 PM", sub: "Today" },
  { text: "Applied for XYZ Role", sub: "Feb 5, 2025" },
  { text: "Task: Update LinkedIn Profile", sub: "Pending" },
];

// Data for Scheduled Interviews 
const scheduledInterviews = [
  {
    name: "T Gurubrahmareddy",
    role: "Java Lead K",
    company: "Tech Mahindra",
    date: "Feb 04, 2023",
    time: "2:00 PM",
    status: "Missed",
  },
  {
    name: "Kritesh Mehra",
    role: "Engineering Lead",
    company: "LTIMindtree",
    date: "Jan 02, 2025",
    time: "3:00 PM",
    status: "Missed",
  },
  {
    name: "Mrunal Desale",
    role: "Java GCP",
    company: "LTIMindtree",
    date: "TODAY",
    time: "5:00 PM",
    status: "",
  },
  
];

// Data for Most Recent Interviews
const recentInterviews = [
  {
    name: "Rohan Malhotra",
    meta: "Canva • India • Full-Time",
    heldOn: "1 Jan 2025",
    status: "In Review",
    statusStyle: "bg-indigo-50 text-indigo-700",
  },
  {
    name: "Neha Bansal",
    meta: "Wolff • Manglore • Full-Time",
    heldOn: "23 Dec 2025",
    status: "Shortlisted",
    statusStyle: "bg-green-50 text-green-700",
  },
  {
    name: "Ishaan Verma",
    meta: "Packer • Udupi • Full-Time",
    heldOn: "18 Jan 2025",
    status: "Declined",
    statusStyle: "bg-red-50 text-red-700",
  },
];

const CandidateList = () => {
  return (
    <div className="space-y-8">
      {/* SECTION 1: Candidate List & Pending Actions */}
      <div className="flex flex-col md:flex-row md:space-x-6 gap-6">
        {/* Candidate List */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-1 border">
          <h2 className="text-xl font-semibold mb-2">Candidates</h2>
          <div className="overflow-y-auto max-h-60">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="text-lg font-medium">{candidate.name}</p>
                  <p className="text-sm text-gray-500">{candidate.jobTitle}</p>
                  <p className="text-sm text-gray-500">
                    {candidate.date} | {candidate.time}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Actions */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2 max-w-[370px] border">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-300">
            Pending Actions
          </h3>
          <ul className="space-y-4 overflow-y-auto max-h-60">
            {pendingActions.map((action, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <div
                  className={`font-semibold text-sm ${
                    action.urgent ? "text-red-600" : "text-black"
                  }`}
                >
                  {action.text}
                </div>
                <div className="text-xs text-gray-600">{action.sub}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION 2: Scheduled Interviews & Most Recent Interviews */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Scheduled Interviews */}
        <div className="w-full md:w-[380px] bg-white p-4 rounded-lg shadow border">
          <h2 className="text-base font-medium text-green-700 mb-2">
            SCHEDULED INTERVIEWS ({scheduledInterviews.length})
          </h2>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <input type="checkbox" className="mr-2" />
            <span>Subscribe to WhatsApp notification</span>
          </div>
          <div className="overflow-y-auto max-h-60">
            {scheduledInterviews.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto_auto] gap-2 items-start p-2 border-b border-gray-200"
              >
                {/* Left Column: Name, Role, Company */}
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm">{item.name}</span>
                  <span className="text-xs text-gray-600">{item.role}</span>
                  <span className="text-xs text-gray-500">{item.company}</span>
                </div>
                {/* Middle Column: Date, Time */}
                <div className="flex flex-col items-end text-xs text-gray-600">
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                </div>
                {/* Right Column: Status */}
                <div className="flex flex-col items-end text-xs text-gray-600">
                  {item.status === "Missed" && (
                    <span className="text-orange-500 font-semibold">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Recent Interviews */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow border max-w-[600px]">
          <h3 className="text-base font-semibold mb-3 pb-2 border-b border-gray-300">
            Most recent interviews
          </h3>
          <div className="space-y-2">
            {recentInterviews.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr_auto] items-center py-2 border-t border-gray-200 first:border-t-0"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-gray-800">
                    {row.name}
                  </span>
                  <span className="text-xs text-gray-500">{row.meta}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Held on</span>
                  <span className="text-sm text-gray-700">{row.heldOn}</span>
                </div>
                <div className="text-left">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${row.statusStyle}`}
                  >
                    {row.status}
                  </span>
                </div>
                <div className="ml-auto text-gray-500 text-lg">...</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <a
              href="#!"
              className="text-sm text-indigo-600 font-medium hover:underline"
            >
              Browse post interviews &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 3: Footer */}
      <div className="bg-black text-white py-12 px-6 relative">
        <div className="footer-top">
          <h2 className="font-sixtyfour text-xl mb-2">OpportunityHub</h2>
          <p className="text-sm max-w-lg">
            Great platform for job seekers passionate about startups. Find your
            dream job easier.
          </p>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs">
          2025 @ OpportunityHub All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
