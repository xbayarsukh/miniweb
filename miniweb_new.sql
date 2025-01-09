-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2025 at 10:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniweb_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(455) NOT NULL,
  `content` longtext DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'йужйыбөйы', '<p>&nbsp;бөй ыбөшйыбө йыбөйыбө йыбөйышбөй ыбөйшыүбөгмйыби өйыбшөйыб өийыбөйыб ө</p>', 2, '2024-12-27 11:35:40', '2024-12-27 11:35:40');

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `overview` longtext DEFAULT NULL,
  `banner` varchar(455) DEFAULT NULL,
  `vision` varchar(191) DEFAULT NULL,
  `misson` varchar(191) DEFAULT NULL,
  `login_background` varchar(191) DEFAULT NULL,
  `options` longtext DEFAULT '{"about_title":"\\u0411\\u0438\\u0434\\u043d\\u0438\\u0439 \\u0442\\u0443\\u0445\\u0430\\u0439","about_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440","news_title":"\\u041c\\u044d\\u0434\\u044d\\u044d \\u043c\\u044d\\u0434\\u044d\\u044d\\u043b\\u044d\\u043b","news_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440","service_title":"\\u04ae\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d","service_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440","portfolio_title":"\\u0422\\u04e9\\u0441\\u04e9\\u043b","portfolio_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440","partner_title":"\\u0425\\u0430\\u043c\\u0442\\u0440\\u0430\\u0433\\u0447 \\u0431\\u0430\\u0439\\u0433\\u0443\\u0443\\u043b\\u043b\\u0430\\u0433\\u0443\\u0443\\u0434","partner_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440","faq_title":"\\u0422\\u04af\\u0433\\u044d\\u044d\\u043c\\u044d\\u043b \\u0430\\u0441\\u0443\\u0443\\u043b\\u0442 \\u0445\\u0430\\u0440\\u0438\\u0443\\u043b\\u0442","faq_desc":"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440"}',
  `phone` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `title` varchar(191) DEFAULT NULL,
  `favicon` varchar(191) DEFAULT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `overview`, `banner`, `vision`, `misson`, `login_background`, `options`, `phone`, `email`, `address`, `title`, `favicon`, `logo`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '<div class=\"text-center sm:text-start\"><h1 class=\"text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7\">The best way to<span class=\"relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0\">showcase</span>your saas</h1><p class=\"sm:text-lg text-default-500\">Make your saas application stand out with high-quality landing page designed and developed by professional</p><div class=\"flex gap-3 mt-16\"><input class=\"inline-block text-sm border border-default-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 \" id=\"Email\" aria-describedby=\"emailHelp\" placeholder=\"Your Email\" type=\"email\"><button for=\"Email\" class=\"bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3\">Sign Up</button></div><div class=\"flex flex-wrap items-center gap-5 mt-5\"><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">Free 14-day Demo</p></div><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">No credit card needed</p></div></div></div>', 'uploads/banners/1735203143.jpg', NULL, NULL, NULL, '{\"about_title\":\"\\u0411\\u0438\\u0434\\u043d\\u0438\\u0439 \\u0442\\u0443\\u0445\\u0430\\u0439\",\"about_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"news_title\":\"\\u041c\\u044d\\u0434\\u044d\\u044d \\u043c\\u044d\\u0434\\u044d\\u044d\\u043b\\u044d\\u043b\",\"news_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"service_title\":\"\\u04ae\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\",\"service_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"portfolio_title\":\"\\u0422\\u04e9\\u0441\\u04e9\\u043b\",\"portfolio_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"partner_title\":\"\\u0425\\u0430\\u043c\\u0442\\u0440\\u0430\\u0433\\u0447 \\u0431\\u0430\\u0439\\u0433\\u0443\\u0443\\u043b\\u043b\\u0430\\u0433\\u0443\\u0443\\u0434\",\"partner_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"faq_title\":\"\\u0422\\u04af\\u0433\\u044d\\u044d\\u043c\\u044d\\u043b \\u0430\\u0441\\u0443\\u0443\\u043b\\u0442 \\u0445\\u0430\\u0440\\u0438\\u0443\\u043b\\u0442\",\"faq_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\"}', NULL, NULL, NULL, 'hi', 'uploads/favicons/1735182715.png', 'uploads/logos/1735203143.jpg', 1, '2024-12-18 23:31:01', '2024-12-26 00:52:23'),
(2, '<h1 class=\"max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white\"><span>\r\n                            Building digital <br>\r\n                            products &amp; brands</span>.\r\n                        </h1>\r\n                        <p class=\"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400\">\r\n                            This free and open-source landing page template was\r\n                            built using the utility classes from{\" \"}\r\n                            <a href=\"#\" target=\"_blank\" class=\"hover:underline\">\r\n                                Tailwind CSS\r\n                            </a>{\" \"}\r\n                            and based on the components from the{\" \"}\r\n                            <a href=\"#/\" class=\"hover:underline\" target=\"_blank\">\r\n                                Flowbite Library\r\n                            </a>{\" \"}\r\n                            and the{\" \"}\r\n                            <a href=\"https://flowbite.com/blocks/\" target=\"_blank\" class=\"hover:underline\">\r\n                                Blocks System</a>.\r\n                        </p>', 'uploads/banners/1735202298.png', NULL, NULL, NULL, '{\"about_title\":\"\\u0411\\u0438\\u0434\\u043d\\u0438\\u0439 \\u0442\\u0443\\u0445\\u0430\\u0439\",\"about_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"news_title\":\"\\u041c\\u044d\\u0434\\u044d\\u044d\",\"news_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"service_title\":\"\\u04ae\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\",\"service_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"portfolio_title\":\"Portfolio\",\"portfolio_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"partner_title\":\"\\u0425\\u0430\\u043c\\u0442\\u0440\\u0430\\u0433\\u0447 \\u0431\\u0430\\u0439\\u0433\\u0443\\u0443\\u043b\\u043b\\u0430\\u0433\\u0430\",\"partner_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"faq_title\":\"\\u0422\\u04af\\u0433\\u044d\\u044d\\u043c\\u044d\\u043b \\u0430\\u0441\\u0443\\u0443\\u043b\\u0442 \\u0445\\u0430\\u0440\\u0438\\u0443\\u043b\\u0442\",\"faq_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\"}', NULL, NULL, NULL, 'Infitech', 'uploads/favicons/1735188310.png', 'uploads/logos/1735792979.png', 2, NULL, '2025-01-02 04:42:59');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_no` varchar(455) NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `month` int(11) NOT NULL DEFAULT 0,
  `day` int(11) NOT NULL DEFAULT 0,
  `package_price` double(14,2) NOT NULL DEFAULT 0.00,
  `total_price` double(14,2) NOT NULL DEFAULT 0.00,
  `qpay_information` longtext NOT NULL,
  `payment_status` enum('paid','unpaid','','') NOT NULL DEFAULT 'unpaid',
  `is_callback` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_no`, `user_id`, `package_id`, `month`, `day`, `package_price`, `total_price`, `qpay_information`, `payment_status`, `is_callback`, `created_at`, `updated_at`) VALUES
