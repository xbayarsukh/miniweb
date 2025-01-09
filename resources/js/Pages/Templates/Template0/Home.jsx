import { Head, Link } from '@inertiajs/react';
import { Helmet } from "react-helmet";

export default function Welcome({ general }) {


    return (
        <>
        <Helmet>
        <link
                    href="/front/css/aos.css"
                    rel="stylesheet"
                />
                <link
                    href="/front/css/style.min.css"
                    rel="stylesheet"
                />
                <link
                    href="/front/css/swiper-bundle.min.css"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/png" href={"/"+general.favicon} />
        </Helmet>
            <Head title={general.title} />
    <header id="navbar"
        class="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
        <div class="container">
            <nav class="flex items-center">
           
                <a href="index.html">
                    <img src={'/'+general.logo} class="h-8" alt="Logo Light"/>
                </a>

        
                <div class="hidden lg:block ms-auto">
                    <ul class="navbar-nav flex gap-x-3 items-center justify-center">
                   
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>

                
                        <li class="nav-item">
                            <div class="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
                                <a href="javascript:void(0);"
                                    class="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                                    Landing
                                    <i class="i-fa6-solid-angle-down ms-2 align-middle"></i>
                                </a>

                                <div id="landingDropdownMenu"
                                    class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-96 min-w-96 border p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full">
                                    <div class="grid grid-cols-2 gap-1.5">
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-app.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i
                                                            class="i-solar-smartphone-2-bold-duotone text-blue-600 size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">
                                                        App
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-saas.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-green-500/20 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <span
                                                            class="i-solar-laptop-minimalistic-bold-duotone text-green-500 size-6"></span>
                                                    </span>
                                                    <div class="flex-grow-1">Saas Modern</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-saas2.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-monitor-bold-duotone text-primary size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Saas Classic</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-startup.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-pulse-bold-duotone text-orange-600 size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Startup</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-software.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-amber-400/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-layers-bold-duotone text-amber-400 size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Software</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-agency.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-black/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-bolt-circle-bold-duotone text-black size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Agency</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-coworking.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-home-wifi-bold-duotone text-primary size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Coworking</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-crypto.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i
                                                            class="i-solar-dollar-minimalistic-bold-duotone text-orange-600 size-6"></i>

                                                    </span>
                                                    <div class="flex-grow-1">Crypto</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-marketing.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-blue-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i
                                                            class="i-solar-letter-opened-bold-duotone text-blue-500 size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Marketing</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="nav-item">
                                            <a class="nav-link" href="home-portfolio.html">
                                                <div class="flex items-center -ms-1.5">
                                                    <span
                                                        class="bg-red-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i class="i-solar-wallpaper-bold-duotone text-red-500 size-6"></i>
                                                    </span>
                                                    <div class="flex-grow-1">Portfolio</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                 
                        <li class="nav-item">
                            <div class="hs-dropdown [--trigger:hover] relative">
                                <a href="javascript:void(0);"
                                    class="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                                    Pages
                                    <i class="i-fa6-solid-angle-down ms-2 align-middle"></i>
                                </a>

                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-48 min-w-48 border p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                                    <div class="space-y-0.5">
                         
                                        <div class="nav-item">
                                            <div class="hs-dropdown [--trigger:hover] [--placement:right-start] relative">
                                                <a href="javascript:void(0);" type="button"
                                                    class="nav-link hs-dropdown-toggle after:absolute after:inset-0 after:-end-10">
                                                    Account
                                                    <i class="i-fa6-solid-angle-right ms-auto align-middle"></i>
                                                </a>

                                                <div class="hs-dropdown-menu !ms-2 w-48 min-w-48 z-50 transition-[opacity,margin] mt-2 translate-y-3 duration hs-dropdown-open:translate-y-0 hs-dropdown-open:opacity-100 opacity-0 hidden  bg-white shadow-lg border p-2 space-y-1.5 rounded-lg"
                                                    role="menu" aria-orientation="vertical"
                                                    aria-labelledby="hs-split-dropleft">
                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-dashboard.html">Dashboard</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-settings.html">Settings</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-login.html">Login</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-signup.html">Sign Up</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-forget-password.html">Forget
                                                            Password</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="account-confirm.html">Confirm Account</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="nav-item">
                                            <div class="hs-dropdown [--trigger:hover] [--placement:right-start] relative">
                                                <a href="javascript:void(0);" type="button"
                                                    class="nav-link hs-dropdown-toggle after:absolute after:inset-0 after:-end-10">
                                                    Blog
                                                    <i class="i-fa6-solid-angle-right ms-auto align-middle"></i>
                                                </a>

                                                <div class="hs-dropdown-menu !ms-2 w-48 min-w-48 z-50 transition-[opacity,margin] mt-2 translate-y-3 duration hs-dropdown-open:translate-y-0 hs-dropdown-open:opacity-100 opacity-0 hidden  bg-white shadow-lg border p-2 space-y-1.5 rounded-lg"
                                                    role="menu" aria-orientation="vertical"
                                                    aria-labelledby="hs-split-dropleft">
                                                    <div class="nav-item">
                                                        <a class="nav-link" href="blog.html">Blog</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="blog-post.html">Blog Post</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr class="-mx-2 my-2"/>

                                        <div class="nav-item">
                                            <a class="nav-link" href="company.html">Company</a>
                                        </div>

                  
                                        <div class="nav-item">
                                            <a class="nav-link" href="career.html">Career</a>
                                        </div>

                                        <div class="nav-item">
                                            <a class="nav-link" href="pricing.html">Pricing</a>
                                        </div>

                                        <div class="nav-item">

                                            <div class="hs-dropdown [--trigger:hover] [--placement:right-start] relative">
                                                <a href="javascript:void(0);" type="button"
                                                    class="nav-link hs-dropdown-toggle after:absolute after:inset-0 after:-end-10">
                                                    Portfolio
                                                    <i class="i-fa6-solid-angle-right ms-auto align-middle"></i>
                                                </a>

                                                <div class="hs-dropdown-menu !ms-2 w-48 min-w-48 z-50 transition-[opacity,margin] mt-2 translate-y-3 duration hs-dropdown-open:translate-y-0 hs-dropdown-open:opacity-100 opacity-0 hidden  bg-white shadow-lg border p-2 space-y-1.5 rounded-lg"
                                                    role="menu" aria-orientation="vertical"
                                                    aria-labelledby="hs-split-dropleft">
                                                    <div class="nav-item">
                                                        <a class="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="portfolio-masonry.html">Portfolio
                                                            Masonry</a>
                                                    </div>

                                                    <div class="nav-item">
                                                        <a class="nav-link" href="portfolio-item.html">Portfolio Item</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr class="-mx-2 my-2"/>

             
                                        <div class="nav-item">
                                            <a class="nav-link" href="help.html">Help</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact us</a>
                        </li>
                    </ul>
                </div>

                <div class="lg:hidden flex items-center ms-auto px-2.5">
                    <button type="button" class="py-3 px-4 inline-flex items-center" aria-haspopup="dialog"
                        aria-expanded="false" aria-controls="mobileMenu" data-hs-overlay="#mobileMenu">
                        <i class="i-fa6-solid-bars text-2xl text-default-500"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    <div id="mobileMenu"
        class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e"
        role="dialog" tabindex="-1" aria-labelledby="mobileMenu-label">
        <div>
            <div class="flex flex-col h-full divide-y-2 divide-default-200">
  
                <div class="p-6 flex items-center justify-between">
                    <a href="index.html">
                        <img src={'/'+general.logo} class="h-8" alt="Logo"/>
                    </a>

                    <button type="button"
                        class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Close" data-hs-overlay="#mobileMenu">
                        <span class="sr-only">Close</span>
                        <i class="i-fa6-solid-xmark text-xl"></i>
                    </button>
                </div>

                <div class="p-6 overflow-scroll h-full">
                    <ul class="navbar-nav flex flex-col gap-2 hs-accordion-group">
   
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">Home</a>
                        </li>

                        <li class="nav-item hs-accordion">
                            <a href="javascript:void(0)" class="nav-link hs-accordion-toggle">
                                Landing
                                <i
                                    class="i-fa6-solid-angle-down ms-auto align-middle transition-all hs-accordion-active:rotate-180"></i>
                            </a>

                            <ul
                                class="hs-accordion-content ps-4 hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                <li class="nav-item mt-2">
                                    <a class="nav-link" href="home-app.html">App</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-saas.html">Saas Modern</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-saas2.html">Saas Classic</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-startup.html">Startup</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-software.html">Software</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-agency.html">Agency</a>
                                </li>

                                <li class="nav-item">

                                    <a class="nav-link" href="home-coworking.html">Coworking</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-crypto.html">Crypto</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-marketing.html">Marketing</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="home-portfolio.html">Portfolio</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item hs-accordion">
                            <a href="javascript:void(0)" class="nav-link hs-accordion-toggle">
                                Pages <i
                                    class="i-fa6-solid-angle-down ms-auto align-middle transition-all hs-accordion-active:rotate-180"></i>
                            </a>

                            <ul
                                class="hs-accordion-content ps-4 hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                <li class="nav-item mt-2">
                                    <a class="nav-link" href="company.html">Company</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="career.html">Career</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="pricing.html">Pricing</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="help.html">Help</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item hs-accordion">
                            <a href="javascript:void(0)" class="nav-link hs-accordion-toggle">
                                Blog Page <i
                                    class="i-fa6-solid-angle-down ms-auto align-middle transition-all hs-accordion-active:rotate-180"></i>
                            </a>

                            <ul
                                class="hs-accordion-content ps-4 hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                <li class="nav-item mt-2">
                                    <a class="nav-link" href="blog.html">Blog</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="blog-post.html">Blog Post</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item hs-accordion">
                            <a href="javascript:void(0)" class="nav-link hs-accordion-toggle">
                                Portfolio <i
                                    class="i-fa6-solid-angle-down ms-auto align-middle transition-all hs-accordion-active:rotate-180"></i>
                            </a>

                            <ul
                                class="hs-accordion-content ps-4 hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                <li class="nav-item mt-2">
                                    <a class="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="portfolio-masonry.html">Portfolio Masonry</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="portfolio-item.html">Portfolio Item</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="account-confirm.html">Confirm Account</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item hs-accordion">
                            <a href="javascript:void(0)" class="nav-link hs-accordion-toggle">
                                Account <i
                                    class="i-fa6-solid-angle-down ms-auto align-middle transition-all hs-accordion-active:rotate-180"></i>
                            </a>

                            <ul
                                class="hs-accordion-content ps-4 hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                <li class="nav-item mt-2">
                                    <a class="nav-link" href="account-login.html">Login</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="account-signup.html">Sign Up</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="account-forget-password.html">Forget Password</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="account-confirm.html">Confirm Account</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact us</a>
                        </li>
                    </ul>
                </div>

                <div class="p-6 flex items-center justify-center">
                    <a href="https://1.envato.market/prompt-tailwind" target="_blank"
                        class="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">Download</a>
                </div>
            </div>
        </div>
    </div>

    <section class="bg-gradient-to-t from-default-500/10 relative">

        <section class="relative pt-44 pb-36">
            <div class="container">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">

                    <div class="order-2 lg:order-1" dangerouslySetInnerHTML={{
                                            __html: general.overview,
                                        }}>
                        
                    </div>

                    <div class="order-1 lg:order-2">
                        <div class="relative">

                            <div class="hidden sm:block">
                                <div
                                    class="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8">
                                </div>
                                <div
                                    class="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45">
                                </div>
                            </div>

                            <div id="swiper_one" class="swiper border-[6px] border-white bg-white 2xl:w-[140%]"
                                >
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <a href="#"
                                                class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                                                <i class="i-tabler-player-play-filled size-5 text-white"></i>
                                            </a>
                                        </div>
                                        <img src={'/'+general.banner} alt="saas1"
                                            class="w-full h-full rounded-md"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div class="absolute bottom-0 inset-x-0 hidden sm:block">
            <img src="assets/images/shapes/white-wave.svg" alt="white-wave-svg"
                class="w-full -scale-x-100 -scale-y-100"/>
        </div>

    </section>

    <section class="overflow-hidden">
        <div class="xl:py-24 py-16">
            <div class="container">

                <div class="text-center">
                    <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
                    <h1 class="text-3xl/tight font-medium mt-3 mb-4">Better Management. Better Performance</h1>
                    <p class="text-default-500">Start working with <span class="text-primary">Prompt</span> to manage
                        your workforce better</p>
                </div>

                <div class="xl:pt-16 xl:pb-28 py-16">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">

                        <div class="relative">
                            <div class="hidden sm:block">
                                <div
                                    class="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0">
                                </div>
                                <div
                                    class="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8">
                                </div>
                            </div>
                            <img src="assets/images/hero/saas1.png" alt="saas1" data-aos="fade-right"
                                data-aos-duration="400"/>
                        </div>

                        <div class="lg:ms-24">
                            <div class="hs-accordion-group">

                                <div class="hs-accordion active">
                                    <button
                                        class="hs-accordion-toggle active pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition-all hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                                        <div
                                            class="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                            <span class="i-solar-shield-user-bold-duotone size-6 text-blue-500"></span>
                                        </div>
                                        <h1 class="font-medium mb-4 mt-2">Improve Employee Experience</h1>
                                    </button>

                                    <div
                                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ps-16">
                                        <p class="text-default-700 dark:text-default-300">
                                            Before we dive into why companies must invest in employee experience (EX),
                                            it’s
                                            important to understand what this concept entails.
                                        </p>
                                        <div class="mt-7 flex items-center">
                                            <a href="#" class="text-primary flex items-center">Learn more
                                                <i class="i-fa6-solid-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-b my-6"></div>

                                <div class="hs-accordion">
                                    <button
                                        class="hs-accordion-toggle pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                                        <div
                                            class="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                            <span class="i-solar-user-plus-bold-duotone size-6 text-green-500"></span>
                                        </div>
                                        <h1 class="font-medium mb-4 mt-2">Hiring & Onboarding</h1>
                                    </button>

                                    <div
                                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 ps-16">
                                        <p class="text-default-700 dark:text-default-300">
                                            Post your job, interview candidates and make offers, all on Prompt. Start
                                            hiring
                                            today.
                                        </p>
                                        <div class="mt-7 flex items-center">
                                            <a href="#" class="text-primary flex items-center">
                                                Learn more <i class="i-fa6-solid-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-b my-6"></div>

                                <div class="hs-accordion">
                                    <button
                                        class="hs-accordion-toggle pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                                        <div
                                            class="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                                            <span
                                                class="i-solar-chart-square-bold-duotone size-6 text-orange-500"></span>
                                        </div>
                                        <h1 class="font-medium mb-4 mt-2">People Data & Analytics</h1>
                                    </button>
                                    <div
                                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 ps-16">
                                        <p class="text-default-700 dark:text-default-300">
                                            Finding committed employees is one of public and private organizations’ top
                                            priorities.
                                        </p>
                                        <div class="mt-7 flex items-center">
                                            <a href="#" class="text-primary flex items-center">
                                                Learn more <i class="i-fa6-solid-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div class="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
                        <div class="order-2 lg:order-1 2xl:w-9/12">

                            <div class="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                                <span class="i-solar-star-circle-bold-duotone size-7 text-primary"></span>
                            </div>

                            <h1 class="text-3xl/tight font-medium mt-6 mb-4">Smart Payroll. Paying your people couldn't
                                be easier</h1>
                            <p class="text-default-500">You can modify your pages with drag-dropping , can import demos
                                with just ” One Click” and can modify theme setting easy-to-use options panel.</p>
                            <div class="flex items-center mt-12">
                                <a href="#" class="text-primary flex items-center">Learn more <i class="i-fa6-solid-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>

                        <div class="relative order-1 lg:order-2">
                            <div class="hidden sm:block">
                                <div
                                    class="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8">
                                </div>
                                <div
                                    class="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8">
                                </div>
                            </div>

                            <img src="assets/images/hero/saas2.png" alt="saas2" data-aos="fade-left"
                                data-aos-duration="400"/>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div class="xl:py-24 py-16">
            <div class="container">

                <div class="text-center">
                    <h1 class="text-2xl font-medium">Any many more powerful features</h1>
                </div>

                <div class="py-16">
                    <div class="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                        <div class="order-1">
                            <div class="flex flex-col gap-5">
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Hire and Retain Top Talent
                                </p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Team Management</p>
                            </div>
                        </div>

                        <div class="order-3 xl:order-2">
                            <div class="flex flex-col gap-5">
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Stay Compliant</p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Improve Productivity</p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Improve Experience</p>
                            </div>
                        </div>

                        <div class="order-4 xl:order-3">
                            <div class="flex flex-col gap-5">
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Self-service Time Tracking
                                </p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Performance Management</p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Expert HR</p>
                            </div>
                        </div>

                        <div class="order-2 xl:order-4">
                            <div class="flex flex-col gap-5">
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> New Hire Checklist</p>
                                <p class="flex items-center gap-3"> <i
                                        class="i-fa6-solid-check text-green-500 text-xl"></i> Tax Calculator</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="flex items-center justify-center mx-auto">
                    <a href="#"
                        class="bg-primary flex items-center text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3">Sign
                        Up Now <i class="i-fa6-solid-arrow-right ms-2"></i> </a>
                </button>

            </div>
        </div>

    </section>

    <section class="bg-gradient-to-r from-default-100/70 to-default-100 relative xl:py-24 py-16">

        <div class="absolute top-0 inset-x-0 hidden sm:block">
            <img src="assets/images/shapes/white-wave.svg" alt="svg" class="w-full -scale-x-100"/>
        </div>

        <div class="py-5">
            <div class="container">

                <div class="text-center">
                    <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Clients</span>
                    <h1 class="text-3xl/tight font-medium mt-3 mb-4">The smart people management you need</h1>
                    <p class="text-default-500">21,000+ organizations trust <span class="text-primary">Prompt</span> to
                        drive perfomance & engagement</p>
                </div>

                <div class="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
                    <div>
                        <img src="assets/images/brands/amazon.svg" class="h-8"/>
                    </div>
                    <div>
                        <img src="assets/images/brands/google.svg" class="h-8"/>
                    </div>
                    <div>
                        <img src="assets/images/brands/paypal.svg" class="h-8"/>
                    </div>
                    <div>
                        <img src="assets/images/brands/spotify.svg" class="h-8"/>
                    </div>
                    <div>
                        <img src="assets/images/brands/shopify.svg" class="h-8"/>
                    </div>
                </div>

            </div>
        </div>

    </section>

    <section class="py-16 sm:py-24 overflow-x-hidden">
        <div class="container">

            <div class="grid xl:grid-cols-4 grid-cols-3 gap-6">
                <div class="col-span-3 lg:col-span-1">
                    <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Feedback</span>
                    <h1 class="text-3xl/tight font-medium mt-3 mb-4">What people say</h1>
                    <p class="text-default-500">Few valuables words from our customers</p>

                    <div class="flex gap-4 mt-10">
                        <div class="button-prev text-xl transition-all duration-300 hover:text-primary"><i
                                class="i-fa6-solid-arrow-left"></i></div>
                        <div class="button-next text-xl transition-all duration-300 hover:text-primary"><i
                                class="i-fa6-solid-arrow-right"></i></div>
                    </div>
                </div>

                <div class="col-span-3 lg:col-span-2 xl:col-span-3">
                    <div class="relative">

                        <div class="hidden sm:block">
                            <div
                                class="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8">
                            </div>
                            <div
                                class="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8">
                            </div>
                        </div>

                        <div id="swiper_one" class="swiper relative">
                            <div class="swiper-wrapper z-10">


                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="i-fa6-solid-quote-left text-default-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I have
                                        tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-default-200 w-full my-7"></div>
                                    <div class="flex items-center gap-2">
                                        <img src="assets/images/avatars/img-1.jpg" alt="avatar"
                                            class="h-10 w-10 rounded-full"/>
                                        <div>
                                            <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                            <p class="text-default-500 text-xs">Senior Project Manager</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="i-fa6-solid-quote-left text-default-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I have
                                        tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-default-200 w-full my-7"></div>
                                    <div class="flex items-center gap-2">
                                        <img src="assets/images/avatars/img-2.jpg" alt="avatar"
                                            class="h-10 w-10 rounded-full"/>
                                        <div>
                                            <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                            <p class="text-default-500 text-xs">Senior Project Manager</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="i-fa6-solid-quote-left text-default-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I have
                                        tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-default-200 w-full my-7"></div>
                                    <div class="flex items-center gap-2">
                                        <img src="assets/images/avatars/img-3.jpg" alt="avatar"
                                            class="h-10 w-10 rounded-full"/>
                                        <div>
                                            <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                            <p class="text-default-500 text-xs">Senior Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gradient-to-r from-default-100/70 to-default-100 relative py-16 sm:py-24">

        <div class="absolute top-0 inset-x-0 hidden sm:block">
            {/* <img src="assets/images/shapes/white-wave.svg" alt="svg" class="w-full -scale-x-100"/> */}
        </div>

        <div class="py-5">
            <div class="container relative">

                <div class="text-center">
                    <h1 class="text-3xl/tight font-medium mb-4">Pricing</h1>
                    <p class="text-default-500">Pricing that <span class="text-primary">works </span> for everyone</p>
                </div>

                <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">

                    <div>
                        <div
                            class="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                            <div class="border border-default-300 bg-white rounded w-full h-full text-center p-5">
                                <span class="text-lg text-primary">Starter</span>
                                <h1 class="text-3xl/tight font-semibold mt-3"><sup
                                        class="text-default-500 text-sm font-normal">$</sup> 49 <sub
                                        class="text-default-500 text-sm font-normal">/month</sub></h1>
                                <div class="border-b border-default-200 w-full my-7"></div>
                                <div>
                                    <div class="flex flex-col gap-4">
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Up to 600 minutes
                                            usage time</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Use for personal
                                            only</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Add up to 10
                                            attendees</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Technical support
                                            via email</p>
                                    </div>
                                    <div class="flex mt-[120px]">
                                        <a href="#"
                                            class="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300">Purchase
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            class="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                            <div class="border border-default-300 bg-white rounded w-full h-full text-center p-5">
                                <span class="text-lg text-primary">Professional</span>
                                <h1 class="text-3xl/tight font-semibold mt-3"><sup
                                        class="text-default-500 text-sm font-normal">$</sup> 99 <sub
                                        class="text-default-500 text-sm font-normal">/month</sub></h1>
                                <div class="border-b border-default-200 w-full my-7"></div>
                                <div>
                                    <div class="flex flex-col gap-4">
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Up to 6000 minutes
                                            usage time</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Use for personal or
                                            a commercial</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Add up to 100
                                            attendees</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Up to 5 teams</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Technical support
                                            via email</p>
                                    </div>
                                    <div class="flex mt-20">
                                        <a href="#"
                                            class="bg-primary text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 hover:border hover:border-primary transition-all duration-300">Purchase
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            class="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                            <div class="border border-default-300 bg-white rounded w-full h-full text-center p-5">
                                <span class="text-lg text-primary">Enterprise</span>
                                <h1 class="text-3xl/tight font-semibold mt-3"><sup
                                        class="text-default-500 text-sm font-normal">$</sup> 599 <sub
                                        class="text-default-500 text-sm font-normal">/month</sub></h1>
                                <div class="border-b border-default-200 w-full my-7"></div>
                                <div>
                                    <div class="flex flex-col gap-4">
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Unlimited usage
                                            time</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Use for personal or
                                            a commercial</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Add Unlimited
                                            attendees</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>24x7 Technical
                                            support via phone</p>
                                        <p class="flex items-center text-default-600 gap-4"><i
                                                class="i-fa6-solid-check text-green-500 text-lg"></i>Technical support
                                            via email</p>
                                    </div>
                                    <div class="flex mt-20">
                                        <a href="#"
                                            class="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300">Purchase
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 hidden sm:block">
            {/* <img src="assets/images/shapes/white-wave.svg" alt="svg" class="w-full scale-x-100 -scale-y-100"/> */}
        </div>

    </section>

    <footer class="bg-default-100">
        <div class="container">
            <div class="grid xl:grid-cols-5 gap-6 py-12">
                <div class="xl:col-span-2">
                    <a href="index.html">
                        <img src="assets/images/logo-dark.png" class="h-8"/>
                    </a>
                    <p class="text-default-500/80 mt-5 lg:w-4/5">Make your web application stand out with high-quality
                        landing page</p>
                </div>
                <div class="xl:col-span-3 col-span-4">
                    <div class="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">Platform</h5>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Demo</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Pricing</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Integrations</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Status</a></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">Knowledge Base</h5>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Blog</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Help Center</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Sales Tools catalog</a>
                                </div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">API</a></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">Company</h5>
                                <div class="text-default-500/80"><a href="javascript:void(0);">About us</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Career</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Contact Us</a></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">Legal</h5>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Usage Policy</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Privacy Policy</a></div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Terms of Service</a>
                                </div>
                                <div class="text-default-500/80"><a href="javascript:void(0);">Trust</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t py-6">
                <div class="grid sm:grid-cols-2 text-center sm:text-start gap-6">
                    <div>
                        <p class="text-default-500/80 text-sm">
                            <script>document.write(new Date().getFullYear())</script>© Prompt. All rights reserved.
                            Crafted
                            by <a href="#" class="text-default-800 hover:text-primary transition-all">Coderthemes</a>
                        </p>
                    </div>
                    <div class="flex justify-center sm:justify-end gap-7">
                        <span>
                            <a href="#">
                                <i class="i-tabler-brand-facebook size-5 hover:text-primary transition-all"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i class="i-tabler-brand-x size-5 hover:text-primary transition-all"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i class="i-tabler-brand-instagram size-5 hover:text-primary transition-all"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <button data-toggle="back-to-top"
        class="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center">
        <i class="i-fa6-solid-arrow-up text-base"></i>
    </button>
    <script src='/front/js/aos.js'></script>
    <script src='/front/js/head.js'></script>
    <script src='/front/js/index.js'></script>
    <script src='/front/js/swiper-bundle.min.js'></script>
    <script src='/front/js/theme.js'></script>
        </>
    );
}
