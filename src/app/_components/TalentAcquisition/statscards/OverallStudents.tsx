

export default function OverallStudents() {
  return (
    <div className="p-4 rounded-xl bg-white shadow-md w-fit">
      <h2 className="text-sm font-semibold  mb-4">Overall Students</h2>

      <div className="relative w-[300px] h-[200px] ">
        {/* Largest Circle */}
        <div className="absolute left-8 top-6 w-[140px] h-[140px] border-2 border-white bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          3415
        </div>

        {/* Medium Circle */}
        <div className="absolute right-12 top-3 w-[100px] h-[100px] border-4 border-white bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          200
        </div>

        {/* Smallest Circle */}
        <div className="absolute left-[140px] bottom-10 w-[70px] h-[70px] border-4 border-white bg-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          75
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          Total Shortlisting Students
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-400" />
          Total profiles
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-black" />
          Average Score of the Students in Hire list
        </div>
      </div>
    </div>
  );
}
