import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateAndEdit({ user }) {
    const isEditMode = !!user;
    const [image, setImage] = useState(user == null ? null: ("/" + user.image));
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user?.name || '',
            subdomain: user?.subdomain || '',
            template: user?.template || '',
            phone: user?.phone || '',            
            expire_date: user?.expire_date || '',
            email: user?.email || '',
            // password: user?.password || '',

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
                response = await post(route("admin.users.update", user.id));
            } else {
                response = await post(route("admin.users.store"));
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
                        <h6 className="mb-0">{isEditMode ? 'Хэрэглэгчийн мэдээлэл засах' : 'Хэрэглэгчийн мэдээлэл нэмэх'}</h6>
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
                                            value={data.name} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Нэр" // Update placeholder text as needed
                                            aria-label="Name" // Updated the aria-label for accessibility
                                            aria-describedby="name-addon" // Updated aria-describedby for proper labeling
                                            required
                                        />
                                    </div>
                                </li>
                                
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                        Subdomain
                                        </label>

                                        <input
                                            type="text"
                                            value={data.subdomain} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("subdomain", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Subdomain" // Update placeholder text as needed
                                            aria-label="Subdomain" // Updated the aria-label for accessibility
                                            aria-describedby="subdomain-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li> 
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                    <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                        Template
                                    </label>                      
                                <input
                                            type="text"
                                            value={data.template} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("template", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Template" // Update placeholder text as needed
                                            aria-label="Template" // Updated the aria-label for accessibility
                                            aria-describedby="template-addon" // Updated aria-describedby for proper labeling
                                        />
                                </div>

                                </li>  
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            value={data.phone } // Binds to data.phone from your state
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Phone" // Update placeholder text as needed
                                            aria-label="Phone" // Updated the aria-label for accessibility
                                            aria-describedby="phone-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>      
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Exprire Date
                                        </label>

                                        <input
                                            type="text"
                                            value={data.expire_date } // Binds to data.phone from your state
                                            onChange={(e) =>
                                                setData("expire_date", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder=" Exprire Date" // Update placeholder text as needed
                                            aria-label=" Exprire Date" // Updated the aria-label for accessibility
                                            aria-describedby="expire_date-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>     
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Email
                                        </label>

                                        <input
                                            type="text"
                                            value={data.email } // Binds to data.phone from your state
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder=" Email" // Update placeholder text as needed
                                            aria-label=" Email" // Updated the aria-label for accessibility
                                            aria-describedby="email-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
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
