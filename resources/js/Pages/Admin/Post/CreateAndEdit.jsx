import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateAndEdit({ singlePost }) {
    const isEditMode = !!singlePost;
    const [image, setImage] = useState(singlePost == null ? null: ("/" + singlePost.image));
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: singlePost?.title || '',
            subtitle: singlePost?.subtitle || '',
            image: null,
            content: singlePost?.content || '',
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
                        setData("content", contents);
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
                setImage(reader.result);
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
                response = await post(route("admin.posts.update", singlePost.id));
            } else {
                response = await post(route("admin.posts.store"));
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
                        <h6 className="mb-0">{isEditMode ? 'Мэдээ засах' : 'Мэдээ нэмэх'}</h6>
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
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Гарчиг" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                            required
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч мэдээлэл
                                        </label>

                                        <input
                                            type="text"
                                            value={data.subtitle} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("subtitle", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Товч тайлбар" // Update placeholder text as needed
                                            aria-label="Subtitle" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                            required
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Зураг
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
                                            {...(isEditMode ? {} : { required: true })}
                                        />
                                    </div>
                                    <div className="image-preview-logo">
                                        <img
                                            src={image}
                                            alt=""
                                            className="float-right h-12"
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
                                        defaultValue={data.content}
                                    ></textarea>
                                </li>
                                <li className="w-6/12 ml-1">
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                Харагдах байдал
                            </h6>
                                    <div
                                        className="h-[300px] dark:bg-gray-500 p-3 rounded-lg"
                                        style={{
                                            backgroundColor:
                                                
                                                "white",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: data.content,
                                        }}
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
