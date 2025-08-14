import { Link, useLocation } from "react-router-dom";
import { Home, Users, FileText, LogOut } from "lucide-react";
import logo from '../assets/logo.png';
export default function Sidebar() {
  const { pathname } = useLocation();
  const menu = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Blogs", icon: FileText, path: "/blogs" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <div className="flex items-center space-x-3 mb-8">
        <img src={logo} alt="Logo" className="w-20 h-10" />
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-600 mt-4">
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
}
