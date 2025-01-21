import { Head, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import React, { useState, useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            <header
                className={`fixed w-full ${
                    isScrolled ? "px-0 pr-0 " : "px-10 pr-10 mt-10"
                }`}
            >
                <nav
                    className={`bg-gray-50 dark:bg-gray-700 px-5 pr-5 ${
                        isScrolled ? "rounded-none" : "rounded-full  "
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
                            className={`hidden lg:flex space-x-4 py-[20px] pt-[20px] text-sm text-black dark:text-white ${"rounded-3xl"} place-items-center`}
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
                                Холбоо барих
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
                        "url('https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    ref={contentRef}
                    className="mr-auto flex flex-row justify-between items-center place-self-center text-center pt-20 lg:col-span-7 text-gray-900 dark:text-white"
                >
                    <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-4xl text-center mx-auto">
                        Seamless IT Solutions <br />
                        For Business Growth
                    </h2>

                    <img
                        src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/07/hero_img_21_1.png"
                        alt="hero image"
                        className="rounded-lg w-1/3 lg:w-1/3 mt-20" // Set the image width to 50% for smaller screens, full width for larger screens
                    />
                </div>
            </section>

            {/* Service Section*/}
            <section className="bg-white dark:bg-gray-900 pb-10 ">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* {services.map((service, index) => ( */}
                    <div
                        className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
                        index="1"
                    >
                        {/* {index % 2 === 0 && ( */}
                        <img
                            className="hidden w-full rounded-lg lg:mb-0 lg:flex"
                            src="https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg"
                            alt="dashboard feature image"
                        />
                        {/* )} */}

                        <div className="text-gray-500 mb-10 sm:text-lg dark:text-gray-400">
                            <h2 className="text-2xl  text-gray-900 dark:text-gray-50">
                                Үйлчилгээ
                            </h2>
                            <div className="grid grid-row pr-10">
                                <div className="items">
                                    <div className="flex items-center space-x-3 mt-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-6 h-6 fill-current text-black dark:text-white"
                                        >
                                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                        </svg>

                                        <p className=" font-light lg:text-md text-gray-900 dark:text-white">
                                            Subtitle
                                        </p>
                                    </div>

                                    <p className="text-sm text-justify px-8">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sint explicabo iste
                                        aspernatur praesentium repellat quas
                                        debitis sed corporis optio id.
                                    </p>
                                </div>
                                <div className="items">
                                    <div className="flex items-center space-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-6 h-6 fill-current text-black dark:text-white"
                                        >
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                        <p className=" font-light lg:text-md text-gray-900 dark:text-white">
                                            Subtitle
                                        </p>
                                    </div>

                                    <p className="text-sm text-justify px-8">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sint explicabo iste
                                        aspernatur praesentium repellat quas
                                        debitis sed corporis optio id.
                                    </p>
                                </div>
                                <div className="items  ">
                                    <div className="flex items-center space-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-6 h-6 fill-current text-black dark:text-white"
                                        >
                                            <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
                                        </svg>
                                        <p className=" font-light lg:text-md text-gray-900 dark:text-white">
                                            Subtitle
                                        </p>
                                    </div>

                                    <p className="text-sm text-justify px-8">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sint explicabo iste
                                        aspernatur praesentium repellat quas
                                        debitis sed corporis optio id.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-5 ">
                                <button
                                    type="button"
                                    className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm rounded-2xl px-5 py-2.5"
                                >
                                    View All Services
                                </button>
                            </div>
                        </div>
                        {/* {index % 2 !== 0 && (
                            <img
                                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex "
                                src="https://blog.infraspeak.com/wp-content/uploads/2021/08/Maintenance-as-a-Service.jpeg"
                                alt="dashboard feature image"
                            />
                        )} */}
                    </div>
                    {/* ))} */}
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

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    {/* <OwlCarousel
                        className="owl-theme relative"
                        loop
                        // margin={20}
                        nav={true}
                        dots={true}
                        navText={[
                            `<div className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-20 text-4xl text-gray-800 dark:text-white cursor-pointer">&lt;</div>`,
                            `<div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-20 text-4xl text-gray-800 dark:text-white cursor-pointer">&gt;</div>`,
                        ]}
                    > */}
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <img
                                    src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
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
                                    src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
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
                                    src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
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
                    {/* </OwlCarousel> */}
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

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    {/* <OwlCarousel
                        className="owl-theme relative"
                        loop
                        // margin={20}
                        nav={true}
                        dots={true}
                        navText={[
                            `<div className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-20 text-4xl text-gray-800 dark:text-white cursor-pointer">&lt;</div>`,
                            `<div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-20 text-4xl text-gray-800 dark:text-white cursor-pointer">&gt;</div>`,
                        ]}
                    > */}
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <div className="space-y-4 p-6  rounded-b-lg">
                                    <div className=" rounded-full inline-flex r bg-white dark:bg-gray-700  p-4 mx-[40%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="w-8 h-8  fill-current text-black dark:text-white "
                                        >
                                            <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
                                        </svg>
                                    </div>

                                    <p className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                                        Portfolios1
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify pr-5 px-5">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className=" mt-4 px-5 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg  ">
                                <div className="space-y-4 p-6  rounded-b-lg">
                                    <div className=" rounded-full inline-flex bg-white dark:bg-gray-700  p-4 mx-[40%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            className="w-8 h-8  fill-current text-black dark:text-white "
                                        >
                                            <path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" />
                                        </svg>
                                    </div>

                                    <p className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                                        Portfolios1
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify pr-5 px-5">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className=" mt-4 px-5 pr-5 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="items mx-8 ">
                            <div className="group rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
                                <div className="space-y-4 p-6 rounded-b-lg">
                                    <div className="rounded-full inline-flex bg-white dark:bg-gray-700 p-4 mx-[40%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-8 fill-current text-black dark:text-white"
                                        >
                                            <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
                                        </svg>
                                    </div>

                                    <p className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                                        Portfolios1
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-justify pr-5 px-5">
                                        Our experts ensure your IT
                                        infrastructure is optimized and secure.
                                        We offer cloud migration.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 px-5 text-blue-600 dark:text-blue-400 text-sm text-center font-semibold"
                                    >
                                        Read Details →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </OwlCarousel> */}
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
            <footer className="bg-black text-white py-10">
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
                                        className="w-8 h-8"
                                    >
                                        <path
                                            fill="#ffffff"
                                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-8 h-8 mt-5"
                                    >
                                        <path
                                            fill="#ffffff"
                                            d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"
                                        />
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
