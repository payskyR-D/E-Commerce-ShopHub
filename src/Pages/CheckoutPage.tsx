import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { checkoutSchema } from "../schemas/checkoutSchema";
import { z } from "zod";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import toast from "react-hot-toast";

import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../Firebase/Firebase";
import { useCartStore } from "../Store/cartStore";

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });
    const { cart, clearCart } = useCartStore();

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const onSubmit = async (data: CheckoutFormData) => {
        try {
            await addDoc(collection(db, "orders"), {
                customer: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    city: data.city,
                    address: data.address,
                },

                paymentMethod: data.paymentMethod,

                items: cart,
                total: totalPrice,
                merchantId: "merchant_1",
                status: "pending",
                isRead: false,
                createdAt: serverTimestamp(),
            });

            clearCart();
            reset();

            toast.success("Order placed successfully");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-8 text-start text-4xl font-bold">
                Checkout
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-xl border text-left bg-white p-6 shadow"
            >
                {/* Full Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block font-medium"
                    >
                        Full Name
                    </label>

                    <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>


                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block font-medium"
                    >
                        Email
                    </label>

                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>


                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block font-medium"
                    >
                        Phone Number
                    </label>

                    <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.phone.message}
                        </p>
                    )}
                </div>


                {/* City */}
                <div>
                    <label
                        htmlFor="city"
                        className="mb-2 block font-medium"
                    >
                        City
                    </label>

                    <input
                        {...register("city")}
                        id="city"
                        type="text"
                        placeholder="Enter your city"
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.city && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.city.message}
                        </p>
                    )}
                </div>


                {/* Address */}
                <div>
                    <label
                        htmlFor="address"
                        className="mb-2 block font-medium"
                    >
                        Address
                    </label>

                    <textarea
                        {...register("address")}
                        id="address"
                        placeholder="Enter your address"
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.address && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.address.message}
                        </p>
                    )}
                    <label className="mb-3 block text-lg font-semibold">
                        Payment Method
                    </label>

                    <div className="grid gap-4">

                        {/* Cash */}
                        <label

                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition hover:border-indigo-600`}
                        >
                            <div className="flex items-center gap-4">
                                <FaMoneyBillWave
                                    size={28}
                                    className="text-green-600"
                                />

                                <div>
                                    <p className="font-semibold">
                                        Cash on Delivery
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Pay when your order arrives
                                    </p>
                                </div>
                            </div>

                            <input

                                type="radio"
                                value="cash"
                                {...register("paymentMethod")}
                                className="scale-150 cursor-pointer"
                            />
                        </label>

                        {/* Card */}
                        <label
                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition hover:border-indigo-600`}
                        >
                            <div className="flex items-center gap-4">
                                <FaCreditCard
                                    size={28}
                                    className="text-indigo-600"
                                />

                                <div>
                                    <p className="font-semibold">
                                        Credit / Debit Card
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Visa • Mastercard
                                    </p>
                                </div>
                            </div>

                            <input

                                type="radio"
                                value="card"
                                {...register("paymentMethod")}
                                className="scale-150 cursor-pointer"
                            />
                        </label>

                    </div>

                    {errors.paymentMethod && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.paymentMethod.message}
                        </p>
                    )}
                </div>
                {watch("paymentMethod") === "card" && (
                    <div className="mt-6 space-y-4">

                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="w-full rounded-lg border p-3"
                        />

                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full rounded-lg border p-3"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="rounded-lg border p-3"
                            />

                            <input
                                type="password"
                                placeholder="CVV"
                                className="rounded-lg border p-3"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-6 py-3 text-white"
                >
                    Place Order
                </button>

            </form>
        </div>
    );
};

export default Checkout;