(1, 'MWEB241205-9929', 2, 1, 0, 14, 200.00, 200.00, '{\"id\":\"c8852d83-495b-4ff9-a84e-6b8a3bf4313b\",\"terminal_id\":\"95000059\",\"amount\":\"200.00\",\"qr_code\":\"0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\",\"description\":\"MWEB241205-9929 \\u04af\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\\u043d\\u0438\\u0439 \\u0442\\u04e9\\u043b\\u0431\\u04e9\\u0440\",\"invoice_status\":\"OPEN\",\"invoice_status_date\":\"2024-12-05T06:19:57.586Z\",\"callback_url\":\"http:\\/\\/202.126.94.29:8500\\/quick\\/webhook?invoiceId=MWEB241205-9929\",\"customer_name\":\"\",\"customer_logo\":\"\",\"currency\":\"MNT\",\"mcc_code\":\"7372\",\"legacy_id\":\"793236732462593\",\"vendor_id\":\"332fdd07-a4d3-434d-848b-3e84afec1e45\",\"process_code_id\":\"78493cf0-7d4a-4932-bb9c-e8ba6219f9af\",\"qr_image\":\"iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABmJLR0QA\\/wD\\/AP+gvaeTAAAd8ElEQVR4nO3daZhUxbkH8H\\/3IAoMyL5m2FxQAYOZABFxA8lg1Bi5Ipj4EK8BieBFwSQwicljIl5Bw8UVBWQxRlRkcOPKIogMSAREEUUJiwzDMiwKGWAGhln6fuBKmJ7uc7q63qrTNfP\\/PY8fnHNOnZrunpc6b1e9FYpEIhEQETkgHHQHiIgSxYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInIGAxYROYMBi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInJGLd0GQqGQRD8SEl26K\\/repo97nRtN93VR6Yvqtaol0Pzu7dWe9L11Xpdk7q9C8vNk+u\\/K9v287q2CIywicgYDFhE5gwGLiJyhncOKJpkjUH2uNp2rUaGa4\\/I73yvnEGQ+wu9+qn2TzjGpvG7RpPNnKveKJp2X9BPk37EXjrCIyBkMWETkDAYsInKGeA4rmsl5MjbnE6nyyzFIzgnzYzqXpzIPS5dq7sZkPk\\/1dZWc5xfNZE4rlea6cYRFRM5gwCIiZzBgEZEzjOewTNLN++jMw1HNUam0HYvX76abpwkyR6H6e\\/vReS1082OSnz\\/pfKvpeVu2cIRFRM5gwCIiZzBgEZEznM5hRQtyjo7LtblUr7f5uqmer5KbMT1HzOb9q0uOyg9HWETkDAYsInIGAxYROcN4DivIZ+kgcxR+50rXfDdJshaT6blzfvdTaVt3floq1XjX+bykUj6MIywicgYDFhE5Q\\/yR0HZ53jPZ3AbM9jQGnRLJqo8XkqWmdR8nUvl1M\\/l5kpZKZXl0cIRFRM5gwCIiZzBgEZEzQpFU+s5SmHTZFMmStiptq97PdLkYyWkNfqTL9AT5HkpO\\/1A9v7os3eEIi4icwYBFRM5gwCIiZ1gvL6PyLG27ZK1feyavtbndvPTyFpN9Nbk1m+1t4lQ+z6o5KOmclcklTTrvGUdYROQMBiwicgYDFhE5w\\/haQtVnbZVzVcvjSubApOex2NyeymZ70nlI1fN11u\\/pbL0mcb4X6RyVSj7Nry3V61VwhEVEzmDAIiJnMGARkTOMryWUnhul0pbNuU1+TOYBgp6vZrNEsiqdPKTpvnjdy+Yaylhs5i1VcIRFRM5gwCIiZzBgEZEzrNfDMllzW+dequ0FmXuJPm47NyeZL5GeP2RyCzK\\/81Xp5LRSea2gansqOMIiImcwYBGRMxiwiMgZ2jksk2uadNdmSdfpkczNBJkHsLkOTbUtaSbXrvpJpTyRydwe1xISEcXAgEVEzmDAIiJnGK\\/prpOHkn5W9mtPpX3pOTs210UGucbS9ho4yZyVdK5Gp6a7H5NrE4Pc45AjLCJyBgMWETmDAYuInCE+DyuazrOz7noq6eM6bUVLpdpcQebXbNdFT6X5a6bakiCZl5LMeXGERUTOYMAiImcwYBGRM4znsPxIzsPSvXc0nRyW7vk615teEyeZs1K9lyqT84uCXGso2bZf+7ZfFy8cYRGRMxiwiMgZ2ktzpB8\\/vNryu7ff9ba3v5Lsi869TJ+v8jih01Yy53td79LjaSqVTA7yEZEjLCJyBgMWETmDAYuInKGdw5LOUdjclin6fJWclemcgsr50vmKVCp1I\\/2eSvbNj2Suz0+QU1Vs4giLiJzBgEVEzmDAIiJnBD4PS3ILdtPnmyy54Xcvk0tMdEtL61wrmXOKJZW3rleZE6Z6L8mlYCbLNKniCIuInMGARUTOYMAiImek3Dwsk+VlJHMQ0jkEk3kB02u\\/vPqm+57ZXINpessxHabXxbqybRxHWETkDAYsInIGAxYROUN8q3rd53aT8z8k5wDp3iua5JZjfkznhSTfQ7++mNwm3XRpaZVrdem8D7p5as7DIqIaiQGLiJzBgEVEzhDPYUnmGGzmDHTZrkdkMk\\/kda9E+mZyraFknX+Tv5cq059dnddZeos6HRxhEZEzGLCIyBkMWETkDO2t6n1vYLAekUtru3SvD7JuuirJOWOq9wpyn8xoJudd6eb+JF8nm+8BR1hE5AwGLCJyBgMWETnDeg5LhW7XbOYcgqylJJ3\\/UCVZX156rpPOXoAuv6eq7UuuXTWZI+UIi4icwYBFRM5gwCIiZxhfS6hKZ42cV1ux2Fwbpnu9ZN5Juh695J6JpuuDq+wFaHoNps21rjp1+qX3bdDBERYROYMBi4icIb7Nl2S5EJNbqCdDsv0gH1elyzXrlCaR3v5MhfSjTJBleHTTI9FU3kObj7YcYRGRM8ST7lT9hcNhZGZmIjMzE126dKly\\/Lt\\/cUtLS6scu+eee\\/Dxxx9j\\/fr1qKioMN5Xql60Z7oHuUpctS\\/S53tdK\\/0NpuTjr+69i4qKUK9evaTv\\/10bubm5WLBgAXJycrB\\/\\/\\/6E+ipdJUPnXjZ3i7FdqSRVHwnFA1Y0nV9W+oWxOQ1C8g8pVns2y80sWrQIWVlZxvJqkUgEixcvxrRp0zB\\/\\/nyttnRKS6sKMoD59SWazmff5nIpPwxYCu3X1IDlEgas2KpLwGLSnSoZOHBg0F0giosBiwAAHTp0wJIlSzB37tygu0IUl\\/a3hNLDXpPJPsklJ6q\\/p87SCOm++N1LVeGRYzj8ryP49ttDKC0rxzeHjqCiohx165yDxuem46zatdGsaSM0a9YEaWG7\\/0bqzPszmeBPpj2VtoNMMZjEaQ2k7F+FR7Hpy6345LPNeHf5Biz6KvY3fFVEgN\\/87DJc3r0zLu1yITq0z7AewMht4gX8bM6Slk7CS45qTH9FrjPCSuZ1Ky0rw4bPvsLbC1di\\/Nw1ytfH0u\\/Cphj683645sruaN6siUibkisrUqlIo9+9dKfVuDLCYsBKsC\\/Rx2tKwCotLcXK1evx+JQcLPrqgNJ9Eu8QMGl4XwwakIU2rVtoNcWAlVhfamzACvI53eaauOjjtgNWNK\\/A7nVu27ZtsWrVKmRkZHheAwCffvYVHp70Et7YsMf3XBEVEcz43c8wcEB\\/1E+vm9AlOu9DkP\\/gxTquQjp3rDO9yOrkcAas5I67GLBatGiB1atXo2PHjp7nHz1WjGmzXsdvpr\\/veZ4pV7VvhCfHD0e3Sy\\/2PbdVq1bYt29f3OMMWMm159V2kAGLGc8aok6dOnjrrbd8g1Xezt0YPPShwIIVAOTmHcZld0zAi3PeRmlZmee5b7\\/9NurUqWOpZxQ0BqwaYvr06ejZs6fnOevWf44f3fYQ3v0ywW\\/9DLtzQg7+MmEqjhUVxz2ne\\/fumDlzpsVeUZCMPxL60Um6q7Rl4rhK3\\/xIJi6j+3LXXXdhxowZntesWLUO14x4RqwPku7u0wl\\/HX8f6qf7L7iWXEaSSkuYbCb0\\/e4X5NItBiyN4yp982MqYHXo0AEbN25Eenp63PNXf\\/QJrhj2JGBuqZu2u\\/t0wqRH7kd6Pe9kPAPWKdU1YPGRsJqbOnWqZ7D6fNMWXHF3agcrAJj2\\/j8xcfIs35wWVW8MWNXYwIED0a9fv7jH9x34BkPum2yxR3rGz12LV15\\/1\\/OcwYMHW+oNBSHwiaM6bE\\/k05nUarO0SCgUQq1atbBlyxZ06NAh5jWlZWUYPW4Snl3ypbF+mfLp37PR7dKLtNtJ5YnIpj8\\/Ou3zkZDEDR06NG6wAoB3F+c6GawA4P4\\/PY+jx+J\\/c0jVFwNWNRQOhzF27Ni4xw8c\\/BaDHnzJbCcM\\/iu84uvDeP2Nxcbap9TFag3V0E033YT27dvHPT775XdQUi63AcStP\\/geBv70SlzcqSOaNmmERg0bIBwOo6j4BAqPHEHezj34aN0XePilXBSXywSyXz32JrKu64U2rfTWHpJbxHNYqUxyWoTJJUmxqOQYFi5ciP79+8c8tmtPAdpeP06kT6Ou74phv7wZl1x0PsJh\\/\\/4VHjmKJcs+xOjHcrCn6KT2\\/Sfd3Rdj7h0S89iSJUuQlZVlNFcjuXRM9fNiejmMzutkcvoHA9YZqkPAatGiBQoKCuKe\\/\\/TzczBqit7jVLv02pg1YSiu7t0joUAV7eA3hzBx8ouY9M4GrX4gAux\\/fzKaN2sc83CrVq1QUFBQ6WcMWMm178VmwGIOq5oZMGBA3A\\/bkaPH8OD097Ta792uIXJf+zOuvapnUsEKAJo1bYxHH\\/ovPH\\/\\/jVp9QejUDP14br31Vr32KeUwYFUzN94YPwis\\/+QLHClNPnfVK6MBXp36e7TNaJ10G98566xaGPaft+K5+27QaueFOe+hPM6GrF6vBblJPGCFQiHP\\/1TPV\\/nPr23J3y0SiXj+Z7pvZ97rO+FwGFdffXXca5au+Fj5PqdVRDBt0n3aBfbOFA6F8KshAzDmpu8n3caSfx5EXt7umMeysrJQq1atpF9n3fdI9fOqQ\\/rvTPLekjjCqkYyMzPj7shcXHwcE3LiPz75mZ09AJ0vOj\\/p6+M566xaGHv\\/nWh+TvJfWG\\/ctCXuse7duyfdLqUeBqxqJDMzM+6xnfl7UZFk7jOzZTr+4+YfJ9krf82bNcbT45LfD3HN+vgTYL1eE3IPA1Y10qVLl7jHtu\\/YlXS7Dwz7CdITLFmcrB\\/37YWzk0ziP\\/bWhrjfRHXt2lWnW5RitANW9PNrdC7H7\\/xofrkhlbb9zlftm9e5qs\\/xqjkvr\\/t\\/18bIkSPjnv\\/1zuTrsl9x+Q+SvjZRDc9tgD\\/e0TupayPl5TjwzaGYx4YPH57w58f050vlfMkcZyK\\/q8rfme5xHRxh1RA78+PXPffS5\\/wmyGjTSrg3sfXqkfxo6NDhQsGeUKpiwKohVnyW3CNh316XwPAXP6e1a5v8dInjHmWUqfpgwKoh1m8+mNR1F3RsI9yT+BrUr5\\/0tUeLTgj2hFKV8cXPOssbVKf4m16eoFMiWXcZh04uoCISAc5O7t8mmyu36tevB0RQqfrpr6+7CNf2vqzSeSWl5RjyyNxKPztWfDyhe0jOE1JdHhNN57WVrgWn87di8zPCag01QAhA0nMaLCovL69Sqrl3z664bUDlhdyHC48BUQHL9IRFSg18JKwBQqEQEE5L6tpjxfYetQoLj1b5Wb2651T5WcmJqn1q3DD5x0lyR0qPsIIs0eJ3f9UhtOojo8rjRSKv05BrzsPfVm33PS\\/aZ198rXxNshqeWx8fTr8fX+\\/YjU8\\/34Yn\\/3cjmsWoxFBaWlrlZ2fVih2QCwsL0bBhw6T6YzKFEOt8nWujz7f5eKqbelHBEVYN0bZ106Sue27xFyg+bmeUVafOOejV8zLcMfgmTHpkNE5+MgOhUBgfrd2AXbsLUFp6asecAwe\\/rXJts6axS8xEl5cht6X0CIvkXHRBBoA1yteVVkTwxaYt6PHDS+U75SMcDmPhe6sxfu6pftcOhzCs3yUoOh5V\\/C8CNGp0bsw29u9PjV2sSQZHWDVE+3bJT0+Y++YywZ7E9vmmLXjsiVnY9NVWVPx\\/uZiiomKMf\\/XfQfZkRQTPLt6E2blbK117Q9eWcXeF3rx5s7lOk3WBVxyV\\/HbHZuXDaKa\\/pdLt++49+5BxffyNKfx8\\/uqD6HLJBVp9iKe8ogL3\\/e6veHbJJgDALd3aYPiQn+BkaRl+OnaW7\\/XP3tsfI+6+Xfm+uu9ZkNNk\\/KjmsGzS+SxzhFVDtGndEtddkFweCwDGT\\/obTpTo12GPJXfl2tPBCgDe2LAH\\/cdMTyhYAUC37+vvUUhuYMCqIUIhYPDNVyR9\\/Wvr8jFl+quoEJ7PtTN\\/D3457oWEzm1fvzb++5dXVvpZCEDni2OP\\/I4fT2wyKbmDAasGufLyy\\/xP8vDAtGV4+bV3RIPWmwuWY1dR5WkKlzSuE\\/PcP93zE2Q\\/MBQHlz+BnPF3oM95jfHQz3vh3AbpMc9fuXKlWD8pNYiXl5EsDaxbHsZkeRlVuiU8vPp25s+9Ssycf357DO7eVuv3GPJoDp6Y8pLY4+GIYYMrjZraptfGklf+gjUzH8BV7f89fyotHMKN\\/U+Vf27apBEG\\/LQfFs19HPcOHxy37QULFlT5mclSvpJlhk1+XmKdr3IvnbZ0c7HaSXfVCWkqb6Ru4tD0xD+va1X7ojpx9MzjZx5r3rw59u3bF7c\\/y3PXoM+9Uzz7kojbftgWf\\/zNEOVE\\/O49+3Dg4LeoXz8dF5zXDgBQVlaGx596Eb+fnYvVL4zG5T26AQCOHDmGF16cjwemL8PLD96Gn9+mtmFF69atsXfv3ko\\/C\\/JLnkTfw1jXRrO5jtHkpFNVDFge7bsYsADvjVRLSk7ihtvHYdm2qpMvkzHmpm4YdEtfdOl8IerWqbqMBgCOnyjBl5u34Z2FufjzKx+d\\/vkz916PEcMGIxQCysrL8dnGzci8rHOV69d\\/ugkXdzoPdWMs04ln6dKl6Nevn9Fvyxiw1NvSxYDl0b6rAeuWW27B\\/Pnz495rxap1uGbEM579UVUrHMKIrM7oeklHNEg\\/lYMqOVmGDV9sx7SFG3GsLPZWXO89ORzXXdvLs+33V3yENR9vwq9\\/NRCNGjZIqD8DBw7EvHnzGLDiqLEByySdD0Ay7Uezub5KMhinpaVh+\\/btaN++fczjZeXlGPXbx\\/Hc0q+U7mlCo9pp+GT+w2jfNvbE1ryde9Bz4J9w4EQZerSuj\\/956C5c8SPvks35+fno2LHjqeoPUbyChC7J91j3s55KgdmvPRX8lrAaqqiowMSJE+Mer5WWhrH3D0G9tODf\\/sMny\\/GHh6eiKEY9q28P\\/Qsjxz6JAydOrSFcu\\/coet\\/9JN5Z+IFnmxMnTowZrMh9wX9iyYiZM2dix44dcY+3a9sar02402KP4puzZiemzZpX5edLln2Id7+svBbwxi4tce1VPeK2lZ+fjxkzZoj3kVIDA1Y1dfLkSWRnZ3uec32\\/q\\/DonfF3irZpzNSl+GDl2ko\\/u21Afzw1Muv0\\/7evXxvPTBiF9HrxtxzLzs5GSUmJsX5SsIwn3f1YTdgZfPZOpaS7ymtafPwEHvjDE3g+BfJZrerUwpqcR5DxvZanf1ZeXoFps17HiKfexbrZv8UPfxB\\/78Xly5ejT58+Yv0x+Z5FH9fNSUl\\/waRSq8vqml0GrPjHo7kasIqKiuJuYQ8AR44ew+jsyZiZu82zjzYMuaIjnp88DnXOOfv0zyoqKrB1+050uqBD3OuKi4vRrVs3bN26Ne45qhiwEruXzYDFR8IaYPTo0Z7HG9RPx+RHR+PX111sqUfx\\/e3DrzHjxZxKPwuHw57BCgDGjBkjGqwoNXGE5XE8mqsjrFAohDlz5uD2271LsBQfP4GnnpuD7NkrPM+zYeXUUeh9eWZC586dOxeDBg0S7wNHWIndy6lHwioNGpwvYnO+h1\\/7un2Rniio0\\/aZKioiWPheLgaNm42i8tiTPW04r8HZyJ03Hq1bNhdt1ytI6P6DFk3nPTc9B1HlfqZfFxV8JKRKwuEQbsi6GpvefgT3BPiIuP1ICR4cPxUlHous8\\/LyLPaIUgEDFsXULqM1nn78t\\/hgyr3oe36TQPowK3cbZv\\/9zZjH9uzZI\\/qNILmBj4QeauIjYSwlJSfxj7Ub8Pzsd\\/DaunyttqI1qZ2Gvt9vg7ke7Z5ZwQE4NbLq06cPduzYoZW74SNhYu2l0iOh9aS7ZHJP8l6qTL9p0uvcVO4dT0Ukgm3bd2LVPz7FK2+twtIt3yTVTjgEZN\\/aA32uykSPzEtRr15dfJ23Cx\\/krsUfpizE\\/uOVC\\/p1aVoHS199BC2aVx3p6fxDEeR7EE066S4dZLzasokBK0k1MWBFt7G34ADy8vcgb+ce\\/HPbbuTv\\/QYv5m4HTpadikonK\\/Cjzs3Rq2sGOrRtiQ7t2qBjh++hXUZr1K0bu6po8fETWLf+c7w6f1mlyazDru2Eq3q0wx2\\/+EWl8xmwYl\\/PgBWvAQaspNp2PWAl0r7u77Bz114sz12LidMXYfOh48Dh7YjsWlXpHAas2NdX14DFjVRJnNQferuM1mjX+lzUOvQPYO9JIL0VIpGI1UBCqSXwpLvf9TYZnfBmufaS1739rs3Ly4tbS8uW\\/Px8ZGdn4+WXX\\/Y8L5VGoiYT5SZHTH59SaXJ4ZzWQFV06tQJI0aMQH6+7DeCicjPz8fIkSNx4YUXYs6cOdbvT6mNI6wzcIRV+fy0tDTcfPPNyMnJ8TxfwtKlSzF16lS88cYblYrvuZTr4whLvW1VDFhnYMBK7nwdo0aNwrx581BQUBDzOANWcm2rqrEBS7kDAU6mM73gWOV4NJ0PpG5fJP\\/QCgsLUVBQgP3792Pz5s0YPnx4wtfGIvkPosmJxbHoBCjVtqQ\\/fypt657v2RYDVnLtMWAlxuaMbNXrGbCSaz\\/IgMWkOxE5gwGLiJxh\\/ZHQdPLQq22\\/vvhdr\\/NYZpLpWfaSj7u2H8NsSqXXSVKQXxhF4wiLiJzBgEVEzjD+SKj7bYdKW34kH0dsz9HRWSQu\\/RZLPhrb\\/jbV65tev7aleX2eTP7eyZyvcq0fPhISUY3AgEVEzmDAIiJnpFwOSzJXY\\/O5Pprpr4JV8h+m153prFaQppIzk17nKjnjW\\/peOqTztTo4wiIiZzBgEZEzGLCIyBnG62H5UcnN6N7b5SoErvbVZJ4wkfZU2tetQiB5b1Umc1q2c31eOMIiImcwYBGRMxiwiMgZ4vsSSpZ0MVk1Ubdv0lU7tcrGWpwfpHp\\/m+WETLNZ696P6r11\\/i5T6T3iCIuInMGARUTOYMAiImdYX0soudbL5nq96OO2yxKrML2jjwrbdcNU2jc9z8pkjTO\\/81WlUr01LxxhEZEzGLCIyBkMWETkDPF5WCZzMX5Mr0OTzDmo3ktnDZzueyKZo5B8zRM532u+m3SOymZux\\/R7fGZ7qTT\\/jCMsInIGAxYROYMBi4icEfhW9V5srzuTvF+Q++tJrudMpH2V+Wom51WZ7lu0IOe3+fUlmqv7EEbjCIuInMGARUTOYMAiImdoz8Myud7KdP4jmk6tcp22kjnf61xVfter5mJ06vKrsjnXKZrJNZfS8\\/h0pFINM46wiMgZDFhE5AwGLCJyhvY8LNNzgFTuZbo+lk0687Ck6eQOTc918jvfrz8qTOZQpT\\/bkq+Dzf0Z\\/XCERUTOYMAiImeIl5fxozO8lH4ENFmORnrZhldfTS\\/FUb2fTts225N+j4IsiSzdN5XpRTanf3CERUTOYMAiImcwYBGRM7RzWDbL8aZS\\/kP33n7Hdcrvmt4SSuV+fvkO3eVXNrdP82Myv6ZK9fdW6Tu3+SIiSgADFhE5gwGLiJwhPg9LN6clWUZFt4SL5Dwak0stpOcPqbavwnTeUKV93TxPkKTzlJLvi8kcF0dYROQMBiwicgYDFhE5Q7xEsuq8Gy+2S2zorK\\/SZXIelvQ6NZPlnKXnZfn1XaUvJtkuw6NyveRrqosjLCJyBgMWETmDAYuInGG8HpbOs7n0XCbJbcNs1iPyI7leM5m+BLntkx+V18ZkzTJV0mtyTW77ZRNHWETkDAYsInIGAxYROcN4DktyfZZ0zkr6fir3Mpkv0c212MxR2N6SXaVWuXTfbNZjs3lvm\\/WxOMIiImcwYBGRMxiwiMgZ1vcl1NmCXToHZXO+kW5NKhWptPZLck1brON+95PMp+h+PnT2\\/jNZo93vuG5dfUkcYRGRMxiwiMgZDFhE5IxQJJUKVSsyXTddch6WdG4lyPryfvfzEvTekpL7XprMeeq2Lfn5k35ddHCERUTOYMAiImcwYBGRM8RrupukWr9bOo9kcv2ezfVY0n31Oi5dxymV1odKzo2SrmmmymQtOEkcYRGRMxiwiMgZDFhE5AzxtYQm61pL31uyRrfpWkp+99O5VjpPZPJ1k8wj2Zwbp3ut6VxdKtelOxNHWETkDAYsInKG9W2+\\/OgMF22WwQhy63BVpldfmXwUssn0Ui+Vc1Uf03Uf01QEuf0ZR1hE5AwGLCJyBgMWETnDeolkSTbLDgOVn8VtV+WRzO2p3ktyioV07kVnmkPQpaS9plh4nat7r0Tup3JvmzktjrCIyBkMWETkDAYsInKG0zmsIMvImtxqXlcqbZUlXV4mmuTWWrp9Ue2byZyobt5J5XVSbVsHR1hE5AwGLCJyBgMWETnDeA7L4V3ErJYtVqUzj0Y3p6VyP9vzrCTLN9sse216KzbVdbY2P18qOMIiImcwYBGRMxiwiMgZ2lvVB7nNlx\\/puVKS669MPuebnncVZA0rmzWqoklvI6eTTzP9WdYpmcyt6omIwIBFRA5hwCIiZ2jnsIiIbOEIi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInIGAxYROYMBi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkjP8DYDTkrIeo7F8AAAAASUVORK5CYII=\",\"invoice_bank_accounts\":[{\"id\":\"c38cd215-b884-44c4-ad7b-ed5cb7a785b6\",\"account_bank_code\":\"040000\",\"account_number\":\"453256871\",\"account_name\":\"\\u0418\\u041d\\u0424\\u0418\\u0422\\u0415\\u041a \\u0425\\u0425\\u041a\",\"is_default\":true,\"invoice_id\":\"c8852d83-495b-4ff9-a84e-6b8a3bf4313b\"}],\"urls\":[{\"name\":\"qPay wallet\",\"description\":\"qPay \\u0445\\u044d\\u0442\\u044d\\u0432\\u0447\",\"logo\":\"https:\\/\\/s3.qpay.mn\\/p\\/e9bbdc69-3544-4c2f-aff0-4c292bc094f6\\/launcher-icon-ios.jpg\",\"link\":\"qpaywallet:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Khan bank\",\"description\":\"\\u0425\\u0430\\u0430\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/khanbank.png\",\"link\":\"khanbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"State bank 3.0\",\"description\":\"\\u0422\\u04e9\\u0440\\u0438\\u0439\\u043d \\u0431\\u0430\\u043d\\u043a 3.0\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/state_3.png\",\"link\":\"statebankmongolia:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Xac bank\",\"description\":\"\\u0425\\u0430\\u0441 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/xacbank.png\",\"link\":\"xacbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Trade and Development bank\",\"description\":\"TDB online\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/tdbbank.png\",\"link\":\"tdbbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Social Pay\",\"description\":\"\\u0413\\u043e\\u043b\\u043e\\u043c\\u0442 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/socialpay.png\",\"link\":\"socialpay-payment:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Most money\",\"description\":\"\\u041c\\u041e\\u0421\\u0422 \\u043c\\u043e\\u043d\\u0438\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/most.png\",\"link\":\"most:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"National investment bank\",\"description\":\"\\u04ae\\u043d\\u0434\\u044d\\u0441\\u043d\\u0438\\u0439 \\u0445\\u04e9\\u0440\\u04e9\\u043d\\u0433\\u04e9 \\u043e\\u0440\\u0443\\u0443\\u043b\\u0430\\u043b\\u0442\\u044b\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/nibank.jpeg\",\"link\":\"nibank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Chinggis khaan bank\",\"description\":\"\\u0427\\u0438\\u043d\\u0433\\u0438\\u0441 \\u0425\\u0430\\u0430\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/ckbank.png\",\"link\":\"ckbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Capitron bank\",\"description\":\"\\u041a\\u0430\\u043f\\u0438\\u0442\\u0440\\u043e\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/capitronbank.png\",\"link\":\"capitronbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Bogd bank\",\"description\":\"\\u0411\\u043e\\u0433\\u0434 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/bogdbank.png\",\"link\":\"bogdbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Trans bank\",\"description\":\"\\u0422\\u044d\\u044d\\u0432\\u044d\\u0440 \\u0445\\u04e9\\u0433\\u0436\\u043b\\u0438\\u0439\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/transbank.png\",\"link\":\"transbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"M bank\",\"description\":\"\\u041c \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/mbank.png\",\"link\":\"mbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Ard App\",\"description\":\"\\u0410\\u0440\\u0434 \\u0410\\u043f\\u043f\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/ardapp.png\",\"link\":\"ard:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Toki App\",\"description\":\"Toki App\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/toki.png\",\"link\":\"toki:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Arig bank\",\"description\":\"\\u0410\\u0440\\u0438\\u0433 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/arig.png\",\"link\":\"arig:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Monpay\",\"description\":\"\\u041c\\u043e\\u043d \\u041f\\u044d\\u0439\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/monpay.png\",\"link\":\"Monpay:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"}]}', 'unpaid', 0, '2024-12-28 21:30:48', '2024-12-28 21:30:48');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `title` varchar(455) DEFAULT NULL,
  `price` double(14,2) NOT NULL,
  `month` int(11) DEFAULT 0,
  `day` int(11) DEFAULT 0,
  `body` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `price`, `month`, `day`, `body`, `created_at`, `updated_at`) VALUES
