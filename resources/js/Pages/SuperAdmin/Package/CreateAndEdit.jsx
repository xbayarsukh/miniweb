import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateAndEdit({ pack }) {
    const isEditMode = !!pack;
    const [image, setImage] = useState(pack == null ? null: ("/" + pack.image));
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: pack?.title || '',
            price: pack?.price || '',
            month: pack?.month || '',
            day: pack?.day || 0,
            body: pack?.body || '',
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
                        setData("body", contents);
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
                response = await post(route("admin.package.update", pack.id));
            } else {
                response = await post(route("admin.package.store"));
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
                        <h6 className="mb-0">{isEditMode ? 'Хамтрагч байгууллага засах' : 'Хамтрагч байгууллага нэмэх'}</h6>
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
                                            Үнэ
                                        </label>

                                        <input
                                            type="text"
                                            value={data.price} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("price", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Үнэ" // Update placeholder text as needed
                                            aria-label="Price" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li> 
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                    <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                        Сар
                                    </label>
                                <input
                                            type="text"
                                            value={data.month} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("month", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Сар" // Update placeholder text as needed
                                            aria-label="Month" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                </div>

                                </li>  
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Өдөр
                                        </label>

                                        <input
                                            type="text"
                                            value={data.day } // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("day", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Өдөр" // Update placeholder text as needed
                                            aria-label="Day" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>                             
                            </ul>
                            
                            <ul className="flex flex-row pl-0 mb-0 rounded-lg">
                                <li className="w-6/12 mr-1">
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                Body
                            </h6>
                                    <textarea
                                        ref={editorRef}
                                        defaultValue={data.body}
                                    ></textarea>
                                </li>
                                <li className="w-6/12 ml-1">
                                
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
