import avatar from '../assets/avatar.png';

export default function Navbar() {
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-1 w-72 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div className="flex items-center gap-4">
        <span className="font-medium">Admin</span>
        <img src={avatar} alt="User" className="w-15 h-10 rounded-full" />
      </div>
    </div>
  );
}
