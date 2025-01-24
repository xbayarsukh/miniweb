import { Head, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import React, { useState, useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
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
                            ? "bg-gray-50 dark:!bg-blue-950"
                            : "bg-gray-50 dark:!bg-gray-500 "
                    }`}
                >
                    <div className="flex items-center justify-between place-items-center px-6 py-0 mx-auto ">
                        {/* Logo Section */}
                        <a href="#" className="flex items-center">
                            <img
                                src={"/" + general.logo ?? ""}
                                className="h-6 mr-3 sm:h-9"
                                alt="Landwind Logo"
                            />
                            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:!text-white">
                                {general.title ?? ""}
                            </span> */}
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
                    // backgroundImage: `url(${general.banner})`,
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
                className="bg-white dark:!bg-gray-800 w-full mx-auto pb-10 "
                id="service"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:!text-white text-center mb-10">
                    {JSON.parse(general.options).service_title}
                </h2>

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                className="flex flex-col items mx-8 h-full"
                                key={index}
                            >
                                <div className="group flex flex-col h-full rounded-lg bg-gray-50 dark:!bg-gray-800 shadow-lg">
                                    <img
                                        src={"/" + service.image}
                                        alt="serviceImg"
                                        className="w-full h-56 object-cover rounded-t-lg"
                                    />
                                    <div className="flex flex-col flex-grow  space-y-4 p-6 bg-white dark:!bg-gray-900 rounded-b-lg">
                                        <p className="text-xl font-semibold text-gray-900 dark:!text-white">
                                            {service.title}
                                        </p>
                                        <p
                                            className={`text-gray-700 dark:!text-gray-300 mt-2 text-sm text-justify ${
                                                isExpanded ? "" : "line-clamp-2"
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: service.content,
                                            }}
                                        ></p>
                                        {service.content.length > 10 && ( // Show the button only if the content is longer than 10 characters
                                            <button
                                                onClick={() =>
                                                    setIsExpanded(!isExpanded)
                                                }
                                                className="mt-4 text-blue-500 focus:outline-none"
                                            >
                                                {isExpanded
                                                    ? "Hide"
                                                    : "Read More"}
                                            </button>
                                        )}
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
                    <OwlCarousel
                        className="owl-theme relative"
                        loop
                        margin={20}
                        nav
                        dots
                        navText={[
                            `<div class="absolute top-[40%] md:top-[50%] lg:top-[50%] left-[-15px] md:left-[-30px] lg:left-[-50px] transform -translate-y-1/2 z-20 text-4xl md:text-5xl lg:text-5xl text-black dark:text-white cursor-pointer">&lt;</div>`,
                            `<div class="absolute top-[40%] md:top-[50%] lg:top-[50%] right-[-15px] md:right-[-30px] lg:right-[-50px] transform -translate-y-1/2 z-20 text-4xl md:text-5xl lg:text-5xl text-black dark:text-white cursor-pointer">&gt;</div>`,
                        ]}
                    >
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-gray-50 dark:!bg-gray-800 rounded-lg overflow-hidden shadow-md w-full"
                            >
                                <div className="flex flex-row">
                                    <img
                                        src={"/" + post.image}
                                        alt={`Image for ${post.title}`}
                                        className="w-1/6  h-56 object-cover rounded-lg m-3"
                                    />
                                    <div className="flex flex-col justify-between w-full px-0">
                                        <div className="pt-5">
                                            <p className="text-lg font-semibold text-gray-900 dark:!text-white">
                                                {post.title}
                                            </p>
                                            <p className="text-sm text-gray-700 dark:!text-gray-300 mt-2 mr-2">
                                                {post.subtitle}
                                            </p>
                                            <a
                                                href="#"
                                                className="mt-20 text-blue-600 dark:!text-blue-400 text-sm font-semibold block"
                                            >
                                                Read Details →
                                            </a>
                                        </div>
                                        <div className="flex flex-row border-t border-gray-300 dark:!border-gray-700 text-sm text-black dark:text-white">
                                            <span className="text-sm">
                                                {new Date(
                                                    post.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>

            {/* Portfolios Section */}
            <section
                className="bg-white dark:!bg-gray-900 w-full mx-auto pb-10"
                id="portfolios"
            >
                <h2 className="text-2xl font-semibold pt-10 text-gray-800 dark:!text-white text-center mb-10">
                    {JSON.parse(general.options).portfolio_title}
                </h2>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 xl:px-6 z-10">
                    <OwlCarousel
                        className="owl-theme relative"
                        loop
                        margin={20}
                        nav
                        dots
                        navText={[
                            `<div class="absolute top-[40%] md:top-[50%] lg:top-[50%] left-[-15px] md:left-[-30px] lg:left-[-50px] transform -translate-y-1/2 z-20 text-3xl md:text-4xl lg:text-5xl text-black dark:text-white cursor-pointer">&lt;</div>`,
                            `<div class="absolute top-[40%] md:top-[50%] lg:top-[50%] right-[-15px] md:right-[-30px] lg:right-[-50px] transform -translate-y-1/2 z-20 text-3xl md:text-4xl lg:text-5xl text-black dark:text-white cursor-pointer">&gt;</div>`,
                        ]}
                    >
                        {portfolios.map((portfolio, index) => (
                            <div className="items mx-8" key={index}>
                                <div className="group rounded-lg bg-gray-50 dark:!bg-gray-800 shadow-lg relative">
                                    <img
                                        src={"/" + portfolio.image}
                                        alt="portfolios"
                                        className="w-full object-cover rounded-lg"
                                    />

                                    <div className="z-20 absolute bottom-0 left-0 right-0 flex items-center bg-gray-100 dark:!bg-gray-800 text-gray-900 dark:text-white text-center font-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-full flex justify-between items-center">
                                            <h2 className="text-black dark:text-white px-5 text-sm md:text-base lg:text-xl">
                                                {portfolio.title}
                                            </h2>
                                            <button className="rounded-full inline-flex bg-blue-700 p-2 sm:p-4 text-sm md:text-base">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    className="fill-current text-black dark:text-white w-4 h-4"
                                                >
                                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white dark:!bg-gray-900 pb-10" id="faq">
                <div className="lg:pb-24 lg:px-6 pt-10 max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <h2 className="mb-6 text-xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-xl dark:!text-gray-50">
                        {JSON.parse(general.options).faq_title}
                    </h2>
                    {faqs.map((faq, index) => (
                        <div
                            className=" rounded-2xl mx-5 bg-gray-200 dark:!bg-gray-700"
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
            <footer className="bg-blue-200 dark:bg-blue-950 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 mb-10 mx-[13%] w-full text-black dark:text-white ">
                        <div className="border-t border-gray-700 ">
                            <h3 className="font-semibold text-lg mb-4">
                                Address
                            </h3>
                            <div className="flex flex-row space-x-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    className="w-8 h-8 fill-black dark:fill-white"
                                >
                                    <path
                                        // fill="#ffffff"
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                    />
                                </svg>
                                <div className="flex flex-col">
                                    {" "}
                                    <p className="text-sm mb-2">
                                        12 Division Park, SKY
                                    </p>
                                    <p className="text-sm">12546. Berlin</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 ">
                            <h3 className="font-semibold text-lg mb-4">
                                Email
                            </h3>
                            <div className="flex flex-row space-x-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-8 h-8 fill-black dark:fill-white"
                                >
                                    <path
                                        // fill="#ffffff"
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                    />
                                </svg>
                                <div className="flex flex-col">
                                    {" "}
                                    <p className="text-sm mb-2">
                                        help@webteck-mail.com
                                    </p>
                                    <p className="text-sm">
                                        24/7@webteck-online.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 ">
                            <h3 className="font-semibold text-lg mb-4">
                                Phone
                            </h3>
                            <div className="flex flex-row space-x-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-8 h-8 fill-black dark:fill-white"
                                >
                                    <path
                                        // fill="#ffffff"
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                    />
                                </svg>
                                <div className="flex flex-col">
                                    {" "}
                                    <p className="text-sm mb-2">
                                        +(215) 2536-32156
                                    </p>
                                    <p className="text-sm">+(452) 3694-21587</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" border-t border-gray-700 pt-6 flex flex-row justify-between text-sm items-center mx-[35%] text-black dark:text-white">
                        <p>
                            Copyright © 2024{" "}
                            <a href="#" className="text-blue-500">
                                Themeholy
                            </a>
                            . All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