(1, '1 САРЫН БАГЦ', 10000.00, 1, 0, 'testsetsetsetsetsetset', '2024-12-28 22:01:24', '2024-12-28 22:01:24');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(455) NOT NULL,
  `image` varchar(455) DEFAULT NULL,
  `link` varchar(455) NOT NULL,
  `content` longtext DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `title`, `image`, `link`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'teset', 'uploads/partners/1735297821.svg', 'test', '<p>testsetsetsetsetse ets ets etsetse te</p>', 2, '2024-12-27 11:10:21', '2024-12-27 11:10:21');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `content` longtext NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `image`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'test', 'uploads/portfolios/1735292823.png', '<p>tests test teststetsetset</p>', 2, '2024-12-27 09:47:03', '2024-12-27 09:47:03'),
(2, 'tests2', 'uploads/portfolios/1735293275.png', '<p>tset adsgadags dfgsfdgsfdg sdfgsdf g</p>', 2, '2024-12-27 09:54:35', '2024-12-27 09:54:35'),
(3, 'hi', 'uploads/portfolios/1735297756.png', '<p>asdf asdf asdf a</p>', 2, '2024-12-27 11:09:16', '2024-12-27 11:09:16');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(455) DEFAULT NULL,
  `content` longtext NOT NULL,
  `image` varchar(191) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `subtitle`, `content`, `image`, `user_id`, `created_at`, `updated_at`) VALUES
