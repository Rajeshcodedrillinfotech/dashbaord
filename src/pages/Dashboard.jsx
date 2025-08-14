export default function Dashboard() {
  const stats = [
    { title: "Users", count: 120, color: "bg-blue-500" },
    { title: "Blogs", count: 45, color: "bg-green-500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`p-6 rounded-xl text-white ${stat.color} shadow-lg hover:scale-105 transform transition`}
          >
            <h2 className="text-lg">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
