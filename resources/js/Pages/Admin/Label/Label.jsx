import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Label({ about, templates }) {
    const [imageLogo, setImageLogo] = useState("/" + about.logo);
    const [imageFavicon, setImageFavicon] = useState("/" + about.favicon);

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: about.title,
            logo: about.logo,
            favicon: about.favicon,
            about_title: JSON.parse(about.options).about_title,
            about_desc: JSON.parse(about.options).about_desc,
            news_title: JSON.parse(about.options).news_title,
            news_desc: JSON.parse(about.options).news_desc,
            service_title: JSON.parse(about.options).service_title,
            service_desc: JSON.parse(about.options).service_desc,
            portfolio_title: JSON.parse(about.options).portfolio_title,
            portfolio_desc: JSON.parse(about.options).portfolio_desc,
            partner_title: JSON.parse(about.options).partner_title,
            partner_desc: JSON.parse(about.options).partner_desc,
            faq_title: JSON.parse(about.options).faq_title,
            faq_desc: JSON.parse(about.options).faq_desc,
        });

    const submit = async (e) => {
        e.preventDefault();

        try {
            let response = await post(route("admin.labels.update"));
            console.log(response); // Check the response
            // Handle the response if needed
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    const handleInputChange = (key, value) => {
        if (value) {
            const reader = new FileReader();
            reader.onload = () => {
                if (key == "logo") {
                    setImageLogo(reader.result);
                } else {
                    setImageFavicon(reader.result);
                }
            };
            reader.readAsDataURL(value);
        }
        setData((prevData) => ({ ...prevData, [key]: value }));
    };

    return (
        <AuthenticatedLayout header="Сайтын Гарчигууд">
            <Head title="Сайтын Гарчигууд" />
            
            <div className="w-10/12 max-w-10/12 px-3 mx-auto mt-10 mb-10">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <h6 className="mb-0">Сайтын Гарчигууд</h6>
                    </div>
                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-6"
                        encType="multipart/form-data"
                    >
                        <div className="flex-auto p-4">
                            <ul>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Title
                                        </label>

                                        <input
                                            type="text"
                                            value={data.title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Logo
                                        </label>

                                        <div className="flex flex-col w-6/12">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "logo",
                                                        e.target.files[0]
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                            />
                                            <div className="image-preview-logo">
                                                <img
                                                    src={imageLogo}
                                                    alt=""
                                                    className="float-right h-12"
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Favicon
                                        </label>

                                        <div className="flex flex-col w-6/12">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "favicon",
                                                        e.target.files[0]
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                            />
                                            <div className="image-preview-favicon">
                                                <img
                                                    src={imageFavicon}
                                                    alt=""
                                                    className="float-right h-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>                            
                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Бидний тухай хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.about_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("about_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.about_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("about_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Мэдээ хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.news_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("news_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.news_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("news_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Үйлчилгээ хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.service_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("service_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.service_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("service_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Portfolio хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.portfolio_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("portfolio_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.portfolio_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("portfolio_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Хамтрагч байгууллага хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.partner_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("partner_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.partner_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("partner_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
                                    Түгээмэл асуулт хариулт хэсэг
                                </h6>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Гарчиг
                                        </label>

                                        <input
                                            type="text"
                                            value={data.faq_title} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("faq_title", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
                                        />
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 pl-0 flex flex-row items-center">
                                        <label className="w-6/12 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">
                                            Товч тайлбар
                                        </label>

                                        <textarea
                                            type="text"
                                            value={data.faq_desc} // Binds to data.title from your state
                                            onChange={(e) =>
                                                setData("faq_desc", e.target.value)
                                            }
                                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-6/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Enter title" // Update placeholder text as needed
                                            aria-label="Title" // Updated the aria-label for accessibility
                                            aria-describedby="title-addon" // Updated aria-describedby for proper labeling
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
