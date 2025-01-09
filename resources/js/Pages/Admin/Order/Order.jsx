import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { DateTime } from 'luxon';
import MoneyFormat from '../../../Components/MoneyFormat';

export default function Order({ orders }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null); // Store the selected order
    const { order } = useForm({});

    const openModal = (order) => {
        setSelectedOrder(order); // Set the selected order for modal
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedOrder(null); // Reset selected order when modal is closed
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "modal-overlay") {
            closeModal(); // Close modal when clicked outside
        }
    };

    const submitDelete = async () => {
        try {
            let response = await order(
                route("admin.orders.destroy", selectedOrder.id)
            );
            closeModal();
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <AuthenticatedLayout header="Төлбөрийн түүх">
            <Head title="Төлбөрийн түүх" />
            <div className="w-full px-6 py-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex flex-row justify-between">
                                <h6>Төлбөрийн түүх</h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Захиалгын дугаар
                                                </th>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Багц
                                                </th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Үнийн дүн
                                                </th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Төлбөрийн төлөв
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Үүссэн Огноо
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Төлөгдсөн огноо
                                                </th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order) => (
                                                <tr key={order.id}>
                                                    <td className="px-6 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div className="mb-0 text-xs font-bold leading-tight">
                                                            {order.order_no}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p className="mb-0 text-xs font-semibold leading-tight">
                                                            {order.month > 0 ? '1 сарын багц' : ('Тrial Багц ' + order.day + ' хоног')}
                                                        </p>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p className="mb-0 text-xs font-semibold leading-tight">
                                                            <MoneyFormat amount={order.total_price} />
                                                        </p>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class={"bg-gradient-to-tl "+(order.payment_status == "paid"?"from-green-600 to-lime-400": "from-red-600 to-rose-400")+" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"}>
                                                            {order.payment_status == "paid" ? "Төлсөн" : "Төлөөгүй"}
                                                        </span>
                                                    </td>
                                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span className="text-xs font-semibold leading-tight text-slate-400">
                                                            {(() => {
                                                                const timestamp = order.created_at;  // UTC timestamp
                                                                // Parse the UTC timestamp and convert it to the desired time zone
                                                                const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');

                                                                // Get the formatted date in the correct time zone
                                                                const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                                                return <div>{formattedDate}</div>;
                                                            })()}
                                                        </span>
                                                    </td>
                                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span className="text-xs font-semibold leading-tight text-slate-400">
                                                            {(() => {
                                                                const timestamp = order.updated_at;  // UTC timestamp
                                                                // Parse the UTC timestamp and convert it to the desired time zone
                                                                const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');

                                                                // Get the formatted date in the correct time zone
                                                                const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                                                return <div>{formattedDate}</div>;
                                                            })()}
                                                        </span>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a
                                                            href={route('admin.orders.edit', { id: order.order_no })}
                                                            className="text-xs font-semibold leading-tight text-slate-400"
                                                        >
                                                            {/* Edit icon */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z"/><circle cx="12" cy="12" r="4"/></svg>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && selectedOrder && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-[999]"
                    onClick={handleClickOutside}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6"
                        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-semibold">
                                <b>{selectedOrder.title}</b> Та энэ мэдээг
                                устгахдаа итгэлтэй байна уу?
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
                            >
                                Хаах
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                onClick={submitDelete}
                            >
                                Устгах
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
