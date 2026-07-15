import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaApplePay,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-20 bg-slate-950 text-gray-500">
            <div className="mx-auto max-w-7xl px-6">

                {/* Newsletter */}
                <div className="border-b border-slate-100 py-4">
                    <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                        <div>
                            <h2 className="text-3xl font-bold !text-white">
                                Stay Updated
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Subscribe to receive exclusive offers and the latest products.
                            </p>
                        </div>

                        <form className="flex w-full max-w-xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-l-xl border border-slate-700 bg-slate-900 px-5 py-3 outline-none focus:border-indigo-500"
                            />

                            <button
                                className="rounded-r-xl bg-indigo-600 px-8 font-medium text-white transition hover:bg-indigo-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Links */}
                <div className="grid gap-10 py-4 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Logo */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold !text-white">
                            Shop<span className="text-indigo-500">Hub</span>
                        </h2>

                        <p className="mt-5 max-w-sm leading-7 text-gray-400">
                            Your trusted online shopping destination with premium products,
                            secure payments, and fast delivery.
                        </p>

                        <div className="mt-8 flex gap-4">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-indigo-600"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-pink-600"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-700"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                    {/* Customer */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Customer
                        </h3>

                        <ul className="space-y-3">
                            <li><Link className="hover:text-white" to="/">My Account</Link></li>
                            <li><Link className="hover:text-white" to="/">Track Order</Link></li>
                            <li><Link className="hover:text-white" to="/">Wishlist</Link></li>
                            <li><Link className="hover:text-white" to="/">Cart</Link></li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Shop
                        </h3>

                        <ul className="space-y-3">
                            <li><Link className="hover:text-white" to="/">All Products</Link></li>
                            <li><Link className="hover:text-white" to="/">Categories</Link></li>
                            <li><Link className="hover:text-white" to="/">New Arrivals</Link></li>
                            <li><Link className="hover:text-white" to="/">Best Sellers</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Company
                        </h3>

                        <ul className="space-y-3">
                            <li><Link className="hover:text-white" to="/">About Us</Link></li>
                            <li><Link className="hover:text-white" to="/">Contact</Link></li>
                            <li><Link className="hover:text-white" to="/">Privacy Policy</Link></li>
                            <li><Link className="hover:text-white" to="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-6 border-t border-slate-800 py-3 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-4 text-4xl text-gray-400">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcPaypal />
                        <FaApplePay />
                    </div>

                    <p className="text-sm text-gray-500">
                        © 2026 ShopHub. All Rights Reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;