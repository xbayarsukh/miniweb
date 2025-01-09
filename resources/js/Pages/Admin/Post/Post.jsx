import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { DateTime } from 'luxon';

export default function Post({ posts }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null); // Store the selected post
    const { post } = useForm({});

    const openModal = (post) => {
        setSelectedPost(post); // Set the selected post for modal
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPost(null); // Reset selected post when modal is closed
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "modal-overlay") {
            closeModal(); // Close modal when clicked outside
        }
    };

    const submitDelete = async () => {
        try {
            let response = await post(
                route("admin.posts.destroy", selectedPost.id)
            );
            closeModal();
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <AuthenticatedLayout header="Мэдээ мэдээлэл">
            <Head title="Dashboard" />
            <div className="w-full px-6 py-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex flex-row justify-between">
                                <h6>Мэдээ мэдээлэл</h6>
                                <a
                                    href={route("admin.posts.create")}
                                    className="inline-block px-3 py-2 my-2 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
                                >
                                    Нэмэх
                                </a>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Гарчиг
                                                </th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Товч тайлбар
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Огноо
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Зассан огноо
                                                </th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {posts.map((post) => (
                                                <tr key={post.id}>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    src={
                                                                        "/" +
                                                                        post.image
                                                                    }
                                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    alt="user1"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 text-sm leading-normal">
                                                                    {post.title}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p className="mb-0 text-xs font-semibold leading-tight">
                                                            {post.subtitle}
                                                        </p>
                                                    </td>
                                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span className="text-xs font-semibold leading-tight text-slate-400">
                                                            {(() => {
                                                                const timestamp = post.created_at;  // UTC timestamp
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
                                                                const timestamp = post.updated_at;  // UTC timestamp
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
                                                            href={route('admin.posts.edit', { id: post.id })}
                                                            className="text-xs font-semibold leading-tight text-slate-400"
                                                        >
                                                            {/* Edit icon */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                id="Outline"
                                                                viewBox="0 0 24 24"
                                                                width="16"
                                                                height="16"
                                                            >
                                                                <path
                                                                    fill="gray"
                                                                    d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a
                                                            onClick={() =>
                                                                openModal(post)
                                                            } // Open modal with selected post
                                                            className="text-xs font-semibold leading-tight text-slate-400 ml-4"
                                                        >
                                                            {/* Delete icon */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                id="Outline"
                                                                viewBox="0 0 24 24"
                                                                width="16"
                                                                height="16"
                                                            >
                                                                <path
                                                                    fill="#ff7f7f"
                                                                    d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"
                                                                />
                                                                <path
                                                                    fill="#ff7f7f"
                                                                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"
                                                                />
                                                                <path
                                                                    fill="#ff7f7f"
                                                                    d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                                                                />
                                                            </svg>
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
            {isOpen && selectedPost && (
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
                                <b>{selectedPost.title}</b> Та энэ мэдээг
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
