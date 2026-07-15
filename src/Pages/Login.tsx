import { useAuthStore } from "../Store/authStore";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();



const onSubmit = async (data: LoginFormData) => {
  try {
    const user = await loginUser(data.email, data.password);

    setUser(user);

    console.log(user);

    toast.success("Login Successfully ✅");

    navigate("/");

  } catch (error: any) {
  console.log(error);
  toast.error("error.message");
}
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2 ">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className=" cursor-pointer w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold hover:underline">
        Register
        </Link>
      </p>
        </form>
      </div>
    </div>
  );
};

export default Login;