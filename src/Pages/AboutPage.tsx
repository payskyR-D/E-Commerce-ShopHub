import { Link } from "react-router-dom";
import {
  Truck,
  ShieldCheck,
  Star,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="mb-6 text-6xl font-bold">
            About Our Store
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            We provide premium quality products with exceptional customer
            service. Our mission is to make shopping simple, secure,
            and enjoyable for everyone.
          </p>

        </div>
      </section>

      {/* Story */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="About Store"
            className="rounded-2xl shadow-xl"
          />

          <div>

            <h2 className="mb-6 text-4xl font-bold">
              Our Story
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              Founded in 2026, our store was created with one simple goal:
              to offer customers high-quality products at competitive prices.
            </p>

            <p className="leading-8 text-gray-600">
              Every product is carefully selected to ensure quality,
              reliability, and customer satisfaction. We continue to
              grow every day thanks to our amazing customers.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

              <Truck
                size={45}
                className="mx-auto mb-5 text-green-600"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Fast Delivery
              </h3>

              <p className="text-gray-500">
                Fast and reliable shipping directly to your door.
              </p>

            </div>

            <div className="rounded-xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

              <ShieldCheck
                size={45}
                className="mx-auto mb-5 text-blue-600"
              />
              <h3 className="mb-3 text-xl font-semibold">
                Secure Payment
              </h3>
              <p className="text-gray-500">
                Safe and trusted payment methods for every order.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <Star
                size={45}
                className="mx-auto mb-5 text-yellow-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Premium Quality
              </h3>

              <p className="text-gray-500">
                Carefully selected products with guaranteed quality.
              </p>

            </div>

            <div className="rounded-xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

              <Headphones
                size={45}
                className="mx-auto mb-5 text-red-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                24/7 Support
              </h3>

              <p className="text-gray-500">
                Our support team is always ready to help you.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20">

        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4">

          <div>

            <h2 className="text-5xl font-bold text-black">
              10K+
            </h2>

            <p className="mt-3 text-gray-600">
              Happy Customers
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-bold text-black">
              500+
            </h2>

            <p className="mt-3 text-gray-600">
              Products
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-black">
              4.9★
            </h2>
            <p className="mt-3 text-gray-600">
              Customer Rating
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-black">
              24/7
            </h2>
            <p className="mt-3 text-gray-600">
              Customer Support
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Our mission is to deliver outstanding shopping experiences
            by providing premium products, exceptional customer service,
            and innovative solutions that make every purchase enjoyable.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black py-24 text-center text-white">

        <h2 className="mb-5 text-5xl font-bold">
          Ready to Start Shopping?
        </h2>

        <p className="mb-8 text-lg text-gray-300">
          Browse our latest collection and discover amazing products.
        </p>

        <Link
          to="/products"
          className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
}