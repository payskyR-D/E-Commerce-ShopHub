import heroImage from "../../assets/hero.jpg";
const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left */}
        <div className="max-w-xl">

          <span className="rounded-full bg-indigo-600/20 px-4 py-2 text-sm font-medium text-indigo-400">
            🔥 New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Discover Your
            <span className="text-indigo-500"> Perfect </span>
            Shopping Experience
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Shop premium products with unbeatable prices,
            secure payments, and lightning-fast delivery.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-black transition hover:bg-indigo-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-blue-500 transition hover:border-indigo-500">
              Explore
            </button>
          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold text-white">
                10K+
              </h2>

              <p className="text-gray-400">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                500+
              </h2>

              <p className="text-gray-400">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                24/7
              </h2>

              <p className="text-gray-400">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="absolute -left-6 top-10 rounded-2xl bg-slate-900 p-4 shadow-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-1 text-sm text-gray-400">
              4.9 Customer Rating
            </p>
          </div>

          <img
          src={heroImage}
          alt="Hero"
          className="w-[500px] rounded-3xl shadow-2xl"
/>

          <div className="absolute -bottom-5 right-0 rounded-2xl bg-indigo-600 p-5 text-white shadow-xl">
            🚚 Free Shipping
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;