(5, 'sfdg sfdgs dfg', 'sdfg sdfgsdfg', '<p>s dfgsdfg sdfgs df</p>', 'uploads/posts/1735208669.png', 1, '2024-12-26 02:24:29', '2024-12-26 02:24:29'),
(6, 'jgf hsdhdfgh', 'hdfg hdfgh dg', '<p>dfg hdfgh dfghdfg h</p>', 'uploads/posts/1735208838.png', 1, '2024-12-26 02:27:18', '2024-12-26 02:27:18'),
(7, 's fdgsdfg sdfgs', 'sfd gsdfgs dfg', '<p>sdf gsdfgs fdgsfdg sdfg</p>', 'uploads/posts/1735208854.png', 1, '2024-12-26 02:27:34', '2024-12-26 02:27:34'),
(8, 'sdf gsdfg', 'sdf gsdfgs df hsfdh', '<p>sdf gsdfg sdfgsfd</p>', 'uploads/posts/1735208864.png', 1, '2024-12-26 02:27:44', '2024-12-26 11:24:21'),
(10, 'ыбйөй', 'й ыбөйыбө й', '<p>йыб өйыбө йыбөйыбө йбы</p>', 'uploads/posts/1735266184.png', 2, '2024-12-26 03:18:35', '2024-12-27 02:23:04'),
(11, 'asdf asdgfdgsfss', 'asd fasdf', '<p>asd fasdf a</p>', 'uploads/posts/1735266157.png', 2, '2024-12-26 11:21:12', '2024-12-28 10:18:36'),
(12, 'adsfa', 'asdfasdf asdf ads', '<p>a dsfasdf asdf asdf</p>', 'uploads/posts/1735263960.png', 2, '2024-12-27 01:46:00', '2024-12-27 01:46:00');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(455) DEFAULT NULL,
  `subtitle` varchar(455) DEFAULT NULL,
  `image` varchar(191) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `subtitle`, `image`, `content`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'asdf asdf asdfasd', 'a sdfasdf asdsfdg', 'uploads/services/1735264068.png', '<p>fas dfasd fasdf asdf adss sdf</p>', '2024-12-27 01:47:48', '2024-12-27 01:49:10', 2),
