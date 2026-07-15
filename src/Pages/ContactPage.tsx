import emailjs from "@emailjs/browser";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
} from "react-icons/fi";
import toast from "react-hot-toast";

export default function ContactPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                "service_pqkgtuo",
                "template_1m6hygs",
                e.currentTarget,
                "OMGCGPu3m1kTeA9WV"
            );

            toast.success("Message sent successfully!");
            e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");

        }
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <section className="bg-zinc-900 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg text-indigo-100">
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-2 ">
                    {/* Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg text-gray-900">
                        <h2 className="mb-6 text-3xl font-bold mb-3 text-gray-900">
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-black"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-black"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold text-black"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-black"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Write your message..."
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <h2 className="mb-6 text-3xl font-bold">
                            Contact Information
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <FiMapPin size={24} className="text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p>Al Rehab City, New Cairo, Egypt</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FiPhone size={24} className="text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p>+20 1153159160</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FiMail size={24} className="text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>bahaamoustafa40@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FiClock size={24} className="text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold">Working Hours</h3>
                                    <p>Sun - Th | 10 AM - 6 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Al+Rehab+City,+New+Cairo,+Egypt&output=embed"
                        width="100%"
                        height="450"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
}