import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateAndEdit({ template }) {
    const isEditMode = !!template;
    const [banner, setBanner] = useState(
        template == null ? null : "/" + template.banner
    );
    const [image, setImage] = useState(
        template == null ? null : "/" + template.image
    );

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: template?.name || "",
            frontend: template?.frontend || "",
            banner: template?.banner || null,
            image: template?.image || null,
            about_overview: template?.about_overview || "",
            sevice_overview: template?.servers || "",
        });
    const editorRef = useRef(null);

    useEffect(() => {
        const editorElement = editorRef.current;

        if (editorElement) {
            $(editorElement).summernote({
                height: 300,
                placeholder: "Write your content here...",
                tooltip: false,
                callbacks: {
                    onChange: function (contents) {
                        setData("about_overview", contents);
                        setData("servers", contents);
                    },
                },
            });
            setTimeout(() => {
                $(editorElement)
                    .find(".note-editable")
                    .css("background-color", "#000000");
            }, 100); // Adjust timeout duration as needed
        }

        return () => {
            if (editorElement) {
                $(editorElement).summernote("destroy");
            }
        };
    }, []);

    const handleInputChange = (key, value) => {
        if (value) {
            const reader = new FileReader();
            reader.onload = () => {
                if (key == "banner") {
                    setBanner(reader.result);
                } else {
                    setImage(reader.result);
                }
            };
            reader.readAsDataURL(value);
        }
        setData((prevData) => ({ ...prevData, [key]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (isEditMode) {
                response = await post(
                    route("admin.template.update", template.id)
                );
            } else {
                response = await post(route("admin.template.store"));
            }

            console.log(response); // Check the response
            // Handle the response if needed
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `.note-editable { !bg-white dark:!bg-[#1f1f1f]}`,
                }}
            />
            <div className="w-10/12 max-w-10/12 px-3 mx-auto mt-10">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <h6 className="mb-0">
                            {isEditMode ? "Загвар засах" : "Загвар нэмэх"}
                        </h6>
                    </div>
                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-6"
                        encType="multipart/form-data"
                    >
                        <div className="flex-auto p-4">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Нэр
                                        </label>

                                        <input
                                            type="text"
                                            value={data.name} // Binds to data.name from your state
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Нэр" // Update placeholder text as needed
                                            aria-label="name" // Updated the aria-label for accessibility
                                            aria-describedby="name-addon" // Updated aria-describedby for proper labeling
                                            required
                                        />
                                    </div>
                                </li>

                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Front-End
                                        </label>

                                        <input
                                            type="number"
                                            value={data.frontend} // Binds to data.frontend from your state
                                            onChange={(e) =>
                                                setData(
                                                    "frontend", // Ensure this matches the state property name
                                                    e.target.value
                                                )
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Front-End" // Update placeholder text as needed
                                            aria-label="Front-End" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Banner
                                        </label>

                                        <input
                                            type="file"
                                            accept="banner/*"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "banner",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="w-6/12 px-3 py-2 border border-gray-300 rounded-lg"
                                            {...(isEditMode
                                                ? {}
                                                : { required: true })}
                                        />
                                    </div>
                                    <div className="image-preview-logo">
                                        <img
                                            src={banner}
                                            alt=""
                                            className="float-right h-12"
                                        />
                                    </div>
                                </li>
                                {/* <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Image
                                        </label>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="w-6/12 px-3 py-2 border border-gray-300 rounded-lg"
                                            {...(isEditMode
                                                ? {}
                                                : { required: true })}
                                        />
                                    </div>
                                    <div className="image-preview-logo">
                                        <img
                                            src={image}
                                            alt=""
                                            className="float-right h-12"
                                        />
                                    </div>
                                </li> */}
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="w-6/12 px-3 py-2 border border-gray-300 rounded-lg"
                                            required
                                        />
                                    </div>
                                    {image && (
                                        <div className="image-preview-logo mt-2">
                                            <img
                                                src={image}
                                                alt="Preview"
                                                className="float-right h-12"
                                            />
                                        </div>
                                    )}
                                </li>
                            </ul>

                            <ul className="flex flex-wrap pl-0 mb-0 rounded-lg">
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        About Overview
                                    </h6>
                                    <textarea
                                        ref={editorRef}
                                        defaultValue={data.about_overview}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Service Overview
                                    </h6>
                                    <textarea
                                        ref={editorRef}
                                        defaultValue={data.servers}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                            </ul>

                            <div className="flex flex-row">
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
