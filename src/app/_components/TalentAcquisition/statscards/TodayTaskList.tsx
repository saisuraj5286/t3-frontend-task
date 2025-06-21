import { Book, Play, Dumbbell, Code, MonitorPlay } from "lucide-react";

const tasks = [
  {
    icon: <MonitorPlay className="text-white" size={15} />,
    iconBg: "bg-purple-500",
    title: "UI Design",
    tags: ["Work", "Rasion Project"],
    tagColors: ["bg-red-100 text-red-600", "bg-indigo-100 text-indigo-600"],
    time: "00:14:06",
  },
  {
    icon: <Dumbbell className="text-white" size={15} />,
    iconBg: "bg-orange-400",
    title: "100x Sit-Up",
    tags: ["Personal", "Workout"],
    tagColors: ["bg-gray-100 text-gray-600", "bg-orange-100 text-orange-600"],
    time: "00:14:06",
  },
  {
    icon: <Code className="text-white" size={15} />,
    iconBg: "bg-pink-500",
    title: "Learn HTML & CSS",
    tags: ["Personal", "Coding"],
    tagColors: ["bg-gray-100 text-gray-600", "bg-pink-100 text-pink-600"],
    time: "00:24:52",
  },
  {
    icon: <Book className="text-white" size={15} />,
    iconBg: "bg-green-500",
    title: "Read 10 pages of book",
    tags: ["Personal", "Reading"],
    tagColors: ["bg-gray-100 text-gray-600", "bg-green-100 text-green-600"],
    time: "00:21:09",
  },
];

export default function TodayTaskList() {
  return (
    <div className="max-h- max-w-[100%] rounded-2xl bg-white p-5 px-8">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Today</h2>
        <button className="text-sm text-gray-500 hover:underline">
          See All
        </button>
      </div>

      <div className="space-y-1">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-2 rounded-xl bg-white p-4 shadow-sm"
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${task.iconBg}`}
            >
              {task.icon}
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-sm font-semibold">{task.title}</h3>
              <div className=" flex gap-1">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${task.tagColors[i]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <div className="mb-2 text-xs font-semibold text-purple-600">
                {task.time}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Play size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
