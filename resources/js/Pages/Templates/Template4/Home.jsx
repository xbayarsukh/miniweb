import { Head, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import React, { useState, useRef, useEffect } from "react";
import Portfolio from "@/Pages/Admin/Portfolio/Portfolio";

export default function Home({
    headTitle,
    general,
    faqs,
    packages,
    portfolios,
    partners,
    posts,
    services,
}) {
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            <header className={`fixed w-full md:w-full z-30`}>
                <nav
                    className={` px-5 pr-5 ${
                        isScrolled
                            ? "bg-gray-50 dark:!bg-blue-900"
                            : "bg-gray-50 dark:!bg-gray-500 "
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
                            className={`hidden lg:flex space-x-4 py-[20px] pt-[20px] text-sm text-black dark:!text-white  ${
                                isMenuOpen ? "hidden" : ""
                            } `}
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
                                {JSON.parse(general.options).service_title}
                            </a>
                            <a
                                href="#portfolios"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                {JSON.parse(general.options).portfolio_title}
                            </a>
                            <a
                                href="#posts"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                {JSON.parse(general.options).news_title}
                            </a>
                            <a
                                href="#faq"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                {JSON.parse(general.options).faq_title}
                            </a>
                            <a
                                href="#contact"
                                className="px-4 py-2 rounded-md transition duration-200"
                            >
                                Холбоо барих
                            </a>
                        </div>
                        <div className="lg:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="text-gray-900 dark:!text-white focus:outline-none focus:ring-2 focus:ring-gray-600 pt-2"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex  space-x-4   place-items-center">
                            <button
                                type="button"
                                className="ml-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:!focus:ring-blue-800 text-sm rounded-2xl px-5 py-2.5 transition duration-200"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="lg:hidden text-black dark:!text-white  px-5 py-4 rounded-md">
                            <a href="#about" className="block py-2">
                                Нүүр
                            </a>
                            <a href="#services" className="block py-2">
                                {JSON.parse(general.options).service_title}
                            </a>
                            <a href="#portfolios" className="block py-2">
                                {JSON.parse(general.options).portfolio_title}
                            </a>
                            <a href="#posts" className="block py-2">
                                {JSON.parse(general.options).news_title}
                            </a>
                            <a href="#faq" className="block py-2">
                                {JSON.parse(general.options).faq_title}
                            </a>
                            <a href="#contact" className="block py-2">
                                Холбоо барих
                            </a>
                        </div>
                    )}
                </nav>
            </header>
            {/* Hero Section */}
            <section
                className="bg-white dark:!bg-gray-900 w-full pt-10 "
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
                    className="flex flex-row items-center justify-between pt-20 text-gray-900 dark:!text-white"
                >
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-4xl mx-[20%]">
                            Seamless IT Solutions <br />
                            For Business Growth
                        </h2>
                        <div className="hidden md:flex flex-row space-x-10 mx-[18%] mt-10">
                            <button
                                type="button"
                                className="ml-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:!focus:ring-blue-800 text-sm rounded-2xl px-5 py-2.5 transition duration-200"
                            >
                                View All Services
                            </button>
                            <button
                                type="button"
                                className="ml-6 px-5 text-white bg-transparent border-2 border-white rounded-lg focus:ring-4"
                            >
                                View All Services
                            </button>
                        </div>
                    </div>

                    <img
                        src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/hero_19_2.png"
                        alt="hero image"
                        className="rounded-lg w-1/4 lg:w-1/4 mt-20 self-start lg:self-center pr-2 md:pr-0"
                    />
                </div>
            </section>

            {/*Service Section*/}
            <section
                className="bg-white dark:!bg-gray-800 w-full mx-auto pb-0 md:pb-10  "
                id="service"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:!text-white text-center mb-10">
                    {JSON.parse(general.options).service_title}
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div className="items mx-8 " key={index}>
                                <div className="group rounded-lg bg-gray-50 dark:!bg-gray-800 shadow-lg  ">
                                    <img
                                        src={"/" + service.image}
                                        alt="serviceImg"
                                        className="w-full h-56 object-cover rounded-t-lg"
                                    />
                                    <div className="space-y-4 p-6 bg-white dark:!bg-gray-900 rounded-b-lg">
                                        <p className="text-xl font-semibold text-gray-900 dark:!text-white">
                                            {service.title}
                                        </p>
                                        <p
                                            className="text-gray-700 dark:!text-gray-300 mt-2 text-sm text-justify"
                                            dangerouslySetInnerHTML={{
                                                __html: service.content,
                                            }}
                                        ></p>
                                        <a
                                            href="#"
                                            className=" mt-4 text-blue-600 dark:!text-blue-400 text-sm text-center font-semibold"
                                        >
                                            Read Details →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Post Section*/}
            <section
                className="bg-white dark:!bg-gray-900 w-full mx-auto pb-10"
                id="posts"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:!text-white text-center mb-10">
                    {JSON.parse(general.options).news_title}
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                    <div className="grid w-full gap-6">
                        <div className="flex  felx-col-1 md:flex-col-2 lg:flex-col-3 md:flex-row gap-6">
                            {posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col bg-gray-50 dark:!bg-gray-800 rounded-lg overflow-hidden shadow-md w-full"
                                >
                                    <div className="flex flex-row">
                                        <img
                                            src={"/" + post.image}
                                            alt="Infrastructure & Cloud Services"
                                            className="w-1/2 object-cover h-full rounded-t-lg m-3"
                                        />
                                        <div className="flex flex-col justify-between w-full">
                                            <div className="p-6">
                                                <p className="text-lg font-semibold text-gray-900 dark:!text-white">
                                                    {post.title}
                                                </p>
                                                <p className="text-lg font-semibold text-gray-900 dark:!text-white">
                                                    {post.subtitle}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="mt-4 text-blue-600 dark:!text-blue-400 text-sm font-semibold block"
                                                >
                                                    Read Details →
                                                </a>
                                            </div>
                                            <div className="flex flex-row p-5 border-t border-gray-900 dark:!border-white">
                                                <div className="flex items-center gap-2 text-gray-900 dark:!text-white">
                                                    {/* <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        className="w-4 h-4 fill-current"
                                                    >
                                                        <path d="... (SVG Path here) ..." />
                                                    </svg> */}
                                                    <span>Web</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-900 dark:!text-white ml-4">
                                                    {/* <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        className="w-4 h-4 fill-current"
                                                    >
                                                        <path d="... (SVG Path here) ..." />
                                                    </svg> */}
                                                    <span>Date</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolios Section */}
            {/* <section
                className="bg-white dark:!bg-gray-900 w-full mx-auto pb-10  "
                id="portfolios"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:!text-white text-center mb-10">
                    {JSON.parse(general.options).portfolio_title}
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 z-10">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        {portfolios.map((portfolio, index) => (
                            <div className="items mx-8  " key={index}>
                                <div
                                    className={
                                        "group rounded-lg bg-gray-50 dark:!bg-gray-800 shadow-lg hm-auto relative"
                                    }
                                >
                                    <img
                                        src={"/" + portfolio.image}
                                        alt="Infrastructure & Cloud Services"
                                        className="w-full object-cover rounded-lg"
                                    />
                                    <div className="z-20 absolute inset-0 flex flex-col rounded-r-full bg-gray-100 rounded-lg px-20 pr-10 text-gray-900 dark:!text-gray-900 text-center font-2xl mt-[100%] bg-opacity-80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                        <div className="w-[160%] ml-[-40%] rounded-r-full">
                                            <div className="flex flex-row justify-between items-center w-full">
                                                <div className="flex flex-col ">
                                                    <h2 className="text-black dark:!white">
                                                        {Portfolio.title}
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
                        ))}
                    </div>
                </div>
            </section> */}

            {/* FAQ Section */}
            <section className="bg-white dark:!bg-gray-900 pb-10" id="faq">
                <div className="lg:pb-24 lg:px-6 pt-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <h2 className="mb-6 text-xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-xl dark:!text-gray-50">
                        {JSON.parse(general.options).faq_title}
                    </h2>
                    {faqs.map((faq, index) => (
                        <div
                            className="mx-auto rounded-2xl bg-gray-200 dark:!bg-gray-700"
                            key={index}
                        >
                            <div className="flex justify-between items-center pr-5">
                                <span className="text-sm text-black dark:!text-white py-5 pl-5">
                                    {faq.title}
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
                                            className="fill-current text-black dark:!text-white w-5 h-5"
                                        >
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="fill-current text-black dark:!text-white w-5 h-5"
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
                                <div className="py-5 text-black dark:!text-gray-50">
                                    <p
                                        className="px-5 text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: faq.content ?? "",
                                        }}
                                    ></p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/**Footer */}
            <footer className="bg-blue-950 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Subscribe for daily update
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-2 w-full sm:w-64 rounded-full text-black focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
                                Join Now
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
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
