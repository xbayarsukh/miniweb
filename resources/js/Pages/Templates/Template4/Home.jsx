import { Head, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import React, { useState, useRef, useEffect } from "react";

export default function Index(
    headTitle,
    general,
    faqs,
    packages,
    portfolios,
    partners,
    posts,
    services
) {
    const contentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null); // Store the selected post
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const toggleAccordions = () => {
        setIsOpen(!isOpen);
    };
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

    // hero sectionees doosh rounded-none bolgoh
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector("#hero").offsetHeight; // Adjust the selector as needed
            setIsScrolled(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                {/* <link
                    rel="icon"
                    type="image/png"
                    href={"/" + general.favicon}
                /> */}
            </Helmet>
            <Head title="head" />
            <header className={`fixed w-full z-30`}>
                <nav
                    className={` px-5 pr-5 ${
                        isScrolled
                            ? "bg-gray-50 dark:bg-blue-900"
                            : "bg-gray-50 dark:bg-gray-500 "
                    }`}
                >
                    <div className="flex items-center justify-between place-items-center px-6 py-0 mx-auto ">
                        {/* Logo Section */}
                        <a href="#" className="flex items-center">
                            <img
                                src={
                                    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/logo.svg"
                                }
                                className="h-5  sm:h-8 mx-5"
                                alt="Landwind Logo"
                            />
                        </a>

                        {/* Desktop Menu */}
                        <div
                            className={`hidden lg:flex space-x-4 py-[20px] pt-[20px] text-sm text-black dark:text-white  `}
                        >
                            <a
                                href="#about"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Нүүр
                            </a>
                            <a
                                href="#services"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Үйлчилгээ
                            </a>
                            <a
                                href="#portfolios"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Portfolio
                            </a>
                            <a
                                href="#posts"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Мэдээ
                            </a>
                            <a
                                href="#faq"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Түгээмэл асуулт хариулт
                            </a>
                            <a
                                href="#contact"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Холбоо барих
                            </a>
                        </div>
                        <div className="className={`hidden lg:flex space-x-4   place-items-center">
                            <button
                                type="button"
                                className="ml-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm rounded-2xl px-5 py-2.5 transition duration-200"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Hero Section */}
            <section
                className="bg-white dark:bg-gray-900 w-full pt-10"
                id="hero"
                style={{
                    backgroundImage:
                        "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/hero_bg_19_1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    ref={contentRef}
                    className="flex flex-row items-center justify-between pt-20 text-gray-900 dark:text-white"
                >
                    <div className="w-1/2">
                        <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-4xl mx-[20%]">
                            Seamless IT Solutions <br />
                            For Business Growth
                        </h2>
                        <div className="flex flex-row space-x-10 mx-[18%] mt-10">
                            <button
                                type="button"
                                className="ml-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm rounded-2xl px-5 py-2.5"
                            >
                                View All Services
                            </button>
                            <button
                                type="button"
                                className="ml-6 text-white bg-transparent border-2 border-white rounded-lg focus:ring-4"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>

                    <img
                        src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/hero_19_2.png"
                        alt="hero image"
                        className="rounded-lg w-1/4 lg:w-1/4 mt-20 self-start lg:self-center"
                    />
                </div>
            </section>

            {/*Service Section*/}
            <section
                className="bg-white dark:bg-gray-800 w-full mx-auto pb-10  "
                id="service"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:text-white text-center mb-10">
                    Service
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <img
                                    src="https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />
                                <div className="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-b-lg">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Infrastructure & Cloud Services
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <img
                                    src="https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />
                                <div className="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-b-lg">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Infrastructure & Cloud Services
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <img
                                    src="https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />
                                <div className="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-b-lg">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Infrastructure & Cloud Services
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Post Section*/}
            <section
                className="bg-white dark:bg-gray-800 w-full mx-auto pb-10  "
                id="posts"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:text-white text-center mb-10">
                    Posts
                </h2>

                <div className="max-w-7xl mx-auto px-20 md:px-12 xl:px-6">
                    <div className="grid  w-full">
                        <div className="flex flex-row gap-x-[20px]">
                            {/*side1*/}
                            <div className="flex flex-col mr-0 w-full mx-5">
                                <div className="items">
                                    <div className="group rounded-lg bg-gray-50 dark:bg-gray-900 ">
                                        <div className="flex flex-row ">
                                            <img
                                                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                                                alt="Infrastructure & Cloud Services"
                                                className="w-1/2 h-50 object-cover rounded-t-lg m-3 m"
                                            />
                                            <div className="flex flex-col">
                                                <div className="space-y-4 p-6 pt-5 bg-white dark:bg-gray-900 rounded-b-lg">
                                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        Infrastructure & Cloud
                                                        Services
                                                    </p>

                                                    <a
                                                        href="#"
                                                        className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                                    >
                                                        Read Details →
                                                    </a>
                                                </div>

                                                <div className="flex flex-row m-5  mr-auto mt-10 height-5  text-gray-900 dark:text-white border-t border-gray-900 dark:border-white">
                                                    <div className="flex flex-row px-5 pt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                        >
                                                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                        </svg>
                                                        <p className="px-2">
                                                            Web{" "}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-row pt-2 ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                        >
                                                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                        </svg>
                                                        <p className="px-2">
                                                            Date{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="items mt-5 rounded-lg">
                                    <div className="group rounded-lg bg-gray-50 dark:bg-gray-900 ">
                                        <div className="flex flex-row ">
                                            <img
                                                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                                                alt="Infrastructure & Cloud Services"
                                                className="w-1/2 h-50 object-cover rounded-t-lg m-3"
                                            />
                                            <div className="flex flex-col">
                                                <div className="space-y-4 p-6 pt-5 bg-white dark:bg-gray-900 rounded-b-lg">
                                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        Infrastructure & Cloud
                                                        Services
                                                    </p>

                                                    <a
                                                        href="#"
                                                        className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                                    >
                                                        Read Details →
                                                    </a>
                                                </div>
                                                <div className="flex flex-row m-5 mr-auto mt-10  height-5  text-gray-900 dark:text-white border-t border-gray-900 dark:border-white">
                                                    <div className="flex flex-row px-5 pt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                        >
                                                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                        </svg>
                                                        <p className="px-2">
                                                            Web
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-row  pt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                        >
                                                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                        </svg>
                                                        <p className="px-2">
                                                            Date
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*side2*/}
                            <div className="items w-full px-0">
                                <div className="group rounded-lg bg-gray-50 dark:bg-gray-900 ">
                                    <div className="flex flex-col ">
                                        <img
                                            src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                                            alt="Infrastructure & Cloud Services"
                                            className="  h-56  rounded-t-lg m-3 "
                                        />
                                        <div className=" px-5 pr-5">
                                            <div className="space-y-4 pt-6 pb-6 bg-white dark:bg-gray-900 rounded-b-lg">
                                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Infrastructure & Cloud
                                                    Services
                                                </p>

                                                <a
                                                    href="#"
                                                    className=" mt-4 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                                >
                                                    Read Details →
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row m-5 mt-10 mr-auto g height-5  text-gray-900 dark:text-white border-t border-gray-900 dark:border-white">
                                            <div className="flex flex-row px-5 pt-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                >
                                                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                </svg>
                                                <p className="px-2">Web </p>
                                            </div>

                                            <div className="flex flex-row pt-2 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-4 h-4 mt-1 fill-current text-black dark:text-white"
                                                >
                                                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                </svg>
                                                <p className="px-2">Date </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolios 2 Section */}
            <section
                className="bg-white dark:bg-gray-900 w-full mx-auto pb-10  "
                id="portfolios"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:text-white text-center mb-10">
                    Portfolios
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 z-10">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="items mx-8 ">
                            <div
                                className={
                                    "group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg hm-auto relative"
                                }
                            >
                                <img
                                    src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_1.jpg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="z-20 absolute inset-0 flex flex-col rounded-r-full bg-gray-100 rounded-lg px-20 pr-10 text-gray-900 dark:text-gray-900 text-center font-2xl mt-[100%] bg-opacity-80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    <div className="w-[160%] ml-[-40%] rounded-r-full">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <div className="flex flex-col ">
                                                <h2 className="text-black dark:white">
                                                    Portfolios
                                                </h2>
                                                <p className="font-sm text-justify px-5">
                                                    Portfolios subtitle
                                                </p>
                                            </div>

                                            <div className="rounded-full inline-flex bg-blue-700 p-4">
                                                <button>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="fill-current text-black w-4 h-4"
                                                    >
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg hm-auto relative">
                                <img
                                    src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_1.jpg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className=" absolute inset-0 flex flex-col rounded-r-full bg-gray-100 rounded-lg px-20 pr-10 text-gray-900 dark:text-gray-900 text-center font-2xl mt-[100%] bg-opacity-80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    <div className="w-[160%] ml-[-40%] rounded-r-full">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <div className="flex flex-col ">
                                                <h2 className="text-black dark:white">
                                                    Portfolios
                                                </h2>
                                                <p className="font-sm text-justify px-5">
                                                    Portfolios subtitle
                                                </p>
                                            </div>

                                            <div className="rounded-full inline-flex bg-blue-700 p-4">
                                                <button>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="fill-current text-black w-4 h-4"
                                                    >
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg hm-auto relative">
                                <img
                                    src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_1.jpg"
                                    alt="Infrastructure & Cloud Services"
                                    className="w-full  object-cover rounded-lg"
                                />
                                <div className=" absolute inset-0 flex flex-col rounded-r-full bg-gray-100 rounded-lg px-20 pr-10 text-gray-900 dark:text-gray-900 text-center font-2xl mt-[100%] bg-opacity-80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    <div className="w-[160%] ml-[-40%] rounded-r-full">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <div className="flex flex-col ">
                                                <h2 className="text-black dark:white">
                                                    Portfolios
                                                </h2>
                                                <p className="font-sm text-justify px-5">
                                                    Portfolios subtitle
                                                </p>
                                            </div>

                                            <div className="rounded-full inline-flex bg-blue-700 p-4">
                                                <button>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="fill-current text-black w-4 h-4"
                                                    >
                                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white dark:bg-gray-900" id="faq">
                <div className="lg:pb-24 lg:px-6 pt-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <h2 className="mb-6 text-xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-xl dark:text-gray-50">
                        Түгээмэл асуулт хариулт
                    </h2>

                    {/* Accordion 1 */}
                    <div className="mx-auto rounded-2xl bg-gray-200 dark:bg-gray-700">
                        <div className="flex justify-between items-center pr-5">
                            <span className="text-sm text-black dark:text-white py-5 pl-5">
                                Name
                            </span>
                            <button
                                onClick={() => toggleAccordion(1)}
                                aria-expanded={
                                    activeIndex === 1 ? "true" : "false"
                                }
                                className="focus:outline-none"
                            >
                                {activeIndex === 1 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                    >
                                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M12 5v14M5 12h14"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {activeIndex === 1 && (
                            <div className="py-5 text-black dark:text-gray-50">
                                <p className="px-5 text-sm">
                                    What is your name?
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Accordion 2 */}
                    <div className="mx-auto rounded-2xl bg-gray-200 dark:bg-gray-700 mt-10">
                        <div className="flex justify-between items-center pr-5">
                            <span className="text-sm text-black dark:text-white py-5 pl-5">
                                Question 2
                            </span>
                            <button
                                onClick={() => toggleAccordion(2)}
                                aria-expanded={
                                    activeIndex === 2 ? "true" : "false"
                                }
                                className="focus:outline-none"
                            >
                                {activeIndex === 2 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                    >
                                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M12 5v14M5 12h14"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {activeIndex === 2 && (
                            <div className="py-5 text-black dark:text-gray-50">
                                <p className="px-5 text-sm">
                                    Answer to question 2.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Accordion 3 */}
                    <div className="mx-auto rounded-2xl bg-gray-200 dark:bg-gray-700 mt-10">
                        <div className="flex justify-between items-center pr-5">
                            <span className="text-sm text-black dark:text-white py-5 pl-5">
                                Question 3
                            </span>
                            <button
                                onClick={() => toggleAccordion(3)}
                                aria-expanded={
                                    activeIndex === 3 ? "true" : "false"
                                }
                                className="focus:outline-none"
                            >
                                {activeIndex === 3 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                    >
                                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="fill-current text-black dark:text-white w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M12 5v14M5 12h14"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {activeIndex === 3 && (
                            <div className="py-5 text-black dark:text-gray-50">
                                <p className="px-5 text-sm">
                                    Answer to question 3.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            {/**Footer */}
            <footer className="bg-gray-300 dark:bg-blue-950 text-black dark:text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Subscribe for daily update
                        </h2>
                        <div className="flex justify-center items-center space-x-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-2 w-64 rounded-full text-black"
                            />
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
                                Join Now
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                About Company
                            </h3>
                            <p className="text-sm mb-6">
                                Centric applications productize before front-end
                                vortals visualize front-end is results and value
                                added
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-xl hover:text-blue-500"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-xl hover:text-blue-500"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-xl hover:text-blue-500"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-xl hover:text-blue-500"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Address
                            </h3>
                            <p className="text-sm mb-2">+91 590088 55</p>
                            <p className="text-sm mb-2">webteck@gmail.com</p>
                            <p className="text-sm">Diamond Str, Floor No 05</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Company
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-blue-500"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-blue-500"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-blue-500"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-blue-500"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-blue-500"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Get the app
                            </h3>
                            <p className="text-sm mb-4">
                                We suggest connecting apps
                            </p>
                            <div className="space-y-4">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-8 h-8 text-black dark:text-white"
                                    >
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-8 h-8 mt-5 text-black dark:text-white"
                                    >
                                        <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
                        <p>
                            Copyright © 2024{" "}
                            <a href="#" className="text-blue-500">
                                Themeholy
                            </a>
                            . All Rights Reserved.
                        </p>
                        <ul className="flex space-x-4 mt-4 md:mt-0">
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
