export default function Blogs() {
  const blogs = [
    { id: 1, title: "First Blog", author: "John" },
    { id: 2, title: "Second Blog", author: "Jane" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add Blog
      </button>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Author</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{b.id}</td>
              <td className="p-3">{b.title}</td>
              <td className="p-3">{b.author}</td>
              <td className="p-3 flex gap-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
