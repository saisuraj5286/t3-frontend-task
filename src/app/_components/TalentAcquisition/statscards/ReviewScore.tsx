// components/ReviewScore.tsx

const scores = [
  {
    label: 'Speaking Skills',
    value: 16,
    max: 2113, // for relative scaling
    color: 'bg-red-400',
    emoji: '😞',
  },
  {
    label: 'Coding Task',
    value: 45,
    max: 2113,
    color: 'bg-yellow-300',
    emoji: '😐',
  },
  {
    label: 'AI Interview',
    value: 2113,
    max: 2113,
    color: 'bg-green-400',
    emoji: '😊',
  },
];

export default function ReviewScore() {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md w-full min-w-[170%] max-w-{300}">
      <p className="text-sm text-gray-400">AI Feedback</p>
      <h2 className="text-lg font-semibold mb-2">Reviews Score</h2>
      <div className="border-t border-gray-200 my-2" />

      <div className="space-y-4">
        {scores.map((item, idx) => (
          <div key={idx}>
            {/* Progress bar */}
            <div className="flex items-center gap-1">
              <span>{item.emoji}</span>
              <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{ width: `${(item.value / item.max) * 100}%` }}
                />
              </div>
            </div>

            {/* Label and value */}
            <div className="flex justify-between text-sm mt-1 text-gray-700 font-medium">
              <span>{item.label}</span>
              <span className={`${idx === 2 ? 'font-bold' : ''}`}>{item.value.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
