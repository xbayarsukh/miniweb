import { Head } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import React, { useState, useRef } from "react";
export default function Home({
    general,
    services,
    posts,
    faqs,
    portfolios,
    partners,
}) {
    const contentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null); // Store the selected post
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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

    return (
        <div>
            <Helmet>
                <link
                    rel="icon"
                    type="image/png"
                    href={"/" + general.favicon ?? ""}
                />
            </Helmet>
            <Head title={general.title ?? ""} />

            <header className="fixed w-full z-10">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <img
                                src={"/" + general.logo ?? ""}
                                className="h-6 mr-3 sm:h-9"
                                alt="Landwind Logo"
                            />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                {general.title ?? ""}
                            </span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
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
                                <svg
                                    className="hidden w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                        aria-current="page"
                                    >
                                        Нүүр
                                    </a>
                                </li>
                                {services.length > 0 && (
                                    <li>
                                        <a
                                            href="#services"
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {JSON.parse(general.options)
                                                .service_title ?? ""}
                                        </a>
                                    </li>
                                )}
                                {portfolios.length > 0 && (
                                    <li>
                                        <a
                                            href="#portfolios"
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {JSON.parse(general.options)
                                                .portfolio_title ?? ""}
                                        </a>
                                    </li>
                                )}
                                {posts.length > 0 && (
                                    <li>
                                        <a
                                            href="#posts"
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {JSON.parse(general.options)
                                                .news_title ?? ""}
                                        </a>
                                    </li>
                                )}
                                {faqs.length > 0 && (
                                    <li>
                                        <a
                                            href="#faqs"
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {JSON.parse(general.options)
                                                .faq_title ?? ""}
                                        </a>
                                    </li>
                                )}
                                <li>
                                    <a
                                        href="#contact"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Холбоо барих
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div
                        ref={contentRef}
                        className="mr-auto place-self-center lg:col-span-7"
                        dangerouslySetInnerHTML={{
                            __html: general.overview ?? "",
                        }}
                    ></div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src={"/" + general.banner ?? ""}
                            alt="hero image"
                        />
                    </div>
                </div>
            </section>

            {partners.length > 0 && (
                <section className="bg-white dark:bg-gray-900" id="partners">
                    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 ">
                            {partners.map((partner, index) => (
                                <a
                                    href={partner.link ?? ""}
                                    className="flex items-center lg:justify-center p-2 rounded-3xl bg-gray-800"
                                >
                                    <img
                                        src={"/" + partner.image ?? ""}
                                        alt="Partner Logo"
                                        className="h-9 filter grayscale hover:grayscale-0 dark:grayscale-0"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {services.length > 0 && (
                <section className="bg-gray-50 dark:bg-gray-800" id="services">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                        {services.map((service, index) => (
                            <div
                                className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
                                key={service.id}
                            >
                                {index % 2 === 0 && (
                                    <img
                                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                                        src={"/" + service.image ?? ""}
                                        alt="dashboard feature image"
                                    />
                                )}
                                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                        {service.title ?? ""}
                                    </h2>
                                    <p className="mb-8 font-light lg:text-xl">
                                        {service.subtitle ?? ""}
                                    </p>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: service.content ?? "",
                                        }}
                                    ></div>
                                </div>
                                {index % 2 === 1 && (
                                    <img
                                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                                        src={"/" + service.image ?? ""}
                                        alt="dashboard feature image"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {portfolios.length > 0 && (
                <div
                    id="portfolios"
                    className="py-8 !bg-gray-50 dark:!bg-gray-900"
                >
                    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                        <div class="md:w-2/3 lg:w-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6 text-secondary"
                            >
                                <path
                                    fill="white"
                                    fill-rule="evenodd"
                                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>

                            <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                                {JSON.parse(general.options).portfolio_title ??
                                    ""}
                            </h2>
                            <p class="text-gray-600 dark:text-gray-300">
                                {JSON.parse(general.options).portfolio_desc ??
                                    ""}
                            </p>
                        </div>
                        <div
                            class={
                                "mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-" +
                                (portfolios.length ?? "" == 1 ? 1 : 2) +
                                " lg:grid-cols-" +
                                portfolios.length +
                                " lg:divide-y-0 xl:grid-cols-" +
                                portfolios.length +
                                ""
                            }
                        >
                            {portfolios.map((portfolio) => (
                                <div class="group relative bg-gray-50 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-900">
                                        <img
                                            src={"/" + portfolio.image ?? ""}
                                            class="w-12"
                                            width="512"
                                            height="512"
                                            alt="burger illustration"
                                        />

                                        <div class="space-y-2">
                                            <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                                {portfolio.title ?? ""}
                                            </h5>
                                            <div
                                                class="text-gray-600 dark:text-gray-300"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        portfolio.content ?? "",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {posts.length > 0 && (
                <section className="bg-white dark:bg-gray-800" id="posts">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                {JSON.parse(general.options).news_title ?? ""}
                            </h2>
                            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                {JSON.parse(general.options).news_desc ?? ""}
                            </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {posts.map((post) => (
                                <div
                                    className="flex flex-col max-w-lg mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                    key={post.id}
                                    onClick={() => openModal(post)}
                                >
                                    <img
                                        src={"/" + post.image ?? ""}
                                        className="w-full h-[240px] object-cover"
                                        alt=""
                                    />
                                    <a className="text-white focus:ring-4 mx-3 mt-2 mb-1 focus:ring-purple-200 font-medium rounded-lg text-sm text-center dark:text-white  dark:focus:ring-purple-900">
                                        {post.title ?? ""}
                                    </a>
                                    <p className="text-justify mx-2 mb-2">
                                        {post.subtitle ?? ""}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {faqs.length > 0 && (
                <section className="bg-white dark:bg-gray-900" id="faqs">
                    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 pt-10">
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                            {JSON.parse(general.options).faq_title ?? ""}
                        </h2>
                        <div className="max-w-screen-md mx-auto">
                            {/** Accordion container */}
                            <div id="accordion-flush">
                                {faqs.map((faq, index) => (
                                    <>
                                        <h3>
                                            <button
                                                type="button"
                                                className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                                                    activeIndex === index
                                                        ? "text-gray-900 dark:text-white"
                                                        : "text-gray-500 dark:text-gray-400"
                                                } border-b border-gray-200 dark:border-gray-700`}
                                                onClick={() =>
                                                    toggleAccordion(index)
                                                }
                                            >
                                                <span>{faq.title ?? ""}</span>
                                                <svg
                                                    className={`w-6 h-6 transform ${
                                                        activeIndex === index
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </h3>
                                        <div
                                            className={`${
                                                activeIndex === index
                                                    ? "block"
                                                    : "hidden"
                                            } py-5 border-b border-gray-200 dark:border-gray-700 !text-black dark:!text-gray-300`}
                                            dangerouslySetInnerHTML={{
                                                __html: faq.content ?? "",
                                            }}
                                        ></div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <footer className="bg-white dark:bg-gray-800" id="contact">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="text-center">
                        <a
                            href="#"
                            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            <img
                                src="https://demo.themesberg.com/landwind/images/logo.svg"
                                className="h-6 mr-3 sm:h-9"
                                alt="Landwind Logo"
                            />
                            Landwind
                        </a>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                            © 2021-2022 Landwind™. All Rights Reserved. Built
                            with{" "}
                            <a
                                href="#"
                                target="_blank"
                                className="text-purple-600 hover:underline dark:text-purple-500"
                            >
                                Flowbite
                            </a>{" "}
                            and{" "}
                            <a
                                href="#"
                                target="_blank"
                                className="text-purple-600 hover:underline dark:text-purple-500"
                            >
                                Tailwind CSS
                            </a>
                            .
                        </span>
                        <ul className="flex justify-center mt-5 space-x-5">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* Modal */}
            {isOpen && selectedPost && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleClickOutside}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-2xl w-full dark:bg-gray-700"
                        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
                    >
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {selectedPost.title}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4  !text-gray-500 dark:!text-gray-400">
                            <img src={"/" + selectedPost.image} alt="" />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: selectedPost.content,
                                }}
                            ></div>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={closeModal}
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Хаах
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex-shrink-0 text-purple-500 dark:text-purple-400"></div>
        </div>
    );
}
