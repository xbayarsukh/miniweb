import { Helmet } from "react-helmet";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import { DateTime } from "luxon";

export default function AuthenticatedLayout({
    header = "Dashboard",
    children,
}) {
    const user = usePage().props.auth.user;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [isOpenSidenav, setIsOpenSidenav] = useState(false);
    const [difference, setDifference] = useState({ days: 0, months: 0 });

    useEffect(() => {
        // Check if the current route matches any of the specified ones
        const isMatchingRoute =
            route().current("admin.about") ||
            route().current("admin.about.*") ||
            route().current("admin.posts") ||
            route().current("admin.posts.*") ||
            route().current("admin.services") ||
            route().current("admin.services.*") ||
            route().current("admin.portfolios") ||
            route().current("admin.portfolios.*") ||
            route().current("admin.partners") ||
            route().current("admin.partners.*") ||
            route().current("admin.faqs") ||
            route().current("admin.faqs.*") ||
            route().current("admin.labels") ||
            route().current("admin.labels.*") ||
            route().current("admin.orders") ||
            route().current("admin.orders.*");

        // Set the state based on whether the route matches
        setIsOpenCollapse(isMatchingRoute);

        if (user?.expire_date) {
            // Parse the expire date and current date
            const formattedExpireDate = user.expire_date.replace(" ", "T");

            // Parse the date in ISO format
            const date1 = DateTime.fromISO(formattedExpireDate, {
                zone: "utc",
            });
            const date2 = DateTime.now();

            // Check if both dates are valid
            if (!date1.isValid || !date2.isValid) {
                console.error("Invalid date(s) encountered.");
                return;
            }

            // Calculate the difference (current date to expire date)
            const diffInDays = Math.floor(date1.diff(date2, "days").days);
            const diffInMonths = Math.floor(date1.diff(date2, "months").months);

            setDifference({
                days: diffInDays,
                months: diffInMonths,
            });
        }
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const toggleCollapse = () => {
        setIsOpenCollapse(!isOpenCollapse);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidenav = () => {
        setIsOpenSidenav(!isOpenSidenav);
        console.log(isOpenSidenav);
    };

    const handleLogout = async (event) => {
        event.preventDefault(); // Prevent form submission
        console.log("Logout clicked");

        try {
            await axios.post(
                "/logout",
                {},
                {
                    headers: {
                        "X-CSRF-TOKEN": document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute("content"),
                    },
                }
            );
            window.location.href = "/"; // Redirect to home or login page
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/assets/img/apple-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/assets/img/favicon.png"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
                    rel="stylesheet"
                />

                <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
                <link
                    href="/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5"
                    rel="stylesheet"
                />
                <script
                    defer
                    data-site="YOUR_DOMAIN_HERE"
                    src="https://api.nepcha.com/js/nepcha-analytics.js"
                ></script>
                <link rel="stylesheet" href="https://flowbite.com/application-ui/demo/app.css"></link>
            </Helmet>

            <aside
                className={
                    "max-w-fit ease-nav-brand z-990 fixed inset-y-0 my-3 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ps" +
                    (isOpenSidenav ? " translate-x-0 shadow-soft-xl" : "")
                }
            >
                <div className="h-19.5">
                    <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"></i>
                    <a
                        className="px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 flex flex-row items-center"
                        href="/admin"
                    >
                        <ApplicationLogo height="40px"></ApplicationLogo>
                        <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                            MiniWeb Dashboard
                        </span>
                    </a>
                </div>

                <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

                <div className="items-center block w-auto max-h-screen overflow-auto !min-h-sidenav pb-12 grow basis-full pr-3">
                    <ul className="flex flex-col pl-0 mb-0">
                        <li className="mt-0.5 w-full">
                            <a
                                className={
                                    "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                    (route().current("dashboard")
                                        ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                        : "")
                                }
                                href={route("dashboard")}
                            >
                                <div
                                    className={
                                        (route().current("dashboard")
                                            ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                            : "color-black") +
                                        " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                    }
                                >
                                    <svg
                                        width="12px"
                                        height="12px"
                                        viewBox="0 0 45 40"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <title>shop</title>
                                        <g
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g
                                                transform="translate(-1716.000000, -439.000000)"
                                                fill="#FFFFFF"
                                                fillRule="nonzero"
                                            >
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(0.000000, 148.000000)">
                                                        <path
                                                            className={
                                                                (route().current(
                                                                    "dashboard"
                                                                )
                                                                    ? ""
                                                                    : "fill-slate-800 ") +
                                                                "opacity-60"
                                                            }
                                                            d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                                                        ></path>
                                                        <path
                                                            className={
                                                                route().current(
                                                                    "dashboard"
                                                                )
                                                                    ? ""
                                                                    : "fill-slate-800 "
                                                            }
                                                            d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        {user.role == 0 ? (
                            <>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.users")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.users")}
                                    >
                                        <div
                                            className={
                                                (route().current("admin.users")
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 42 42"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>office</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1869.000000, -293.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(153.000000, 2.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.users"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.users"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Users
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.billing")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.billing")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.billing"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>credit-card</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1716.000000, -439.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(0.000000, 148.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.billing"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.billing"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Billing
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.package")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.package")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.package"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>credit-card</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1716.000000, -439.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(0.000000, 148.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.package"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.package"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Package
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.template")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.template")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.template"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>credit-card</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1716.000000, -439.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(0.000000, 148.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.template"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.template"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Template
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    {/* Collapsible Header */}
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.about") ||
                                            route().current("admin.about.*") ||
                                            route().current("admin.posts") ||
                                            route().current("admin.posts.*") ||
                                            route().current("admin.services") ||
                                            route().current(
                                                "admin.services.*"
                                            ) ||
                                            route().current(
                                                "admin.portfolios"
                                            ) ||
                                            route().current(
                                                "admin.portfolios.*"
                                            ) ||
                                            route().current("admin.partners") ||
                                            route().current(
                                                "admin.partners.*"
                                            ) ||
                                            route().current("admin.faqs") ||
                                            route().current("admin.faqs.*") ||
                                            route().current("admin.labels")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        onClick={toggleCollapse}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.about"
                                                ) ||
                                                route().current(
                                                    "admin.about.*"
                                                ) ||
                                                route().current(
                                                    "admin.posts"
                                                ) ||
                                                route().current(
                                                    "admin.posts.*"
                                                ) ||
                                                route().current(
                                                    "admin.services"
                                                ) ||
                                                route().current(
                                                    "admin.services.*"
                                                ) ||
                                                route().current(
                                                    "admin.portfolios"
                                                ) ||
                                                route().current(
                                                    "admin.portfolios.*"
                                                ) ||
                                                route().current(
                                                    "admin.partners"
                                                ) ||
                                                route().current(
                                                    "admin.partners.*"
                                                ) ||
                                                route().current("admin.faqs") ||
                                                route().current(
                                                    "admin.faqs.*"
                                                ) ||
                                                route().current("admin.labels")
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 42 42"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>box-3d-50</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-2319.000000, -291.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(603.000000, 0.000000)">
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.about"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.about.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.labels"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.about"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.about.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.labels"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.about"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.about.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.labels"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Website Settings
                                        </span>
                                    </a>

                                    {/* Collapsible Content */}
                                    <div
                                        className={`py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors ${
                                            isOpenCollapse
                                                ? "max-h-screen"
                                                : "max-h-0 hidden"
                                        }`}
                                    >
                                        <div className="p-1 w-full flex flex-col">
                                            <a
                                                href={route("admin.about")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.about"
                                                    ) ||
                                                    route().current(
                                                        "admin.about.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Бидний тухай
                                            </a>
                                            <a
                                                href={route("admin.posts")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.posts"
                                                    ) ||
                                                    route().current(
                                                        "admin.posts.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Мэдээ
                                            </a>
                                            <a
                                                href={route("admin.services")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.services"
                                                    ) ||
                                                    route().current(
                                                        "admin.services.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Үйлчилгээ
                                            </a>
                                            <a
                                                href={route("admin.portfolios")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.portfolios"
                                                    ) ||
                                                    route().current(
                                                        "admin.portfolios.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Portfolio
                                            </a>
                                            <a
                                                href={route("admin.partners")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.partners"
                                                    ) ||
                                                    route().current(
                                                        "admin.partners.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Хамтрагч байгууллагууд
                                            </a>
                                            <a
                                                href={route("admin.faqs")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.faqs"
                                                    ) ||
                                                    route().current(
                                                        "admin.faqs.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Түгээмэл асуулт хариулт
                                            </a>
                                            <a
                                                href={route("admin.labels")}
                                                className={
                                                    "p-1 text-black text-[13px]" +
                                                    (route().current(
                                                        "admin.labels"
                                                    ) ||
                                                    route().current(
                                                        "admin.labels.*"
                                                    )
                                                        ? " font-bold"
                                                        : " font-normal")
                                                }
                                            >
                                                -&nbsp; Тохиргоо
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.setting")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.setting")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.setting"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>settings</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-2020.000000, -442.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(304.000000, 151.000000)">
                                                                <polygon
                                                                    className={
                                                                        (route().current(
                                                                            "admin.setting"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                                                ></polygon>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.setting"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.setting"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            System Settings
                                        </span>
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.about") ||
                                            route().current("admin.about.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.about")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.about"
                                                ) ||
                                                route().current("admin.about.*")
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 42 42"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>office</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1869.000000, -293.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(153.000000, 2.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.about"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.about.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.about"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.about.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Бидний тухай
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.posts") ||
                                            route().current("admin.posts.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.posts")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.posts"
                                                ) ||
                                                route().current("admin.posts.*")
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>credit-card</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1716.000000, -439.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(0.000000, 148.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.posts"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.posts"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.posts.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Мэдээ
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current(
                                                "admin.services"
                                            ) ||
                                            route().current("admin.services.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.services")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.services"
                                                ) ||
                                                route().current(
                                                    "admin.services.*"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>credit-card</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1716.000000, -439.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(0.000000, 148.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.services"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.services"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.services.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Үйлчилгээ
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current(
                                                "admin.portfolios"
                                            ) ||
                                            route().current(
                                                "admin.portfolios.*"
                                            )
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.portfolios")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.portfolios"
                                                ) ||
                                                route().current(
                                                    "admin.portfolios.*"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>portfolios</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-2020.000000, -442.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(304.000000, 151.000000)">
                                                                <polygon
                                                                    className={
                                                                        (route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                                                ></polygon>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.portfolios"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.portfolios.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Portfolio
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current(
                                                "admin.partners"
                                            ) ||
                                            route().current("admin.partners.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.partners")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.partners"
                                                ) ||
                                                route().current(
                                                    "admin.partners.*"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>partners</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-2020.000000, -442.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(304.000000, 151.000000)">
                                                                <polygon
                                                                    className={
                                                                        (route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                                                ></polygon>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.partners"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.partners.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Хамтрагч байгууллагууд
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.faqs") ||
                                            route().current("admin.faqs.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.faqs")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.faqs"
                                                ) ||
                                                route().current("admin.faqs.*")
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 43 36"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>faqs</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-2020.000000, -442.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(304.000000, 151.000000)">
                                                                <polygon
                                                                    className={
                                                                        (route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                                                ></polygon>
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.faqs"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.faqs.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Түгээмэл асуулт хариулт
                                        </span>
                                    </a>
                                </li>

                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.orders") ||
                                            route().current("admin.orders.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.orders")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.orders"
                                                ) ||
                                                route().current(
                                                    "admin.orders.*"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 42 42"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>office</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1869.000000, -293.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(153.000000, 2.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.orders"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.orders.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.orders"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.orders.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Төлбөрийн түүх
                                        </span>
                                    </a>
                                </li>

                                <li className="mt-0.5 w-full">
                                    <a
                                        className={
                                            "py-2.7 text-sm ease-nav-brand my-0 ml-4 flex items-center whitespace-nowrap px-4" +
                                            (route().current("admin.labels") ||
                                            route().current("admin.labels.*")
                                                ? " shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700 transition-colors"
                                                : "")
                                        }
                                        href={route("admin.labels")}
                                    >
                                        <div
                                            className={
                                                (route().current(
                                                    "admin.labels"
                                                ) ||
                                                route().current(
                                                    "admin.labels.*"
                                                )
                                                    ? "bg-gradient-to-tl from-purple-700 to-pink-500"
                                                    : "color-black") +
                                                " shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
                                            }
                                        >
                                            <svg
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 42 42"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>office</title>
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g
                                                        transform="translate(-1869.000000, -293.000000)"
                                                        fill="#FFFFFF"
                                                        fillRule="nonzero"
                                                    >
                                                        <g transform="translate(1716.000000, 291.000000)">
                                                            <g transform="translate(153.000000, 2.000000)">
                                                                <path
                                                                    className={
                                                                        (route().current(
                                                                            "admin.labels"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.labels.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 ") +
                                                                        "opacity-60"
                                                                    }
                                                                    d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                                ></path>
                                                                <path
                                                                    className={
                                                                        route().current(
                                                                            "admin.labels"
                                                                        ) ||
                                                                        route().current(
                                                                            "admin.labels.*"
                                                                        )
                                                                            ? ""
                                                                            : "fill-slate-800 "
                                                                    }
                                                                    d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                            Тохиргоо
                                        </span>
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {user.role == 1 && (
                    <div className="absolute bottom-0 w-[calc(100%-3rem)] mx-4">
                        <a
                            className="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
                            target="_blank"
                            href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree"
                        >
                            {difference.months == 0
                                ? difference.days + " хоногийн"
                                : difference.months == 1
                                ? difference.months +
                                  " сар " +
                                  difference.days +
                                  " хоногийн"
                                : difference.months + " сарын"}{" "}
                            дараа дуусна
                        </a>
                    </div>
                )}
            </aside>

            <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
                <nav
                    className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                    navbar-scroll="true"
                >
                    <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                        <nav>
                            <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                                <li className="text-sm leading-normal">
                                    <a
                                        className="opacity-50 text-slate-700"
                                        href="javascript:;"
                                    >
                                        Pages
                                    </a>
                                </li>
                                <li
                                    className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                                    aria-current="page"
                                >
                                    {header}
                                </li>
                            </ol>
                            <h6 className="mb-0 font-bold capitalize">
                                {header}
                            </h6>
                        </nav>

                        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto justify-end">
                            <ul className="flex flex-row pl-0 mb-0 list-none md-max:w-full">
                                <li className="relative flex items-center pr-2">
                                    <div className="flex items-center">
                                        <div className="relative inline-block text-left">
                                            {/* Avatar Button */}
                                            <button
                                                onClick={toggleDropdown}
                                                className="flex items-center focus:outline-none"
                                            >
                                                <div className="flex flex-row">
                                                    <img
                                                        src="/assets/img/team-2.jpg"
                                                        alt="Avatar"
                                                        className="w-11 h-11 rounded-full"
                                                    />
                                                    <div className="flex flex-col text-[12px] justify-center items-start mx-2">
                                                        <div className="font-bold">
                                                            {user.name}
                                                        </div>
                                                        <div className="text-gray-600 font-bold text-[10px]">
                                                            Admin
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>

                                            {/* Dropdown Menu */}
                                            {isOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                                                    <ul className="py-1">
                                                        <li>
                                                            <a
                                                                href={route(
                                                                    "profile.edit"
                                                                )}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Profile
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={
                                                                    handleLogout
                                                                }
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Logout
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center pl-4 xl:hidden">
                                    <button
                                        onClick={toggleSidenav}
                                        className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                                        sidenav-trigger=""
                                    >
                                        <div className="w-4.5 overflow-hidden">
                                            <i
                                                className={
                                                    "ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all" +
                                                    (isOpenSidenav
                                                        ? " translate-x-[5px]"
                                                        : "")
                                                }
                                            ></i>
                                            <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            <i
                                                className={
                                                    "ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all" +
                                                    (isOpenSidenav
                                                        ? " translate-x-[5px]"
                                                        : "")
                                                }
                                            ></i>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {children}
            </main>

            <script src="/assets/js/plugins/chartjs.min.js" async></script>

            <script
                src="/assets/js/plugins/perfect-scrollbar.min.js"
                async
            ></script>

            <script
                async
                defer
                src="https://buttons.github.io/buttons.js"
            ></script>

            <script
                src="/assets/js/soft-ui-dashboard-tailwind.js?v=1.0.5"
                async
            ></script>
        </>
    );
}
