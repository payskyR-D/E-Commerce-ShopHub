import { useSearchStore } from "../../Store/searchStore";
import { useCartStore } from "../../Store/cartStore";
import { logoutUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../Store/authStore";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const { cart } = useCartStore();
  const { searchTerm, setSearchTerm } = useSearchStore();
  const handleLogout = async () => {
    try {
      await logoutUser();

      logout();

      navigate("/login");
    } catch (error) {
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl mr-10 font-bold">
          Shop<span className="text-indigo-600">Hub</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            Contact
          </NavLink>
          <Link
            to="/wishlist"
            className="relative text-2xl text-gray-700 transition hover:text-red-500"
          >
            <FiHeart />
          </Link>


        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden items-center rounded-full border border-gray-300 px-4 py-2 lg:flex">
            <FiSearch className=" cursor-pointer text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                navigate("/products");
              }}
              className=" cursor-pointer ml-2 w-18 xl:w-20 border-none outline-none"
            />
          </div>

          {/* Wishlist */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <FiUser className="text-2xl text-indigo-600" />
              <span className="text-sm font-medium">
                {user?.displayName || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className=" cursor-pointer rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-2xl text-gray-700 transition hover:text-indigo-600"
            >
              <FiUser />
            </Link>
          )}
          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-2xl text-gray-700 transition hover:text-indigo-600"
          >
            <FiShoppingCart />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
