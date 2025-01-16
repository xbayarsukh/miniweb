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

    const [tfile, setTfile] = useState(
        template == null ? null : "/" + template.tfile
    );

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: template?.name || "",
            frontend: template?.frontend || "",
            banner: template?.banner || null,
            image: template?.image || null,
            about_overview: template?.about_overview || "",
            about_background: template?.about_background || "#fffff",
            partners: template?.partners || "",
            partners_background: template?.partners_background || "#fffff",
            portfolios: template?.portfolios || "",
            portfolios_background: template?.portfolios_background || "#fffff",
            posts: template?.posts || "",
            posts_background: template?.posts_background || "#fffff",
            services: template?.services || "",
            services_background: template?.services_background || "#fffff",
            tfile: template?.tfile || null,
        });
    const editorRef = useRef(null);
    const editorRef1 = useRef(null);
    const editorRef2 = useRef(null);
    const editorRef3 = useRef(null);
    const editorRef4 = useRef(null);

    const [fileName, setFileName] = useState(data.tfile ? data.tfile : "");

    useEffect(() => {
        const editorElements = [
            editorRef.current,
            editorRef1.current,
            editorRef2.current,
            editorRef3.current,
            editorRef4.current,
        ];

        editorElements.forEach((editorElement, index) => {
            if (editorElement) {
                $(editorElement).summernote({
                    height: 300,
                    placeholder: "Write your content here...",
                    tooltip: false,
                    callbacks: {
                        onChange: function (contents) {
                            switch (index) {
                                case 0:
                                    setData("services", contents);
                                    break;
                                case 1:
                                    setData("about_overview", contents);
                                    break;
                                case 2:
                                    setData("partners", contents);
                                    break;
                                case 3:
                                    setData("portfolios", contents);
                                    break;
                                case 4:
                                    setData("posts", contents);
                                    break;
                            }
                        },
                    },
                });

                // Set background color after initialization
                setTimeout(() => {
                    $(editorElement)
                        .find(".note-editable")
                        .css("background-color", "#000000");
                }, 100); // Adjust timeout duration as needed
            }
        });

        return () => {
            editorElements.forEach((editorElement) => {
                if (editorElement) {
                    $(editorElement).summernote("destroy");
                }
            });
        };
    }, []);

    const handleInputChange = (key, value) => {
        if (value) {
            const reader = new FileReader();
            reader.onload = () => {
                if (key == "banner") {
                    setBanner(reader.result);
                } else if (key == "tfile") {
                    setTfile(reader.result);
                    setFileName(value.name);
                } else {
                    setImage(reader.result);
                }
            };
            reader.readAsDataURL(value);
        }
        setData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleColorChange = (e) => {
        setData(e.target.name, e.target.value);
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
                                            Template File
                                        </label>

                                        <input
                                            type="file"
                                            accept=""
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "tfile",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="w-6/12 px-3 py-2 border border-gray-300 rounded-lg"
                                            {...(isEditMode
                                                ? {}
                                                : { required: true })}
                                        />
                                    </div>
                                    {fileName && (
                                        <div className="mt-2 text-sm text-gray-900 float-right h-12">
                                            {fileName}
                                        </div>
                                    )}
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
                                            {...(isEditMode
                                                ? {}
                                                : { required: true })}
                                        />
                                    </div>
                                    {!image && (
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
                                    )}
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
                                        ref={editorRef1}
                                        defaultValue={data.about_overview}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        About Background
                                    </h6>
                                    <input
                                        type="color"
                                        id="about_background"
                                        name="about_background"
                                        value={data.about_background}
                                        onChange={handleColorChange}
                                    />
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Partners
                                    </h6>
                                    <textarea
                                        ref={editorRef2}
                                        defaultValue={data.partners}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Partners Background
                                    </h6>
                                    <input
                                        type="color"
                                        id="partners_background"
                                        name="partners_background"
                                        value={data.partners_background}
                                        onChange={handleColorChange}
                                    />
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Portfolios
                                    </h6>
                                    <textarea
                                        ref={editorRef3}
                                        defaultValue={data.portfolios}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Portfolios Background
                                    </h6>
                                    <input
                                        type="color"
                                        id="portfolios_background"
                                        name="portfolios_background"
                                        value={data.portfolios_background}
                                        onChange={handleColorChange}
                                    />
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Posts
                                    </h6>
                                    <textarea
                                        ref={editorRef4}
                                        defaultValue={data.posts}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Posts Background
                                    </h6>
                                    <input
                                        type="color"
                                        id="posts_background"
                                        name="posts_background"
                                        value={data.posts_background}
                                        onChange={handleColorChange}
                                    />
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Service
                                    </h6>
                                    <textarea
                                        ref={editorRef}
                                        defaultValue={data.services}
                                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                        rows="4"
                                    ></textarea>
                                </li>
                                <li className="w-full md:w-6/12 p-4">
                                    <h6 className="font-bold leading-tight uppercase text-xs text-slate-500 mb-2">
                                        Service Background
                                    </h6>
                                    <input
                                        type="color"
                                        id="services_background"
                                        name="services_background"
                                        value={data.services_background}
                                        onChange={handleColorChange}
                                    />
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
