import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function About({ about, templates }) {
    const [imageBanner, setImageBanner] = useState("/" + about.banner);
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: about.title,
            logo: null,
            favicon: null,
            overview: about.overview,
            banner: about.banner,
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
                        setData("overview", contents);
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
                setImageBanner(reader.result);
            };
            reader.readAsDataURL(value);
        }
        setData((prevData) => ({ ...prevData, [key]: value }));
    };

    const changeTemplate = () => {
        const newTemplate = templates.about_overview;

        if (editorRef.current) {
            $(editorRef.current).summernote("code", newTemplate); // Set content in the editor
        }

        setData("overview", String(newTemplate));
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            let response = await post(route("admin.about.update"));
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthenticatedLayout header="Бидний тухай">
            <Head title="Dashboard" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `.note-editable { !bg-white dark:!bg-[#1f1f1f]}`,
                }}
            />
            <div className="w-10/12 max-w-10/12 px-3 mx-auto mt-10">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <h6 className="mb-0">Бидний тухай</h6>
                    </div>
                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-6"
                        encType="multipart/form-data"
                    >
                        <div className="flex-auto p-4">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Banner
                                        </label>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "banner",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="w-6/12 px-3 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="image-preview-banner">
                                        <img
                                            src={imageBanner}
                                            alt=""
                                            className="float-right h-8"
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-row pl-0 mb-0 rounded-lg">
                                <li className="w-6/12 mr-1">
                                    <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                        Description
                                    </h6>
                                    <textarea
                                        ref={editorRef}
                                        defaultValue={data.overview}
                                    ></textarea>
                                </li>
                                <li className="w-6/12 ml-1">
                                    <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                        Харагдах байдал
                                    </h6>
                                    <div
                                        className="!min-h-[400px] !max-h-fit dark:bg-gray-500 p-3 rounded-lg"
                                        style={{
                                            backgroundColor:
                                                templates.about_background ??
                                                "white",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: data.overview,
                                        }}
                                    />
                                </li>
                            </ul>
                            <div className="flex flex-row">
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>
                                <button
                                    type="button"
                                    onClick={changeTemplate}
                                    className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest !text-black transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ml-2 focus:!text-white hover:!text-white active:!text-white"
                                >
                                    Анхны загвар
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
