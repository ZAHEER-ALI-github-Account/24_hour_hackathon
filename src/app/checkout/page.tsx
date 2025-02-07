"use client";
import { getCartItems } from "../action/action";
import { Product } from "../types/product";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Checkout = () => {
    const router = useRouter();
    
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    });

    const [formError, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };

        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all required fields!",
            });
            return;
        }

        const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipcode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map(product => ({
                _type: 'reference', 
                _ref: product._id,  
            })),
            total: subTotal - discount, 
            discount: discount,
            orderDate: new Date().toISOString(),
        };
        
        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount");
            Swal.fire({
                icon: "success",
                title: "Order Placed!",
                text: "Thank you for your purchase. Your order has been placed successfully.",
            }).then(() => {
                router.push("/");
            });
        } catch (error) {
            console.log("error creating order", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong while placing your order. Please try again.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <nav className="mb-6 flex justify-between items-center">
                    <Link href="/cart" className="text-blue-600 hover:underline">Cart</Link>
                    <span className="font-semibold text-lg">Checkout</span>
                </nav>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((product) => (
                                <div key={product._id} className="flex items-center gap-4 p-2 border-b">
                                    {product.image && (
                                        <Image
                                            src={urlFor(product.image).url()}
                                            alt={product.title}
                                            width={60}
                                            height={60}
                                            className="rounded-lg object-cover"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-medium">{product.title}</h3>
                                        <p className="text-sm">Quantity: {product.inventory}</p>
                                        <p className="text-sm font-semibold">${product.price * product.inventory}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No items in cart</p>
                        )}
                        <div className="mt-4 text-right">
                            <p className="font-medium">Subtotal: <span className="font-semibold">${subTotal.toFixed(2)}</span></p>
                            <p className="font-medium">Discount: <span className="font-semibold">${discount.toFixed(2)}</span></p>
                            <p className="text-lg font-bold">Total: ${subTotal - discount}</p>
                        </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                        <form className="grid gap-4">
                            {Object.keys(formValues).map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium capitalize">{field}</label>
                                    <input
                                        type="text"
                                        id={field}
                                        placeholder={`Enter your ${field}`}
                                        value={formValues[field as keyof typeof formValues]}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                    {formError[field as keyof typeof formError] && (
                                        <p className="text-red-500 text-xs">{field} is required</p>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handlePlaceOrder}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