(2, 'test', 'testsetse', 'uploads/services/1735265112.png', '<ul role=\"list\" class=\"pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700\"><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Dynamic reports and dashboards</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Templates for everyone</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Development workflow</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Limitless business automation</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Knowledge management</span></li></ul><p class=\"text-white lg:text-xl\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>', '2024-12-27 02:05:12', '2024-12-27 02:05:12', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0dFJQQroi4fubpFxepgCPnFC8vofp9iT07SpdMHf', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQzZEWmNyTXUxa0hiaTlXMHVJajNsc3NXNGRDMmQyendIcnpXM1N6cSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736375675),
('0KjNrriGeLInjSGcXx8tARlYOgxyEfJTPjVORHvn', NULL, '221.207.35.20', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibm5rOU90MUdiakRGVGNQRWxFSzJmYWJxQndxTVJ5M3EzdURLSVBSeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370094),
('0PbjMOBJA4IMVaMiDXQJfku1DdllLA0jdr2enYOD', NULL, '125.119.135.224', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidHBMZ05kVXZ3WGlrcmw3R0ZYTXo0aFdYbDIzUWlXTTlpNk5ZdmVYSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371084),
('0RQ8exuYEoLiaeY2mWmTXhas6x3Sy2oe6EtOSIq9', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQVZzQ3dMdWhVQnJpdlFLUmJYTHlkYk5QZ2FpTGtoNTg5S2dINjlCZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736381442),
('2ElivwBHiWiPsLXikYOuGJen74a1KrFVl6mXizGf', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY1RUS1FFUzRYU200Nk81eUhjcXJKT0x3QlNMaGNmN000dGJHTjkyNyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370036),
('2luzvggwteA6ZIKxYwTyxruO9cmnuxIrBdDgoEJY', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidW5xWWJjdmR2bkpWSTZtQW04cnlWS3lhSTNTV1hEamxpcHRxUFo2MCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736383652),
('2WuoQza8gf4msdFQXSAvOVT2nXFjpCOkpHjhN9hq', NULL, '124.31.104.16', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibU5MY08waW1HSjFocDFhSUFJU0ltc3JLeWZtWlNIS1RyTkgzTnNaciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371288),
('33InOtMu5PpYMSjYufzWTzkg4SWwye6rUNw1B4HG', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRXd0MXFOWTIzNFRqWWRSdzE3b0FYNjFzeDE1eVYxcXE1cnhycnZPSyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736386567),
('446bOFYTDmcacwd9c3xxj8j3q4MBVTW1GmfNtXaC', NULL, '5.181.190.248', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidmlHRXFUZ292a0tDUnl6c1F0ZkJpTTZUUFVnTzVERnltc0ZqVlZEVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374937),
('4J51RWZailU7CTqGQ5y3tp8Ebe9xNPs8AvEy3WX4', NULL, '218.104.149.106', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUU51dkl0SGU0bUttYWV0ZFpST0gyOG5yQlR2YTFMbnJRbGpKODVjZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373684),
('4MTvLJANzaVgCZedfwgrlPQHpuwtiJXyl8sjN43M', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidEs0ZVBxWEpIbkludEIyMGZLZzQ2Y3U3WkJnb1BGQ3ZJUnFicDVXZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372667),
('4rNSDMkevzrPMbPy181fUdGPDRZRTbjKCHCf5DGf', NULL, '218.104.149.127', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWHlPTElGNWlBcnRWekZSTFJYMkVsZko5VlAzOWVibjczU1I2U1hHZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370899),
('4YGBS6HNyYTT9GlpjxOk3sZcppc75OuyMoFfUIdd', NULL, '1.24.16.189', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZER0VDRkTFBwWWtScjRqOWMyTjVydGVKS2FaQm51NE95b01SZG12WSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372764),
('59JipKEm1HUZ89ATka9lsgmmysdxxwC3CY18HHfR', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOTVjZG1SNHQxaUxUYzRodUJLYlo0MU1xZFlaeW53ZVUweURkT3d0OCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371473),
('5Z3mBv9tRQ0xJ6OkrTSlKJvdmUvkHwjTXlpWWF0L', NULL, '123.245.85.251', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYndwQ3RUbEpSdjhROGtCNTA5eHhueno2RHNURVlua1gxSXA4SkY1WSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372153),
('6kWjVdIWnk1KWz3bpNew6KFMn7gmKio4VGodn1rE', NULL, '124.133.208.157', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZGJOeGpZbFE3SEhFR3RKZE1CTmM4aUh5V1ZaRzdEOHM3NEJMY2NYQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373251),
('6VaiXmOhZ4ci6VsYhndiFNC3jKA14pvRrupgu0jF', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaFJETGNFZEc0UzFEanZ2RkY2bElSM2ZIbncwaWdXUGRVQ0t5WU9uNyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736388024),
('7OPOoJcuxt73tbljYtKaDHEcE1hXSaRXa2umTdL5', NULL, '83.222.191.146', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaGZKZlEwa3NmS0xzWGE4S05Bd2pvbzU4V1A1d2k2Y3dPWUV4eTIxYyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366606),
('8EYhcgTp6ozfhcb97k1z5XTD2yE4rjRYPI9aseeN', NULL, '112.193.171.200', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiekxGaXpqazdJaW1UTzI2SHJkS0JOcTk0bm5rcUNRd1pUSEppbThiaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373194),
('8UtnTqEgzR33cQ9C9sqQFfeizrwbcEB2vVOZ9aJn', NULL, '61.158.26.6', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNExZYWFUNzFpMjhnOUlGdzU1SlNnYmpaVVZ1eFJTWmtCSU5RZHFNSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370441),
('9jWbLs16dT5p2NgEdJhfmPX2ZCR1el3YVhaSti8J', NULL, '59.173.135.176', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTDRMR3IxVDFLclB2dFhDNXp5dnp1cGZYTUs5OHM5QTBIVTJ5VFE4biI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373483),
('9RCCwazaUzafzpJ1OYTAnNTfIDr3AwMv4e9YhFhY', NULL, '60.13.138.42', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2FtNUtGdlpnUjJEbmEzRkdtTUFrT0JTQ3RZckxtSWNzeUdTNGV4RiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374674),
('a3LVByhkdz8cS3Jv2d4CmwAEmALT1FzvAPKfddUB', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibEUweFNOaGtVdks5aEU2M0RVak50WnhVc1F2N2h1WU81Q3ZsRUJzNCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366373),
('AIj5e0hVa2ndUGAubmbwfkBprq4zumx0onkgTqaG', NULL, '125.82.242.29', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUzlORUJzU1FGeUo4RGlXcDMzM0g2bTNWVnhmaGF6ZU50QkhhWFZiZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370121),
('b2gyvLvSgbFMg63d6IRX3P5psYEPr9cmqmAIJzfX', NULL, '111.224.221.117', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQU1SV3VOYWVHSklMOGNYak55dzBjVzNKZzYxSXVXc25xakRlNnZvaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373377),
('bX96u7wkwamSDgugqbDcxfCbXAR4TOeew42FtTUk', NULL, '123.178.210.227', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWWxpYmhrUUkwVHdBZ3JKd0Y4V3czVVB3UGNYRE1DY0lIN0FtTGdwdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371917),
('C1NZ6xhdPGvI09LxfZx0QgZFWUQ9fPWyFPWOPIHD', NULL, '180.136.232.5', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNDR3Z0ZxRnoyVTZ1bFdQdzZZMjlReTFPdTIzMmVkUU55YXJSbjM1bCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374649),
('CH5TqpKFQLUcQSHy0oGMhPa41hx9zq69bQnywghh', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoicFJzcUxyaGttVDZJeHRiY0tFSzE0UmVQM2Y0cFJiOGpZVFU3bVNXRSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736368446),
('cKOY7AsIknmHCfGkCyLxWFiGw8sqtRMpPExDfLRJ', NULL, '124.133.211.123', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidjF6N3hjSkJzbzI4ZXpRclpVUTMzWnRwc21SS3FEclo0cjFldzBlQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370615),
('cOauIveatsp4RFauvyeAlkbZGuL9Q7kgLCgOk48i', NULL, '111.224.221.196', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNTdoeldnRlJZUHVyeG9nQlZhWnpmMThab2ZNSjh6RkdaZTdCYzM1UiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373098),
('CytOTMcEUTubu0G1q8xTpQVnduxPNXc2Uz1VzVpQ', NULL, '221.155.228.63', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicjhrSmNjQmpGdkxiMUFYZW5YOUNOTVZiVkxsUkJNQm90Z3VEZDYwWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736385336),
('d0f9cEwOu3oE18bfSOtgPpCIL6d8q5ZJqQdiCidv', NULL, '121.29.178.178', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYXNoMmtHZ1hHMk5nbmpMRkNKcGEyelA5OTRHU2tzbTRMYjZqWmlJeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373618),
('d4rQmk2ip3jEeJftOEVUwdG5P08zPBrieSrKWsy5', NULL, '223.199.189.48', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidmdZcDJWaWo5Q3pNdXhxRmlMTkw4NTJKMmxHYzVGcE9UT29kczBhYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371945),
('dudN2soKUzovzytCjnKQgkJZL8Tr4xa7bwnDGw7S', NULL, '109.205.213.198', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiV0pzSlduZ1ZrelBCdjhKYVR1MGJmc3JwWEpDMWd1V0ljQmFlVEpmcSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374192),
('DwnnFIT8fjgAfAms4An4TRGzyAoCO9Sc24dRUU4J', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY1J0ck1uT2UxYWJnTDJnMEt3d0hyV29Rc2N6TEI2Q3I5ZDk4UjZGNiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371671),
('e11Yz6r6nHfwqA9963xPH6h9xVvKMtZhRgUaxmBj', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY3RVYThGZkRnRlV1RWtHc1MxN3JHemI0VUNPRnU0UVdreGFuclBPSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736369706),
('EBpqs8okXbi6CGXfmYDrIVl4rLq8J4tFk3AngBkb', NULL, '66.169.6.245', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNGVkYTluT3dkaGZ6NkNOM0ZnMnBOU1hkSzJoZHhhZzZqS2VETWF5YSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372528),
('EQ925WRV9CdVpESfNv3AdOpMg8GVoMkw3nc7FP1n', NULL, '59.52.177.143', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY1NNU2JKR3ZKSjZ3d2dqenpPMFJzem9KVUJrUXNhZzh2RExRRkxGWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374013),
('Eu7jDoW1o66qbUKAEN883QOR6YQ6gYTFj6ZQzrqf', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiR0ZzWVRESzZmbURVZkozVlhnREdpb3hpSXhsQWZ5YktDZEY0Vm81bSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736377074),
('EutzbfDVcjeothSY9cbRGuJNulj3CBRqN4k7fgip', NULL, '171.120.25.240', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM0QyZkhQOE5md2hYQ2hvbzhrNDBIaWpnRldXbGJLV0M0YjdBVnozMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371360),
('f16xAZJA4hkgVePUeJYQGTeUqiK50VxTv2gnFVPC', NULL, '182.138.158.244', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZWdZUFBOS3lCTVNJSHlwZkhzam1iaTVDS3hWcGtKUWNDR3BJSGp6SiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373333),
('f55MGN51PU9kx0ug6DQ0aARgrIRXZP66hWPCJish', NULL, '185.16.39.104', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUTBYd2QyUVJycWVQRnN2OEp0YXNoRmNlcDBYT2E4QVdjclVOS0EySCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366691),
('G27h3b6ekjNcUxZU2bF7OT1aN737cTLwyn2DTnM3', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZVlMSjRreWU5UHhkdzRNTkFmSlV6c3JnZTlybXU1YUZOZGx2NkYzWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372874),
('GFUO81KYvxcOGcTw4ccgJme4Cn34dSuttKfcOpfE', NULL, '123.245.84.159', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2JGR2s4MU1lRUUyRW1tMXdYa1ZLbU9sb0prMUlSQ1RHTktLM0N3cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374591),
('HCqLy5OIm6qsHYphdeoVEq2NS9LaQ7rWfXYtGlV1', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQ1pYZTY5N2VKa3liZ3EwNFNsSzhSRmVCVXlaeWlHaGE1Rmk2WklzWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371173),
('HMdj5ab9iptEIr41qMwlPnu75o79RD9FwY20gunG', NULL, '92.255.57.58', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibkRWRmNmMmlINEk4aGx4N0ZPZGE3dTlxSmdRenkxaEZmTFRtY3EySSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTE6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Lz9YREVCVUdfU0VTU0lPTl9TVEFSVD1waHBzdG9ybSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736370635),
('hqR8AC1mDptD2vDcuLUnKqviCm8pl73vJiCSDTcX', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTWl4Z2N5UVI0Y2pkblhQV2I1Zjhld0V0YVA1OWZjQzRwT0k3aGtiZyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370177),
('HQSbGsXURtq5NB2feZJTtBIzCLL46mIVQWlsnplw', NULL, '1.83.125.23', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRzZwTWFkaHFjVk1yUmVVUzRUTlgyT09YZ3RpeFRzbTE5SVk1cG83MSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372888),
('hz03QQU0YWmb7CT3G3UGvtW57ZgcPgGrJMJpxv7q', NULL, '1.202.114.78', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMXVVZ1dKRk5CSzdjdjBIRTJiMW0yMmpVRnZkWDFvYVNSVzRrV1RLRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373954),
('I2YqOwloU88FGsEybC8wHCZFe2sn5B2u0rTAO1yu', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNWw4dVdqbnM3djBWV01IZ0c0QmdEeUxIMnBTQ2NaVTdqWjRqOVpjQSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736382896),
('ij4offkw6lSvKVn3S8FQVWqjf2PouMB2J7EsSSkw', NULL, '171.8.138.32', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN0RIQlNvWjZ5WjZSOEJ0YnFINDB3c1FPcVZ6N1J0TU0zYkZ0aFUybSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371731),
('iPojU90vuCD0AzDekj7nAlZrNz9RobKnJRQ8vDZb', NULL, '116.252.76.44', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2pEUkhqRUNRRE5rZ0JqY0VmNU5ad2ZuSW9Fb0Y3cW5WdFRQeWlVaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374097),
('IXPs9b5RPp2AIlQder5UMxIxfjnzOemUF8sOQRm7', NULL, '223.83.130.196', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUXB5RThxcnNsZjhNQlZXZlNVRGdnQkh2Nk5OdmRCT0pwU25QelZZdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372690),
('jBd8JhFQgOZ4ehjb04GBKJV4ATyM1MaMWIh9KLtc', NULL, '111.113.88.194', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUElYaHdUUm1YZEhRQjZuR2I4V0hjOVU4VTJRSTJuc3d6dmVNd1UwZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373529),
('JbiZsHstg3oRRBZQ6f5RpxGRFQ9fjmqO2nYLuiz4', NULL, '220.250.10.23', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRkM5MWh3eVFYRFRNamszWVVVdkF0UGZBdnBZZ2VaUXdWbnVoMmxCdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372604),
('JIIRxmXbAUcAmtHZtNOHXstxXLVaaAnPoPFcs3ei', NULL, '42.63.54.220', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVkNWMVd6VTd0SFFpUzM1d2QwMktCUXpVanZzZ1NOS3lBMlRVMjRqcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370705),
('JReOuV0qdkdijweKSrHvSAWHiQd8YoK96SXmWuYj', NULL, '115.192.0.163', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiME1JZ0habXRaRE9idWo1NHJMVWJUUFZRSHFGdFZMaTVoTXozTUFQdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373043),
('JUDnj2SQ5vmgZBC5xRcHVcZ7rKTaZ06jyfnRpTz2', NULL, '45.156.129.131', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicXhnY3Q3N3AzUHIxalhXMUxqZkRYV004N3A4VnpDelVidGJkTXFNSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736386651),
('JvpzTnp6uCOu1bVtmsp6qyDJtrUB3fYQBVq4YLKT', NULL, '179.43.191.146', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNnFiekJpNmlQVHNvTDhSRTlwWWk3d0ljdG5LTUxpeWFBb2l1NnJTSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372975),
('kp1i1JrAxZLshGy81KE7ADow5JzsuWl2k99u3CJ3', NULL, '121.141.36.92', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWDZJYXRpMmRDZWJKUXZmT1lpdU42dkw1YU56SjRRY1ZyT0trdjlBUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370272),
('Ll5iujTAo22arx2S0RZxens6k2xVbRwroaRYsixP', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiM1VQTFVsRlphNTlkeUxITk96SkVoZXVVVnpBa1l3akRreWd2R2hQVCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370675),
('lpzonXAcEx5dKxakNARQxKd1gwZ3JSaWI2ohQkp7', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZ05xcVNDRnBpU0l1dzNQQ3c4S1FLSjJCSmE0d2h2SjR0RGFFMDJLUyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373662),
('LWpjjOVHSwhVtVU27AmsORKA9dKViX4obWBNdzGj', NULL, '121.29.178.228', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMUh4bm5xN1N4aERuVkdVQTBvSG15b2dONDkyR1ZhWnU1VUdjRDk5QiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374302),
('MIlC220qulPRkyiFsijzv73zZdEKeJTxxmjx0d9C', NULL, '112.193.171.107', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZVRBenVtODUzYlp2RjNvYW5mOFU0MVB4T1U1MFU0bk9FeXJZSDAxaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372243),
('mJf9GiCzZJTVvrH7iFX9rXTGp7xbOdiyFLeO1QsY', NULL, '44.220.188.195', 'Mozilla/5.0 (Windows NT 6.2;en-US) AppleWebKit/537.32.36 (KHTML, live Gecko) Chrome/53.0.3064.57 Safari/537.32', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWXlvdHZjajh2RzFQeDUwQTVxOXRUQjB4dmdEUW5iZWhWNTNhcHJxRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736377061),
('mO5iH4XFlVzXoyBaQ8nMMdctOdKq9FDloX5vfcTM', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQjBwY0lZMWtsSFl6VUlGY0JYRm1NVm1mSWJiWGphaW5rM0tvWnFhWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372169),
('mvHTgxZZwoLCtzRSBfWIA6VWhFuVRmbKplRJgADQ', NULL, '183.98.157.150', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVzJmNmpHTlZmdnlaczhkcVI1d0Znb2ZtdXR3QWdJYlZxb0JNemU5ZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736384240),
('N77Bl4BfGnctyAWMOOeeS6Ng6HKLynQbtmfeOlKb', NULL, '182.88.191.210', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicTlmRVdFcEU0MXpEZmdEdjZJOVB4SVFUbllXcFVvOG1xOHZtc0ZtdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373881),
('NbEVPANK8tGO5EdPAJSzLuUmD4lawiJ3BY0jc95r', NULL, '46.19.138.234', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVm96T1lobk9GbktpcHNkdFBPVHY3RTNSTzlNYW5QcTFUNmV6UVE2diI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370890),
('ndLvVcSE9nl2bpGeGdMUlWIQuctAk18pFAE60du7', NULL, '223.199.172.219', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSlQ4M2NWV1M1eWdEYW9UVTN4SWRSRHpQR0RvMU1sSDFPTk1XRnNqNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373798),
('NOolGP4IiTSW7zqE7zFo4JsMCIC0BY9rfhjMz5Ie', NULL, '111.224.221.124', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUTFyamUwUFE5a3lpM3NkNHN5Q3lwUGpmc29nZ0pkTU05dnlYQm9URSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371174),
('NuBtpU4hsNWOMVdNVJQql8Ri7q5h5n1iwxLBNSup', NULL, '36.112.30.31', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibnd4bXBSdG53WE8xWlBzR0VPckkxeTN2TzB2NlVYWjZCZkd6UzNRcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374536),
('nx33HyRwnTTjY0FCdLEm06aGnKJ0QGxQUljJHwoo', NULL, '119.4.193.96', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTGlvMlpOcm90bG9PbUdzalZodTU4RlkzVnRBYWhhSUNwY0lETEN6RyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373145),
('O4qcHqS0LjKh1zEJzSX8ZunLzP2Hkp8BQ0m9TNcC', NULL, '1.24.16.106', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTGFiOU1EcnluV0ZEM00ydjFvTmNZY0NSbk52SllKVGdUcmE4clVhOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371803),
('O5HatLAmF8RaHPpkbXF55Dein3uyOgm0OXO6Drar', NULL, '193.34.212.75', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWWtWdTdDZVhESW1DaGNwdnlFOUZJRmRobVhFQ0I1V05wZDNNZGh2YiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371732),
('OADlpzL19mcMgDcUyNIkb4CmYh5hXrPQJKBlvrZr', NULL, '14.32.162.178', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2pyZjhPZ29tODJEalRkUmlHNWhGQkRneUJYRkRlYU1XeW5hSlNoMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736369841),
('oFd45xn4ROvT9afiLuaeTloLdF8bI58ljIF61gHt', NULL, '123.178.210.140', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRVdtRmd2MDFpcFQ3dlBGRXNSUjdhd0hKc1o0ZnRYOHg1VzR3YjNvMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370300),
('OGvlzNqSv1C8Ivwokt52QEBLDsXkXq20Ai1Ord4N', NULL, '175.30.48.76', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOWt6NVRNVXFlWEFVRHk0U1llNzY2SXZkajRGUThaZ2NEdnVhOVJHViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372206),
('OqdAGjVChxNwJRZEmfvXfFrt2cuCkwjlYo5RUgZo', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiN2lIcGlmd29EcUZBMkpzbmRqRjFFTTVLNmVPRGZsdHo4MGVWTGN3eiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736388723),
('oSILEcfQ0BdcUnEINDlXyOdB7BWq0x70WshRZRXZ', NULL, '36.32.3.116', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieTVmS2N1eVFXZmd2aXdwc2M4Nml2cGdqaVZCZllLalAwZ01wTXlPYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370574),
('oZofaoqQpy7RQcHtYGj06CTTXG6KPPtmTFEPTIZT', NULL, '60.186.28.13', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidFE2cTBadG1iS2R6Rm9jWWRreGRuamRnM2dDb1lXMWN3emtDWm5ZeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374344),
('ozrGmKv4q3FX2mLXH6v9NJCBJPKibwNnMovCTPo4', NULL, '111.224.220.25', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMFZLSTN5TzlYYzNPMlVyVjBxTHF2TmdZQUI4N1R4TG1ZU3U3UE9QeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372467),
('Pf1j8orI7AUFl5WqRVGEhhBebeJFj7FqFguzHGeU', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOXdLRWtiVmRvckM5UHF4STVVVlhabVFMTHdxT3kzaWZkcms5UGVRSyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736384352),
('pik5WDqOGSTm6o9m4u4Bd6RB2zv3eQoW5ezaqrvg', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibElpbWtJZE9GOVB5a1haVjdOQUo1czRnSVNDbVczYUxIMmhROXBtMCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373165),
('pQCUvLhpr2ocUGpLkHrDW16EsyaFjJXZEW0GjDqS', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoic2RPNU93T3dxT0NQQmhCQUtSbU9QWkJlbnNyRWF4aHkydTcxYkNiciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736379983),
('Q2BEthbLfv3xHYQ9uolBdTbzwUub8jA0N0yTeqqg', NULL, '111.113.88.44', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQmN1czJydWFKTW85YnFlTFY3cm1qeEVLU2xPQU1IUW04aVdxVXdIZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372574),
('QIpN9tA6QmN6OKoiqII86Pz25QCNF83Gjvhx5ko7', NULL, '223.167.168.253', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWVk1bDR4TGtWaURRMVVhSEFEM1BuOE15dUtQS1FPWmhFUXhIa2pXTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371400),
('QkGQsgwrSwwnnNBv4tr204iodSbwvT1csMDEQ79a', NULL, '104.209.35.76', 'Mozilla/5.0 zgrab/0.x', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieHNmZElZWGdMMG1uMGg2ejF0TU5ia3pVZFl0QVR6bUU0UEtSY2wxVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736377685),
('Qmf1EqlCxfsT96fPdu3LMpKwvkNqtyWTsCN75lW2', NULL, '121.29.178.159', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYml4ejJHRlNXWWdyUTBaOFhXMnFWTFVXcUlGQkQwS2xQck5QbHJWaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374204),
('qq7UMx5VE4ygQOGwozm0ArRRN41V5kpmoayW90h5', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWmRhc2haamtaVk9vYW94NVVIcFRINGs5T0FoZkoxYU1JZENFa3lMSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736369415),
('qtbmJvgnnoMNEO2QcKTuHah96sZ06O9OXtnRl5el', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZkpmYTBhQ1o4NENReXNaYzlESXdjYkZTSG11bDI1WjR5T0RndUNCdCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736367827),
('QUcN9dXPt98ZmCpOm2PRhThqZJVNNWy7bTswNrhZ', NULL, '1.85.218.93', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYjR2VzFWMWV1Wnh2SHZ1M2Rvelg2bzVVNk5qeFN3aWZrUjZNakd0byI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373274),
('RACDm3cxg8cHSVjffiGRKbVOuHigo6tVultSzorQ', NULL, '220.250.11.13', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOURDTFYwdFlUbEdJbjcyaHVlRTk2aUo5SlluRmNmNmcwb0pZdWhDcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372812),
('RktEFt70DVtXYqTv7KgfQm7FWfi78XK4e2DbEEeY', NULL, '80.82.70.133', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicEZNRWU3N3NEV2JMRnc1Mjh0Q3plendobnJXNXhyN0tzTHd4MjVVSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTg6Imh0dHA6Ly9raG9raHV1ci5tbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736377161),
('SD7rdJ292C7PUF6z8UnWaOtFdb4evb94PYOxF77z', NULL, '109.205.213.198', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUlVSY2VxNkFaMWNGdklvaEp5cUN1RmJiZmI4TXJlaXpBdU9WVFFucyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736368776),
('sFSbhhKhMhjzGcJKwcXxLrACwsT1JHypDNz0Ifml', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMmlBaWFWNElVSzl3enNSV1JUOXRTc1RoZWRweEpUbmZ4ZFJjeU9iTCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736367129),
('sqiMBYB0qcfNzR2MLpiGsfQmx3h8VKhoC1j18q0J', NULL, '113.206.131.200', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTlRGWVVNUUJnbTJyNTJDMTJCd09GaEw1aVhLbWdtT2FBVmxBZE1HQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371242),
('stjKRcYTa92b5fhrwiGOpxQ9om8KnR9nyyP0ingy', NULL, '185.196.220.253', 'Hello World', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid2g2U3NpY0ZocldNbkkzZkxGblAzUVRrMkZNTnVndThQb1NmdGpWNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736368114),
('t9jmDSWcMeYdvaykBx4EDpFzIO8fRbVduNZswjdj', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiemlMWkNLMUZnM3M4Q3UyYWpXNTRXc2h3NURwNHhOS0ZOM0EzYW44aSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736385109),
('Tcy2VsZIItdovxyCIbIvvZyoQTGcDMgQEQHioSgZ', NULL, '123.157.193.93', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieFk0OFB6WGJETzQ1dGg2UFJRenhpenVCTGtvdEhCVHc2d09ybzVQRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370782),
('thPjTbOkUG6M53obHzdOYEbtT5kvwN6oqOkEQuDt', NULL, '43.248.108.158', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT0NERTZFdTZ5bTlWYkN6OW01NFpkTm1oMlRLMVFNMWZvR1RPMXRwOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374249),
('tjk0vY8lh0XrMVWwms4MRHBgrY9E4a9pbAzLlUHB', NULL, '60.13.138.84', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTGE3bzV4SXFrcEx1SWJZYU92cGRkY1Y5MFRCeW1paHZtOWJBY3ZGUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371467),
('tlfGiEIul8sEPnVmZb8a41Vz5aO0mBDaApGuI0o9', NULL, '223.199.190.154', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidFYwVjRBNUlGeDJXcHhIRTZDOXpGY2doaGJqTElJazFZYzU0M1VlSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370379),
('TMdSNLm2sLuN6AefIqMzCKzJhIwTSw5on0yF0fW4', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoib0hoTUdMdEppTjNkSEVSajZYdWxDcFNTbXJnSnM2NXBXcE44REF1MSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736368582),
('To7aThGLoqFivVK6Ptx1eHfx559nLVHS8Uve59MK', NULL, '91.223.3.201', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWWJhbExIeGk2NEtHZWdUQkpLMXc1bk85OGtHOVU5WlhaUzh0TUlWRCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373608),
('tX4bNgB2TRWFxcQ9BeiTUz2i8hd9kl2ExnPSLZdd', NULL, '182.138.158.252', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFBBMEx3eDhndVRWT1B0Um4yUU9XUDlsb3ZYZ1ZadnVpTm16TkVIYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372342),
('TXG7E4FVZwju53gyjXQWvfHbYs571F5PJLQf0ix9', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSkFkY0JyN3E2c0tJTElhVEhKNVNUSHpuTERaNVljWHNpempQeWJIayI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736378530),
('UAh047evJ18UHqv2rwUvSCvtrDGWeqRlrEhyyLJq', NULL, '83.222.191.146', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSDFHNEhnMWpsM0JvbjdUSHB3UWJoeGNVMlpHR1hBaThrMlI2dlpwRyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366773),
('UD2d2y7NH2jGaS0AxJZqAG40JatFid0UWNmZxvtv', NULL, '221.11.51.28', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicGFGc1EwQlNrWGRGQ3AwbGFVUFc0Qk5BWWxPWjluU1FOYkhsdUJYeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371019),
('UsipGXzeY6kqkqpzx9eZWF6gDq4i65HgNSSi0xom', NULL, '110.177.181.19', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2hWdEtTb1dveXNkNzNDcjlQbURPd2pTelZSMFAzN08zVzNaWDY3diI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372979),
('v4WhBYj4rzsz2IsPt2LRHINULbU509F0kvng24RE', NULL, '49.113.95.169', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicHgwbkhTOU40dXhBQ3ZQVkNWQzhlR3piM1puN0k2WW1xRVFrUHVQcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370483),
('V53GnAKJEnc0T9oFIKUj2LGd3CwQdFtY31rIQV41', NULL, '58.59.233.134', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRjUxVzBGZEFGQUdsMDl1UzdLcWtiSkNseE9iYUNQbjVrV1l0ZkJabyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736370236),
('vFaJI9m2R2KOveZMGbMUiuswMadYzSwvdnwGk1JM', NULL, '149.50.96.45', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZHNySHdFaklGY3FWWXhDRGdncWkzb1RhTlh6ZXNqSHNyM0I2bXJ3UiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374277),
('VLA6S7iFBzynGM4HLKAJuPAjYXreA6iwgZyZMRrb', NULL, '69.110.172.17', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTUc3blNtWVRrTmg5SFBsMHRDNENJTHFudlNseER3THRKelNHUHNXTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373508),
('wT0TDyuXBx5ZtVelCe17bu3sJvcEzZnzQAGaChvl', NULL, '111.113.89.120', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS01kRjlaOHlWNG9nelNGMmlTd3ZLZ2V5aGFuVUNJd0Q3Q0tNTFp1cSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373557),
('wx3wLbiL7D2TQOm076QImC8d3DbeIySSwCq5EKbp', NULL, '112.193.170.139', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZFdIV3M0S0VyZWNYdVRUMFNTVjU4OFh6YlRiUDloQk5kcElJUWZuaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372915),
('xEy9NQF0c07gUS7ZjkovrnDIyTTmqipHaApJ7fKq', NULL, '36.32.3.11', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRnRYaU5zYzVGUnlHb2xhOWJXenNkOWhnYUJkdmF0Smk3eG1IMTU3QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736372040),
('XhP6XA7hECqUDOf2HPfMyTpXUWN4bXqf4JBPnBse', NULL, '175.30.48.61', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRzJtV0dQT2N3RWhJbUtLd2JCakF4Wkcybk1VZFZCa2xjY2RyckZGUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374457),
('XlFvFVI7jMwEaWDQD76HgzpkUDhZVkEypvndyy3z', NULL, '24.211.170.136', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidHlxMEFWb2NMeUFBTVc3RDR1Vzc4NHRwUVpGNHU4bnNWQnBlcVI1NCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736374866),
('xPEvBPICfIwNNYKvHfTEjF17HZlfu2o5e1qOOYbM', NULL, '222.103.249.161', 'curl/7.88.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNXphZ1ZjRHpuWGl5TWtSWEJTVFA0Z1g0VlVYU3FvNGlHWmMwMHMzNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736383621),
('xy7lPgDsRV1wYQ67sGV8si04TIijpwM4ziLNyezN', NULL, '83.222.191.146', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiR21TZnpNblVDSUt2eTBjajJXTG1SbGtiakQxQzZwa3lCY0NnNFpiQiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366505),
('XzScHBM2Ba8dnOvFRyyU5OxkjE6TCRvKhCGd0OpS', NULL, '31.220.1.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaDRyTWtOZ3RNQmR5blpxUzNad2JYSnEyOTJIbVNvR1d1d1dOWkllVSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736368917),
('Y8FshSCdPdait4IAf1m0nsqvxOUBIxaJETJzAzIh', NULL, '185.16.39.104', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidDdHUGxDeEVKNnptYnZXb1g1eVoyZmhDazZSb0pGSXRFOU8yam83NCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736383730),
('ycrjfQpb3VpHcS6Mjl9vrL0iSTPj9EKcoA7bDq8U', NULL, '61.158.26.204', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOWRRNzRDUmYxbDRTUDY0OTZlUmllbVpjbTdmSUNTQlgzSlJpRHVvUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373217);
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('yEcadGfAK449MPQKVwlEAAk5bTUeKLpy8ugFcReS', NULL, '185.196.220.253', 'Hello World', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidlhMS1NpcHBxTFM3T0libnREUWlqR1JselNGVHI1dVIySVdKM2VrRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736386609),
('Yoc4U9QhGcdugSfVs6l5spFCZoWHDHMUmXKGe9KP', NULL, '218.104.149.102', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRG9UNEUxeklRclh5QTM3Z3Q4SEs2THphOE1pQUZCRzE1eGZtOTVjRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371518),
('yOicai2UHZ5aEDVbW4V1gvvw4YnvG30b69NuGiRD', NULL, '83.222.191.146', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:71.0) Gecko/20100101 Firefox/71.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYzNNZ21nNjRKVEpwa3kyekhPQjc4bTRNblRISkxRSDVKOWlGaE9acyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736375203),
('Ys9Y35h2ynaADXNLlq08fvnsIqbtMeHAWRrykVjS', NULL, '83.222.191.146', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiek1uZUVVQ1BWZWVZRnNiUVBLTWl0WFRFc1pMTWN0bldPaGJLakFkWCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736366710),
('ZOk2tFoaH99ayh2IVfEBYR5TLfaC8sti9YUb1bnK', NULL, '36.106.166.211', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEpIQUw1UHJlbGh0Q0dUVFozanlNdllvQng0M2c1aUdyOVJsakJJdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736373866),
('zwfI4IGdchB2pECvqC9knsBOfHp6al8Ux9cf4XJY', NULL, '61.158.26.254', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQk1NZWttSm1TVXFZVjJIWDBIWVVjVWN2WExHYUtLZVF4TWxCR1hPcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjA6Imh0dHA6Ly8yMDIuMTI2Ljk0LjI5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736371627);

-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

CREATE TABLE `templates` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `frontend` int(11) NOT NULL,
  `banner` varchar(455) DEFAULT NULL,
  `about_overview` longtext DEFAULT NULL,
  `about_background` varchar(45) NOT NULL,
  `partners` longtext DEFAULT NULL,
  `partners_background` varchar(45) NOT NULL,
  `portfolios` longtext DEFAULT NULL,
  `portfolios_background` varchar(45) NOT NULL,
  `posts` longtext DEFAULT NULL,
  `posts_background` varchar(45) NOT NULL,
  `services` longtext DEFAULT NULL,
  `services_background` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `templates`
--

INSERT INTO `templates` (`id`, `name`, `frontend`, `banner`, `about_overview`, `about_background`, `partners`, `partners_background`, `portfolios`, `portfolios_background`, `posts`, `posts_background`, `services`, `services_background`, `created_at`, `updated_at`) VALUES
(2, 'Загвар 1', 1, '', '<h1 class=\"max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white\"><span>\n                            Building digital <br>\n                            products &amp; brands</span>.\n                        </h1>\n                        <p class=\"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400\">\n                            This free and open-source landing page template was\n                            built using the utility classes from{\" \"}\n                            <a href=\"#\" target=\"_blank\" class=\"hover:underline\">\n                                Tailwind CSS\n                            </a>{\" \"}\n                            and based on the components from the{\" \"}\n                            <a href=\"#/\" class=\"hover:underline\" target=\"_blank\">\n                                Flowbite Library\n                            </a>{\" \"}\n                            and the{\" \"}\n                            <a href=\"https://flowbite.com/blocks/\" target=\"_blank\" class=\"hover:underline\">\n                                Blocks System\n                            </a>\n                            .\n                        </p>', '#111827', NULL, '0', NULL, '0', NULL, '0', '<ul role=\"list\" class=\"pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700\"><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Dynamic reports and dashboards</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Templates for everyone</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Development workflow</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Limitless business automation</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Knowledge management</span></li></ul><p class=\"text-white lg:text-xl\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>', '#1f2937', '2025-01-01 06:56:34', NULL),
(3, 'Загвар 999', 0, '', '<div class=\"text-center sm:text-start\"><h1 class=\"text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7\">The best way to<span class=\"relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0\">showcase</span>your saas</h1><p class=\"sm:text-lg text-default-500\">Make your saas application stand out with high-quality landing page designed and developed by professional</p><div class=\"flex gap-3 mt-16\"><input class=\"inline-block text-sm border border-default-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 \" id=\"Email\" aria-describedby=\"emailHelp\" placeholder=\"Your Email\" type=\"email\"><button for=\"Email\" class=\"bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3\">Sign Up</button></div><div class=\"flex flex-wrap items-center gap-5 mt-5\"><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">Free 14-day Demo</p></div><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">No credit card needed</p></div></div></div>', '#ffffff', NULL, '0', NULL, '0', NULL, '0', '', '', '2025-01-02 06:56:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `subdomain` varchar(455) NOT NULL,
  `template` int(11) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 1,
  `expire_date` datetime NOT NULL DEFAULT '2024-12-01 00:00:00',
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `subdomain`, `template`, `phone`, `role`, `expire_date`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admins', '', 0, '', 0, '2024-12-01 00:00:00', 'admin@dev.mn', NULL, '$2y$12$sYK1FEO66lKgjXYWmBFxtuL46ZFu6wJ4en7RxTgcNnR6sEqV5rxce', 'co8RiiLN7F8Jm2ZYmp2CyZm3QlSk4AMv5jIeULbGWj4jVXybdlWiIEcj1o42', '2024-12-22 08:44:40', '2024-12-24 00:37:29'),
(2, 'Tests', 'test', 1, '85819992', 1, '2025-02-01 00:00:00', 'test@gmail.com', NULL, '$2y$12$sYK1FEO66lKgjXYWmBFxtuL46ZFu6wJ4en7RxTgcNnR6sEqV5rxce', 'goN0VjbhKncWOcnZIo7U5uINKu4A8EOdsx2qbds4lRXQQvtGL7hEx0C5Hjk9', '2024-12-22 08:44:40', '2024-12-25 20:49:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `templates`
--
ALTER TABLE `templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `templates`
--
ALTER TABLE `templates`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
