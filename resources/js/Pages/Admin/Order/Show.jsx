import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { DateTime } from "luxon";
import MoneyFormat from "../../../Components/MoneyFormat";

export default function Order({ order }) {
    const [qpayInformation, setQpay] = useState(
        order == null ? null : JSON.parse(order.qpay_information)
    );
    const [showPayment, setShowPayment] = useState(false); // State for showing payment section

    const handleShowPayment = () => {
        setShowPayment(!showPayment); // Toggle visibility of the payment section
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "modal-overlay") {
            closeModal(); // Close modal when clicked outside
        }
    };

    const closeModal = () => {
        setShowPayment(false);
    };

    return (
        <AuthenticatedLayout header="Төлбөрийн дэлгэрэнгүй">
            <Head title="Төлбөрийн дэлгэрэнгүй" />
            <div className="w-9/12 px-6 py-6 mx-auto">
                <div className="xl:bg-gray-800 xl:bg-opacity-50 xl:p-8 xl:col-start-2 xl:grid-cols-10 lg:my-6 md:mx-6 sm:p-6 shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-8 bg-white bg-opacity-100 rounded-lg">
                    <div className="flex flex-row justify-between w-full items-center">
                        <div className="text-4xl font-bold">Invoice</div>
                        <div className="flex flex-col w-fit text-right items-end">
                            <svg
                                className="w-20"
                                viewBox="0 0 316 316"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG code */}
                            </svg>
                            <p>Infitech LLC</p>
                            <p>Хаяг байршил дэлгэрэнгүй</p>
                            <p>2024-12-24 18:00</p>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <div className="flex flex-col items-start w-64">
                            <p className="font-bold text-xl">Bill to</p>
                            <p>
                                Themesberg Inc., LOUISVILLE, Selby 3864 Johnson
                                Street, United States of America VAT Code:
                                AA-1234567890
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <td className="bg-gray-200 p-3 rounded-l-xl">
                                        Item
                                    </td>
                                    <td className="bg-gray-200 p-3">Price</td>
                                    <td className="bg-gray-200 p-3">Qty</td>
                                    <td className="bg-gray-200 p-3 rounded-r-xl">
                                        Total
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3">
                                        <p className="font-bold">
                                            ASDFASDFASDFADSF
                                        </p>
                                        <p>{order.order_no}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{order.package_price}</p>
                                    </td>
                                    <td className="p-3">1</td>
                                    <td className="p-3">{order.total_price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex w-full items-end justify-end mt-4">
                        <table className="w-72">
                            <tbody>
                                <tr>
                                    <td className="p-2 text-left">Subtotal</td>
                                    <td className="p-2 text-right">
                                        {order.total_price}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 text-left">Tax rate</td>
                                    <td className="p-2 text-right">0%</td>
                                </tr>
                                <tr>
                                    <td className="p-2 text-left">Discount</td>
                                    <td className="p-2 text-right">0.00₮</td>
                                </tr>
                                <tr>
                                    <td className="p-2 text-left font-bold">
                                        Total
                                    </td>
                                    <td className="p-2 text-right font-bold">
                                        {order.total_price}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button
                        onClick={handleShowPayment}
                        className="inline-block px-3 py-2 my-2  text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
                    >
                        Төлбөр төлөх
                    </button>
                </div>
            </div>
            {/*Payment*/}
            {showPayment && ( // Only show payment section if showPayment is true
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleClickOutside}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-2xl w-full dark:bg-gray-700"
                        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
                    >
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Төлбөр төлөх
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                &times;
                            </button>
                        </div>
                        {/* Desktop view */}
                        <div className="flex flex-col items-center sm:hidden space-y-4">
                            <img
                                className="w-48 h-auto"
                                src={
                                    "data:image/png;base64, " +
                                    qpayInformation.qr_image
                                }
                                alt="QR Code"
                            />
                            <p className="text-lg font-semibold text-gray-800">
                                {qpayInformation.name}
                            </p>
                        </div>

                        {/* Mobile view */}
                        <div className="flex flex-col  lg:hidden xl:hidden space-y-4 mt-10 pt-10">
                            {qpayInformation.urls.map((url) => (
                                <div className="flex  space-x-2 mx-5">
                                    <img
                                        className="w-10 h-auto"
                                        src={url.logo}
                                        alt="Logo"
                                    />
                                    <a
                                        href={url.link}
                                        // target={url.link}
                                        // rel="noopener noreferrer"
                                        className="flex flex-col  text-center space-y-2"
                                    >
                                        <p className="text-sm text-gray-700 font-semibold">
                                            {url.name}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
