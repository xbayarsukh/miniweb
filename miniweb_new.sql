-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: miniweb_new
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_general_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `connection` text COLLATE utf8mb4_general_ci NOT NULL,
  `queue` text COLLATE utf8mb4_general_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faqs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(455) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
INSERT INTO `faqs` VALUES (1,'йужйыбөйы','<p>&nbsp;бөй ыбөшйыбө йыбөйыбө йыбөйышбөй ыбөйшыүбөгмйыби өйыбшөйыб өийыбөйыб ө</p>',2,'2024-12-27 11:35:40','2024-12-27 11:35:40'),(2,'faq1','<p>what is your name?</p>',1,'2025-01-12 21:58:14','2025-01-12 21:58:14'),(3,'age','<p>How old are u?</p>',1,'2025-01-12 21:58:34','2025-01-12 21:58:34');
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general_settings`
--

DROP TABLE IF EXISTS `general_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `general_settings` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `overview` longtext COLLATE utf8mb4_unicode_ci,
  `banner` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vision` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `misson` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_background` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `options` longtext COLLATE utf8mb4_unicode_ci,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favicon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general_settings`
--

LOCK TABLES `general_settings` WRITE;
/*!40000 ALTER TABLE `general_settings` DISABLE KEYS */;
INSERT INTO `general_settings` VALUES (1,'<div class=\"text-center sm:text-start\"><h1 class=\"/tight font-semibold mb-7\">Бидний тухай</h1><p class=\"sm:text-lg text-default-500\" style=\"text-align: justify; \">Манай компани рорөо өл өцоууцж йыииб фгцугц. иыб йрй иыи бцужцу тиб ушушуш тытбө.&nbsp;<span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-weight: var(--bs-body-font-weight);\">Манай компани рорөо өл өцоууцж йыииб фгцугц. иыб йрй иыи бцужцу тиб ушушуш тытбө&nbsp;</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-weight: var(--bs-body-font-weight);\">Манай компани рорөо өл өцоууцж йыииб фгцугц. иыб йрй иыи бцужцу тиб ушушуш тытбө</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-weight: var(--bs-body-font-weight);\">Манай компани рорөо өл өцоууцж йыииб фгцугц. иыб йрй иыи бцужцу тиб ушушуш тытбө</span></p><div class=\"flex gap-3 mt-16\"></div></div>','uploads/banners/1736748198.png',NULL,NULL,NULL,'{\"about_title\":\"\\u0411\\u0438\\u0434\\u043d\\u0438\\u0439 \\u0442\\u0443\\u0445\\u0430\\u0439\",\"about_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"news_title\":\"\\u041c\\u044d\\u0434\\u044d\\u044d \\u043c\\u044d\\u0434\\u044d\\u044d\\u043b\\u044d\\u043b\",\"news_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"service_title\":\"\\u04ae\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\",\"service_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"portfolio_title\":\"\\u0422\\u04e9\\u0441\\u04e9\\u043b\",\"portfolio_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"partner_title\":\"\\u0425\\u0430\\u043c\\u0442\\u0440\\u0430\\u0433\\u0447 \\u0431\\u0430\\u0439\\u0433\\u0443\\u0443\\u043b\\u043b\\u0430\\u0433\\u0443\\u0443\\u0434\",\"partner_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"faq_title\":\"\\u0422\\u04af\\u0433\\u044d\\u044d\\u043c\\u044d\\u043b \\u0430\\u0441\\u0443\\u0443\\u043b\\u0442 \\u0445\\u0430\\u0440\\u0438\\u0443\\u043b\\u0442\",\"faq_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0422\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\"}',NULL,NULL,NULL,'hi','uploads/favicons/1735182715.png','uploads/logos/1735203143.jpg',1,'2024-12-18 23:31:01','2025-01-15 20:34:55'),(2,'<h1 class=\"max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white\"><span>\r\n                            Building digital <br>\r\n                            products &amp; brands</span>.\r\n                        </h1>\r\n                        <p class=\"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400\">\r\n                            This free and open-source landing page template was\r\n                            built using the utility classes from{\" \"}\r\n                            <a href=\"#\" target=\"_blank\" class=\"hover:underline\">\r\n                                Tailwind CSS\r\n                            </a>{\" \"}\r\n                            and based on the components from the{\" \"}\r\n                            <a href=\"#/\" class=\"hover:underline\" target=\"_blank\">\r\n                                Flowbite Library\r\n                            </a>{\" \"}\r\n                            and the{\" \"}\r\n                            <a href=\"https://flowbite.com/blocks/\" target=\"_blank\" class=\"hover:underline\">\r\n                                Blocks System</a>.\r\n                        </p>','uploads/banners/1735202298.png',NULL,NULL,NULL,'{\"about_title\":\"\\u0411\\u0438\\u0434\\u043d\\u0438\\u0439 \\u0442\\u0443\\u0445\\u0430\\u0439\",\"about_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"news_title\":\"\\u041c\\u044d\\u0434\\u044d\\u044d\",\"news_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"service_title\":\"\\u04ae\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\",\"service_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"portfolio_title\":\"Portfolio\",\"portfolio_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"partner_title\":\"\\u0425\\u0430\\u043c\\u0442\\u0440\\u0430\\u0433\\u0447 \\u0431\\u0430\\u0439\\u0433\\u0443\\u0443\\u043b\\u043b\\u0430\\u0433\\u0430\",\"partner_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\",\"faq_title\":\"\\u0422\\u04af\\u0433\\u044d\\u044d\\u043c\\u044d\\u043b \\u0430\\u0441\\u0443\\u0443\\u043b\\u0442 \\u0445\\u0430\\u0440\\u0438\\u0443\\u043b\\u0442\",\"faq_desc\":\"\\u0422\\u043e\\u0432\\u0447 \\u0442\\u0430\\u0439\\u043b\\u0431\\u0430\\u0440\"}',NULL,NULL,NULL,'Infitech','uploads/favicons/1735188310.png','uploads/logos/1735792979.png',2,NULL,'2025-01-02 04:42:59');
/*!40000 ALTER TABLE `general_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_general_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_no` varchar(455) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `package_id` int NOT NULL,
  `month` int NOT NULL DEFAULT '0',
  `day` int NOT NULL DEFAULT '0',
  `package_price` double(14,2) NOT NULL DEFAULT '0.00',
  `total_price` double(14,2) NOT NULL DEFAULT '0.00',
  `qpay_information` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `payment_status` enum('paid','unpaid','','') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'unpaid',
  `is_callback` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'MWEB241205-9929',2,1,0,14,200.00,200.00,'{\"id\":\"c8852d83-495b-4ff9-a84e-6b8a3bf4313b\",\"terminal_id\":\"95000059\",\"amount\":\"200.00\",\"qr_code\":\"0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\",\"description\":\"MWEB241205-9929 \\u04af\\u0439\\u043b\\u0447\\u0438\\u043b\\u0433\\u044d\\u044d\\u043d\\u0438\\u0439 \\u0442\\u04e9\\u043b\\u0431\\u04e9\\u0440\",\"invoice_status\":\"OPEN\",\"invoice_status_date\":\"2024-12-05T06:19:57.586Z\",\"callback_url\":\"http:\\/\\/202.126.94.29:8500\\/quick\\/webhook?invoiceId=MWEB241205-9929\",\"customer_name\":\"\",\"customer_logo\":\"\",\"currency\":\"MNT\",\"mcc_code\":\"7372\",\"legacy_id\":\"793236732462593\",\"vendor_id\":\"332fdd07-a4d3-434d-848b-3e84afec1e45\",\"process_code_id\":\"78493cf0-7d4a-4932-bb9c-e8ba6219f9af\",\"qr_image\":\"iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABmJLR0QA\\/wD\\/AP+gvaeTAAAd8ElEQVR4nO3daZhUxbkH8H\\/3IAoMyL5m2FxQAYOZABFxA8lg1Bi5Ipj4EK8BieBFwSQwicljIl5Bw8UVBWQxRlRkcOPKIogMSAREEUUJiwzDMiwKGWAGhln6fuBKmJ7uc7q63qrTNfP\\/PY8fnHNOnZrunpc6b1e9FYpEIhEQETkgHHQHiIgSxYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInIGAxYROYMBi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInJGLd0GQqGQRD8SEl26K\\/repo97nRtN93VR6Yvqtaol0Pzu7dWe9L11Xpdk7q9C8vNk+u\\/K9v287q2CIywicgYDFhE5gwGLiJyhncOKJpkjUH2uNp2rUaGa4\\/I73yvnEGQ+wu9+qn2TzjGpvG7RpPNnKveKJp2X9BPk37EXjrCIyBkMWETkDAYsInKGeA4rmsl5MjbnE6nyyzFIzgnzYzqXpzIPS5dq7sZkPk\\/1dZWc5xfNZE4rlea6cYRFRM5gwCIiZzBgEZEzjOewTNLN++jMw1HNUam0HYvX76abpwkyR6H6e\\/vReS1082OSnz\\/pfKvpeVu2cIRFRM5gwCIiZzBgEZEznM5hRQtyjo7LtblUr7f5uqmer5KbMT1HzOb9q0uOyg9HWETkDAYsInIGAxYROcN4DivIZ+kgcxR+50rXfDdJshaT6blzfvdTaVt3floq1XjX+bykUj6MIywicgYDFhE5Q\\/yR0HZ53jPZ3AbM9jQGnRLJqo8XkqWmdR8nUvl1M\\/l5kpZKZXl0cIRFRM5gwCIiZzBgEZEzQpFU+s5SmHTZFMmStiptq97PdLkYyWkNfqTL9AT5HkpO\\/1A9v7os3eEIi4icwYBFRM5gwCIiZ1gvL6PyLG27ZK1feyavtbndvPTyFpN9Nbk1m+1t4lQ+z6o5KOmclcklTTrvGUdYROQMBiwicgYDFhE5w\\/haQtVnbZVzVcvjSubApOex2NyeymZ70nlI1fN11u\\/pbL0mcb4X6RyVSj7Nry3V61VwhEVEzmDAIiJnMGARkTOMryWUnhul0pbNuU1+TOYBgp6vZrNEsiqdPKTpvnjdy+Yaylhs5i1VcIRFRM5gwCIiZzBgEZEzrNfDMllzW+dequ0FmXuJPm47NyeZL5GeP2RyCzK\\/81Xp5LRSea2gansqOMIiImcwYBGRMxiwiMgZ2jksk2uadNdmSdfpkczNBJkHsLkOTbUtaSbXrvpJpTyRydwe1xISEcXAgEVEzmDAIiJnGK\\/prpOHkn5W9mtPpX3pOTs210UGucbS9ho4yZyVdK5Gp6a7H5NrE4Pc45AjLCJyBgMWETmDAYuInCE+DyuazrOz7noq6eM6bUVLpdpcQebXbNdFT6X5a6bakiCZl5LMeXGERUTOYMAiImcwYBGRM4znsPxIzsPSvXc0nRyW7vk615teEyeZs1K9lyqT84uCXGso2bZf+7ZfFy8cYRGRMxiwiMgZ2ktzpB8\\/vNryu7ff9ba3v5Lsi869TJ+v8jih01Yy53td79LjaSqVTA7yEZEjLCJyBgMWETmDAYuInKGdw5LOUdjclin6fJWclemcgsr50vmKVCp1I\\/2eSvbNj2Suz0+QU1Vs4giLiJzBgEVEzmDAIiJnBD4PS3ILdtPnmyy54Xcvk0tMdEtL61wrmXOKJZW3rleZE6Z6L8mlYCbLNKniCIuInMGARUTOYMAiImek3Dwsk+VlJHMQ0jkEk3kB02u\\/vPqm+57ZXINpessxHabXxbqybRxHWETkDAYsInIGAxYROUN8q3rd53aT8z8k5wDp3iua5JZjfkznhSTfQ7++mNwm3XRpaZVrdem8D7p5as7DIqIaiQGLiJzBgEVEzhDPYUnmGGzmDHTZrkdkMk\\/kda9E+mZyraFknX+Tv5cq059dnddZeos6HRxhEZEzGLCIyBkMWETkDO2t6n1vYLAekUtru3SvD7JuuirJOWOq9wpyn8xoJudd6eb+JF8nm+8BR1hE5AwGLCJyBgMWETnDeg5LhW7XbOYcgqylJJ3\\/UCVZX156rpPOXoAuv6eq7UuuXTWZI+UIi4icwYBFRM5gwCIiZxhfS6hKZ42cV1ux2Fwbpnu9ZN5Juh695J6JpuuDq+wFaHoNps21rjp1+qX3bdDBERYROYMBi4icIb7Nl2S5EJNbqCdDsv0gH1elyzXrlCaR3v5MhfSjTJBleHTTI9FU3kObj7YcYRGRM8ST7lT9hcNhZGZmIjMzE126dKly\\/Lt\\/cUtLS6scu+eee\\/Dxxx9j\\/fr1qKioMN5Xql60Z7oHuUpctS\\/S53tdK\\/0NpuTjr+69i4qKUK9evaTv\\/10bubm5WLBgAXJycrB\\/\\/\\/6E+ipdJUPnXjZ3i7FdqSRVHwnFA1Y0nV9W+oWxOQ1C8g8pVns2y80sWrQIWVlZxvJqkUgEixcvxrRp0zB\\/\\/nyttnRKS6sKMoD59SWazmff5nIpPwxYCu3X1IDlEgas2KpLwGLSnSoZOHBg0F0giosBiwAAHTp0wJIlSzB37tygu0IUl\\/a3hNLDXpPJPsklJ6q\\/p87SCOm++N1LVeGRYzj8ryP49ttDKC0rxzeHjqCiohx165yDxuem46zatdGsaSM0a9YEaWG7\\/0bqzPszmeBPpj2VtoNMMZjEaQ2k7F+FR7Hpy6345LPNeHf5Biz6KvY3fFVEgN\\/87DJc3r0zLu1yITq0z7AewMht4gX8bM6Slk7CS45qTH9FrjPCSuZ1Ky0rw4bPvsLbC1di\\/Nw1ytfH0u\\/Cphj683645sruaN6siUibkisrUqlIo9+9dKfVuDLCYsBKsC\\/Rx2tKwCotLcXK1evx+JQcLPrqgNJ9Eu8QMGl4XwwakIU2rVtoNcWAlVhfamzACvI53eaauOjjtgNWNK\\/A7nVu27ZtsWrVKmRkZHheAwCffvYVHp70Et7YsMf3XBEVEcz43c8wcEB\\/1E+vm9AlOu9DkP\\/gxTquQjp3rDO9yOrkcAas5I67GLBatGiB1atXo2PHjp7nHz1WjGmzXsdvpr\\/veZ4pV7VvhCfHD0e3Sy\\/2PbdVq1bYt29f3OMMWMm159V2kAGLGc8aok6dOnjrrbd8g1Xezt0YPPShwIIVAOTmHcZld0zAi3PeRmlZmee5b7\\/9NurUqWOpZxQ0BqwaYvr06ejZs6fnOevWf44f3fYQ3v0ywW\\/9DLtzQg7+MmEqjhUVxz2ne\\/fumDlzpsVeUZCMPxL60Um6q7Rl4rhK3\\/xIJi6j+3LXXXdhxowZntesWLUO14x4RqwPku7u0wl\\/HX8f6qf7L7iWXEaSSkuYbCb0\\/e4X5NItBiyN4yp982MqYHXo0AEbN25Eenp63PNXf\\/QJrhj2JGBuqZu2u\\/t0wqRH7kd6Pe9kPAPWKdU1YPGRsJqbOnWqZ7D6fNMWXHF3agcrAJj2\\/j8xcfIs35wWVW8MWNXYwIED0a9fv7jH9x34BkPum2yxR3rGz12LV15\\/1\\/OcwYMHW+oNBSHwiaM6bE\\/k05nUarO0SCgUQq1atbBlyxZ06NAh5jWlZWUYPW4Snl3ypbF+mfLp37PR7dKLtNtJ5YnIpj8\\/Ou3zkZDEDR06NG6wAoB3F+c6GawA4P4\\/PY+jx+J\\/c0jVFwNWNRQOhzF27Ni4xw8c\\/BaDHnzJbCcM\\/iu84uvDeP2Nxcbap9TFag3V0E033YT27dvHPT775XdQUi63AcStP\\/geBv70SlzcqSOaNmmERg0bIBwOo6j4BAqPHEHezj34aN0XePilXBSXywSyXz32JrKu64U2rfTWHpJbxHNYqUxyWoTJJUmxqOQYFi5ciP79+8c8tmtPAdpeP06kT6Ou74phv7wZl1x0PsJh\\/\\/4VHjmKJcs+xOjHcrCn6KT2\\/Sfd3Rdj7h0S89iSJUuQlZVlNFcjuXRM9fNiejmMzutkcvoHA9YZqkPAatGiBQoKCuKe\\/\\/TzczBqit7jVLv02pg1YSiu7t0joUAV7eA3hzBx8ouY9M4GrX4gAux\\/fzKaN2sc83CrVq1QUFBQ6WcMWMm178VmwGIOq5oZMGBA3A\\/bkaPH8OD097Ta792uIXJf+zOuvapnUsEKAJo1bYxHH\\/ovPH\\/\\/jVp9QejUDP14br31Vr32KeUwYFUzN94YPwis\\/+QLHClNPnfVK6MBXp36e7TNaJ10G98566xaGPaft+K5+27QaueFOe+hPM6GrF6vBblJPGCFQiHP\\/1TPV\\/nPr23J3y0SiXj+Z7pvZ97rO+FwGFdffXXca5au+Fj5PqdVRDBt0n3aBfbOFA6F8KshAzDmpu8n3caSfx5EXt7umMeysrJQq1atpF9n3fdI9fOqQ\\/rvTPLekjjCqkYyMzPj7shcXHwcE3LiPz75mZ09AJ0vOj\\/p6+M566xaGHv\\/nWh+TvJfWG\\/ctCXuse7duyfdLqUeBqxqJDMzM+6xnfl7UZFk7jOzZTr+4+YfJ9krf82bNcbT45LfD3HN+vgTYL1eE3IPA1Y10qVLl7jHtu\\/YlXS7Dwz7CdITLFmcrB\\/37YWzk0ziP\\/bWhrjfRHXt2lWnW5RitANW9PNrdC7H7\\/xofrkhlbb9zlftm9e5qs\\/xqjkvr\\/t\\/18bIkSPjnv\\/1zuTrsl9x+Q+SvjZRDc9tgD\\/e0TupayPl5TjwzaGYx4YPH57w58f050vlfMkcZyK\\/q8rfme5xHRxh1RA78+PXPffS5\\/wmyGjTSrg3sfXqkfxo6NDhQsGeUKpiwKohVnyW3CNh316XwPAXP6e1a5v8dInjHmWUqfpgwKoh1m8+mNR1F3RsI9yT+BrUr5\\/0tUeLTgj2hFKV8cXPOssbVKf4m16eoFMiWXcZh04uoCISAc5O7t8mmyu36tevB0RQqfrpr6+7CNf2vqzSeSWl5RjyyNxKPztWfDyhe0jOE1JdHhNN57WVrgWn87di8zPCag01QAhA0nMaLCovL69Sqrl3z664bUDlhdyHC48BUQHL9IRFSg18JKwBQqEQEE5L6tpjxfYetQoLj1b5Wb2651T5WcmJqn1q3DD5x0lyR0qPsIIs0eJ3f9UhtOojo8rjRSKv05BrzsPfVm33PS\\/aZ198rXxNshqeWx8fTr8fX+\\/YjU8\\/34Yn\\/3cjmsWoxFBaWlrlZ2fVih2QCwsL0bBhw6T6YzKFEOt8nWujz7f5eKqbelHBEVYN0bZ106Sue27xFyg+bmeUVafOOejV8zLcMfgmTHpkNE5+MgOhUBgfrd2AXbsLUFp6asecAwe\\/rXJts6axS8xEl5cht6X0CIvkXHRBBoA1yteVVkTwxaYt6PHDS+U75SMcDmPhe6sxfu6pftcOhzCs3yUoOh5V\\/C8CNGp0bsw29u9PjV2sSQZHWDVE+3bJT0+Y++YywZ7E9vmmLXjsiVnY9NVWVPx\\/uZiiomKMf\\/XfQfZkRQTPLt6E2blbK117Q9eWcXeF3rx5s7lOk3WBVxyV\\/HbHZuXDaKa\\/pdLt++49+5BxffyNKfx8\\/uqD6HLJBVp9iKe8ogL3\\/e6veHbJJgDALd3aYPiQn+BkaRl+OnaW7\\/XP3tsfI+6+Xfm+uu9ZkNNk\\/KjmsGzS+SxzhFVDtGndEtddkFweCwDGT\\/obTpTo12GPJXfl2tPBCgDe2LAH\\/cdMTyhYAUC37+vvUUhuYMCqIUIhYPDNVyR9\\/Wvr8jFl+quoEJ7PtTN\\/D3457oWEzm1fvzb++5dXVvpZCEDni2OP\\/I4fT2wyKbmDAasGufLyy\\/xP8vDAtGV4+bV3RIPWmwuWY1dR5WkKlzSuE\\/PcP93zE2Q\\/MBQHlz+BnPF3oM95jfHQz3vh3AbpMc9fuXKlWD8pNYiXl5EsDaxbHsZkeRlVuiU8vPp25s+9Ssycf357DO7eVuv3GPJoDp6Y8pLY4+GIYYMrjZraptfGklf+gjUzH8BV7f89fyotHMKN\\/U+Vf27apBEG\\/LQfFs19HPcOHxy37QULFlT5mclSvpJlhk1+XmKdr3IvnbZ0c7HaSXfVCWkqb6Ru4tD0xD+va1X7ojpx9MzjZx5r3rw59u3bF7c\\/y3PXoM+9Uzz7kojbftgWf\\/zNEOVE\\/O49+3Dg4LeoXz8dF5zXDgBQVlaGx596Eb+fnYvVL4zG5T26AQCOHDmGF16cjwemL8PLD96Gn9+mtmFF69atsXfv3ko\\/C\\/JLnkTfw1jXRrO5jtHkpFNVDFge7bsYsADvjVRLSk7ihtvHYdm2qpMvkzHmpm4YdEtfdOl8IerWqbqMBgCOnyjBl5u34Z2FufjzKx+d\\/vkz916PEcMGIxQCysrL8dnGzci8rHOV69d\\/ugkXdzoPdWMs04ln6dKl6Nevn9Fvyxiw1NvSxYDl0b6rAeuWW27B\\/Pnz495rxap1uGbEM579UVUrHMKIrM7oeklHNEg\\/lYMqOVmGDV9sx7SFG3GsLPZWXO89ORzXXdvLs+33V3yENR9vwq9\\/NRCNGjZIqD8DBw7EvHnzGLDiqLEByySdD0Ay7Uezub5KMhinpaVh+\\/btaN++fczjZeXlGPXbx\\/Hc0q+U7mlCo9pp+GT+w2jfNvbE1ryde9Bz4J9w4EQZerSuj\\/956C5c8SPvks35+fno2LHjqeoPUbyChC7J91j3s55KgdmvPRX8lrAaqqiowMSJE+Mer5WWhrH3D0G9tODf\\/sMny\\/GHh6eiKEY9q28P\\/Qsjxz6JAydOrSFcu\\/coet\\/9JN5Z+IFnmxMnTowZrMh9wX9iyYiZM2dix44dcY+3a9sar02402KP4puzZiemzZpX5edLln2Id7+svBbwxi4tce1VPeK2lZ+fjxkzZoj3kVIDA1Y1dfLkSWRnZ3uec32\\/q\\/DonfF3irZpzNSl+GDl2ko\\/u21Afzw1Muv0\\/7evXxvPTBiF9HrxtxzLzs5GSUmJsX5SsIwn3f1YTdgZfPZOpaS7ymtafPwEHvjDE3g+BfJZrerUwpqcR5DxvZanf1ZeXoFps17HiKfexbrZv8UPfxB\\/78Xly5ejT58+Yv0x+Z5FH9fNSUl\\/waRSq8vqml0GrPjHo7kasIqKiuJuYQ8AR44ew+jsyZiZu82zjzYMuaIjnp88DnXOOfv0zyoqKrB1+050uqBD3OuKi4vRrVs3bN26Ne45qhiwEruXzYDFR8IaYPTo0Z7HG9RPx+RHR+PX111sqUfx\\/e3DrzHjxZxKPwuHw57BCgDGjBkjGqwoNXGE5XE8mqsjrFAohDlz5uD2271LsBQfP4GnnpuD7NkrPM+zYeXUUeh9eWZC586dOxeDBg0S7wNHWIndy6lHwioNGpwvYnO+h1\\/7un2Rniio0\\/aZKioiWPheLgaNm42i8tiTPW04r8HZyJ03Hq1bNhdt1ytI6P6DFk3nPTc9B1HlfqZfFxV8JKRKwuEQbsi6GpvefgT3BPiIuP1ICR4cPxUlHous8\\/LyLPaIUgEDFsXULqM1nn78t\\/hgyr3oe36TQPowK3cbZv\\/9zZjH9uzZI\\/qNILmBj4QeauIjYSwlJSfxj7Ub8Pzsd\\/DaunyttqI1qZ2Gvt9vg7ke7Z5ZwQE4NbLq06cPduzYoZW74SNhYu2l0iOh9aS7ZHJP8l6qTL9p0uvcVO4dT0Ukgm3bd2LVPz7FK2+twtIt3yTVTjgEZN\\/aA32uykSPzEtRr15dfJ23Cx\\/krsUfpizE\\/uOVC\\/p1aVoHS199BC2aVx3p6fxDEeR7EE066S4dZLzasokBK0k1MWBFt7G34ADy8vcgb+ce\\/HPbbuTv\\/QYv5m4HTpadikonK\\/Cjzs3Rq2sGOrRtiQ7t2qBjh++hXUZr1K0bu6po8fETWLf+c7w6f1mlyazDru2Eq3q0wx2\\/+EWl8xmwYl\\/PgBWvAQaspNp2PWAl0r7u77Bz114sz12LidMXYfOh48Dh7YjsWlXpHAas2NdX14DFjVRJnNQferuM1mjX+lzUOvQPYO9JIL0VIpGI1UBCqSXwpLvf9TYZnfBmufaS1739rs3Ly4tbS8uW\\/Px8ZGdn4+WXX\\/Y8L5VGoiYT5SZHTH59SaXJ4ZzWQFV06tQJI0aMQH6+7DeCicjPz8fIkSNx4YUXYs6cOdbvT6mNI6wzcIRV+fy0tDTcfPPNyMnJ8TxfwtKlSzF16lS88cYblYrvuZTr4whLvW1VDFhnYMBK7nwdo0aNwrx581BQUBDzOANWcm2rqrEBS7kDAU6mM73gWOV4NJ0PpG5fJP\\/QCgsLUVBQgP3792Pz5s0YPnx4wtfGIvkPosmJxbHoBCjVtqQ\\/fypt657v2RYDVnLtMWAlxuaMbNXrGbCSaz\\/IgMWkOxE5gwGLiJxh\\/ZHQdPLQq22\\/vvhdr\\/NYZpLpWfaSj7u2H8NsSqXXSVKQXxhF4wiLiJzBgEVEzjD+SKj7bYdKW34kH0dsz9HRWSQu\\/RZLPhrb\\/jbV65tev7aleX2eTP7eyZyvcq0fPhISUY3AgEVEzmDAIiJnpFwOSzJXY\\/O5Pprpr4JV8h+m153prFaQppIzk17nKjnjW\\/peOqTztTo4wiIiZzBgEZEzGLCIyBnG62H5UcnN6N7b5SoErvbVZJ4wkfZU2tetQiB5b1Umc1q2c31eOMIiImcwYBGRMxiwiMgZ4vsSSpZ0MVk1Ubdv0lU7tcrGWpwfpHp\\/m+WETLNZ696P6r11\\/i5T6T3iCIuInMGARUTOYMAiImdYX0soudbL5nq96OO2yxKrML2jjwrbdcNU2jc9z8pkjTO\\/81WlUr01LxxhEZEzGLCIyBkMWETkDPF5WCZzMX5Mr0OTzDmo3ktnDZzueyKZo5B8zRM532u+m3SOymZux\\/R7fGZ7qTT\\/jCMsInIGAxYROYMBi4icEfhW9V5srzuTvF+Q++tJrudMpH2V+Wom51WZ7lu0IOe3+fUlmqv7EEbjCIuInMGARUTOYMAiImdoz8Myud7KdP4jmk6tcp22kjnf61xVfter5mJ06vKrsjnXKZrJNZfS8\\/h0pFINM46wiMgZDFhE5AwGLCJyhvY8LNNzgFTuZbo+lk0687Ck6eQOTc918jvfrz8qTOZQpT\\/bkq+Dzf0Z\\/XCERUTOYMAiImeIl5fxozO8lH4ENFmORnrZhldfTS\\/FUb2fTts225N+j4IsiSzdN5XpRTanf3CERUTOYMAiImcwYBGRM7RzWDbL8aZS\\/kP33n7Hdcrvmt4SSuV+fvkO3eVXNrdP82Myv6ZK9fdW6Tu3+SIiSgADFhE5gwGLiJwhPg9LN6clWUZFt4SL5Dwak0stpOcPqbavwnTeUKV93TxPkKTzlJLvi8kcF0dYROQMBiwicgYDFhE5Q7xEsuq8Gy+2S2zorK\\/SZXIelvQ6NZPlnKXnZfn1XaUvJtkuw6NyveRrqosjLCJyBgMWETmDAYuInGG8HpbOs7n0XCbJbcNs1iPyI7leM5m+BLntkx+V18ZkzTJV0mtyTW77ZRNHWETkDAYsInIGAxYROcN4DktyfZZ0zkr6fir3Mpkv0c212MxR2N6SXaVWuXTfbNZjs3lvm\\/WxOMIiImcwYBGRMxiwiMgZ1vcl1NmCXToHZXO+kW5NKhWptPZLck1brON+95PMp+h+PnT2\\/jNZo93vuG5dfUkcYRGRMxiwiMgZDFhE5IxQJJUKVSsyXTddch6WdG4lyPryfvfzEvTekpL7XprMeeq2Lfn5k35ddHCERUTOYMAiImcwYBGRM8RrupukWr9bOo9kcv2ezfVY0n31Oi5dxymV1odKzo2SrmmmymQtOEkcYRGRMxiwiMgZDFhE5AzxtYQm61pL31uyRrfpWkp+99O5VjpPZPJ1k8wj2Zwbp3ut6VxdKtelOxNHWETkDAYsInKG9W2+\\/OgMF22WwQhy63BVpldfmXwUssn0Ui+Vc1Uf03Uf01QEuf0ZR1hE5AwGLCJyBgMWETnDeolkSTbLDgOVn8VtV+WRzO2p3ktyioV07kVnmkPQpaS9plh4nat7r0Tup3JvmzktjrCIyBkMWETkDAYsInKG0zmsIMvImtxqXlcqbZUlXV4mmuTWWrp9Ue2byZyobt5J5XVSbVsHR1hE5AwGLCJyBgMWETnDeA7L4V3ErJYtVqUzj0Y3p6VyP9vzrCTLN9sse216KzbVdbY2P18qOMIiImcwYBGRMxiwiMgZ2lvVB7nNlx\\/puVKS669MPuebnncVZA0rmzWqoklvI6eTTzP9WdYpmcyt6omIwIBFRA5hwCIiZ2jnsIiIbOEIi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkDAYsInIGAxYROYMBi4icwYBFRM5gwCIiZzBgEZEzGLCIyBkMWETkjP8DYDTkrIeo7F8AAAAASUVORK5CYII=\",\"invoice_bank_accounts\":[{\"id\":\"c38cd215-b884-44c4-ad7b-ed5cb7a785b6\",\"account_bank_code\":\"040000\",\"account_number\":\"453256871\",\"account_name\":\"\\u0418\\u041d\\u0424\\u0418\\u0422\\u0415\\u041a \\u0425\\u0425\\u041a\",\"is_default\":true,\"invoice_id\":\"c8852d83-495b-4ff9-a84e-6b8a3bf4313b\"}],\"urls\":[{\"name\":\"qPay wallet\",\"description\":\"qPay \\u0445\\u044d\\u0442\\u044d\\u0432\\u0447\",\"logo\":\"https:\\/\\/s3.qpay.mn\\/p\\/e9bbdc69-3544-4c2f-aff0-4c292bc094f6\\/launcher-icon-ios.jpg\",\"link\":\"qpaywallet:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Khan bank\",\"description\":\"\\u0425\\u0430\\u0430\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/khanbank.png\",\"link\":\"khanbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"State bank 3.0\",\"description\":\"\\u0422\\u04e9\\u0440\\u0438\\u0439\\u043d \\u0431\\u0430\\u043d\\u043a 3.0\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/state_3.png\",\"link\":\"statebankmongolia:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Xac bank\",\"description\":\"\\u0425\\u0430\\u0441 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/xacbank.png\",\"link\":\"xacbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Trade and Development bank\",\"description\":\"TDB online\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/tdbbank.png\",\"link\":\"tdbbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Social Pay\",\"description\":\"\\u0413\\u043e\\u043b\\u043e\\u043c\\u0442 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/socialpay.png\",\"link\":\"socialpay-payment:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Most money\",\"description\":\"\\u041c\\u041e\\u0421\\u0422 \\u043c\\u043e\\u043d\\u0438\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/most.png\",\"link\":\"most:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"National investment bank\",\"description\":\"\\u04ae\\u043d\\u0434\\u044d\\u0441\\u043d\\u0438\\u0439 \\u0445\\u04e9\\u0440\\u04e9\\u043d\\u0433\\u04e9 \\u043e\\u0440\\u0443\\u0443\\u043b\\u0430\\u043b\\u0442\\u044b\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/nibank.jpeg\",\"link\":\"nibank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Chinggis khaan bank\",\"description\":\"\\u0427\\u0438\\u043d\\u0433\\u0438\\u0441 \\u0425\\u0430\\u0430\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/ckbank.png\",\"link\":\"ckbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Capitron bank\",\"description\":\"\\u041a\\u0430\\u043f\\u0438\\u0442\\u0440\\u043e\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/capitronbank.png\",\"link\":\"capitronbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Bogd bank\",\"description\":\"\\u0411\\u043e\\u0433\\u0434 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/bogdbank.png\",\"link\":\"bogdbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Trans bank\",\"description\":\"\\u0422\\u044d\\u044d\\u0432\\u044d\\u0440 \\u0445\\u04e9\\u0433\\u0436\\u043b\\u0438\\u0439\\u043d \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/transbank.png\",\"link\":\"transbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"M bank\",\"description\":\"\\u041c \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/mbank.png\",\"link\":\"mbank:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Ard App\",\"description\":\"\\u0410\\u0440\\u0434 \\u0410\\u043f\\u043f\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/ardapp.png\",\"link\":\"ard:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Toki App\",\"description\":\"Toki App\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/toki.png\",\"link\":\"toki:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Arig bank\",\"description\":\"\\u0410\\u0440\\u0438\\u0433 \\u0431\\u0430\\u043d\\u043a\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/arig.png\",\"link\":\"arig:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"},{\"name\":\"Monpay\",\"description\":\"\\u041c\\u043e\\u043d \\u041f\\u044d\\u0439\",\"logo\":\"https:\\/\\/qpay.mn\\/q\\/logo\\/monpay.png\",\"link\":\"Monpay:\\/\\/q?qPay_QRcode=0002010102121531279404962794049600241210334102927540014A00000084300010108CAXBMNUB0220gIVI8bWKTWhRFP6I_ya052047372530349654032005802MN5912POSTMERCHANT6011ULAANBAATAR62240720gIVI8bWKTWhRFP6I_ya07106QPP_QR78157932367324625937902358002016304CC41\"}]}','unpaid',0,'2024-12-28 21:30:48','2024-12-28 21:30:48');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(455) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` double(14,2) NOT NULL,
  `month` int DEFAULT '0',
  `day` int DEFAULT '0',
  `body` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (1,'1 САРЫН БАГЦ',10000.00,1,0,'test','2024-12-28 22:01:24','2025-01-09 04:48:21'),(2,'2 сар',1000.00,12,23,'<p>testing&nbsp;</p>','2025-01-09 04:54:50','2025-01-09 06:02:50'),(3,'3 сар',333333.00,3,30,'<p>Package body</p>','2025-01-15 09:29:47','2025-01-15 09:30:48');
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(455) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(455) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,'teset','uploads/partners/1735297821.svg','test','<p>testsetsetsetsetse ets ets etsetse te</p>',2,'2024-12-27 11:10:21','2024-12-27 11:10:21');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolios`
--

DROP TABLE IF EXISTS `portfolios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolios`
--

LOCK TABLES `portfolios` WRITE;
/*!40000 ALTER TABLE `portfolios` DISABLE KEYS */;
INSERT INTO `portfolios` VALUES (1,'test','uploads/portfolios/1735292823.png','<p>tests test teststetsetset</p>',2,'2024-12-27 09:47:03','2024-12-27 09:47:03'),(2,'tests2','uploads/portfolios/1735293275.png','<p>tset adsgadags dfgsfdgsfdg sdfgsdf g</p>',2,'2024-12-27 09:54:35','2024-12-27 09:54:35'),(3,'hi','uploads/portfolios/1735297756.png','<p>asdf asdf asdf a</p>',2,'2024-12-27 11:09:16','2024-12-27 11:09:16'),(8,'Давуу тал','uploads/portfolios/1736912827.png','<p>Давуу тал бол давуу тал.&nbsp;<span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.&nbsp;</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span><span style=\"background-color: var(--bs-card-bg); color: var(--bs-body-color); font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Давуу тал бол давуу тал.</span></p>',1,'2025-01-14 19:47:07','2025-01-14 19:47:07'),(9,'Аюулгүй байдал','uploads/portfolios/1736912872.png','<p>Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;Аюулгүй байдал&nbsp;</p>',1,'2025-01-14 19:47:52','2025-01-14 19:47:52'),(12,'Боломж','uploads/portfolios/1736913010.png','<p>бцуөару уөжу .sdkjaerg wjifweig jwehw ewjriwuiaefr jad asd aajwe wkl lakd skdfjif ke</p>',1,'2025-01-14 19:50:10','2025-01-14 19:50:10');
/*!40000 ALTER TABLE `portfolios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (5,'medee','medeelel','<span style=\"color: rgb(90, 90, 90); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: center;\">Мультикал 803 загварын дулааны тоолуур нь томоохон үйлдвэр, албан байгууллага, дулаан дамжуулах төв, худалдаа үйлчилгээний барилгуудад зориулагдсан.&nbsp;</span><span style=\"color: rgb(90, 90, 90); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: center;\">Мультикал 803 загварын дулааны тоолуур нь томоохон үйлдвэр, албан байгууллага, дулаан дамжуулах төв, худалдаа үйлчилгээний барилгуудад зориулагдсан.&nbsp;</span><span style=\"color: rgb(90, 90, 90); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: center;\">Мультикал 803 загварын дулааны тоолуур нь томоохон үйлдвэр, албан байгууллага, дулаан дамжуулах төв, худалдаа үйлчилгээний барилгуудад зориулагдсан.&nbsp;</span>','uploads/posts/1736747755.png',1,'2024-12-26 02:24:29','2025-01-13 00:28:21'),(6,'jgf hsdhdfgh','hdfg hdfgh dg','<p>dfg hdfgh dfghdfg h</p>','uploads/posts/1735208838.png',1,'2024-12-26 02:27:18','2024-12-26 02:27:18'),(7,'s fdgsdfg sdfgs','sfd gsdfgs dfg','<p>sdf gsdfgs fdgsfdg sdfg</p>','uploads/posts/1735208854.png',1,'2024-12-26 02:27:34','2024-12-26 02:27:34'),(8,'sdf gsdfg','sdf gsdfgs df hsfdh','<p>sdf gsdfg sdfgsfd</p>','uploads/posts/1735208864.png',1,'2024-12-26 02:27:44','2024-12-26 11:24:21'),(10,'ыбйөй','й ыбөйыбө й','<p>йыб өйыбө йыбөйыбө йбы</p>','uploads/posts/1735266184.png',2,'2024-12-26 03:18:35','2024-12-27 02:23:04'),(11,'asdf asdgfdgsfss','asd fasdf','<p>asd fasdf a</p>','uploads/posts/1735266157.png',2,'2024-12-26 11:21:12','2024-12-28 10:18:36'),(12,'adsfa','asdfasdf asdf ads','<p>a dsfasdf asdf asdf</p>','uploads/posts/1735263960.png',2,'2024-12-27 01:46:00','2024-12-27 01:46:00');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'asdf asdf asdfasd','a sdfasdf asdsfdg','uploads/services/1735264068.png','<p>fas dfasd fasdf asdf adss sdf</p>','2024-12-27 01:47:48','2024-12-27 01:49:10',2),(2,'test','testsetse','uploads/services/1735265112.png','<ul role=\"list\" class=\"pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700\"><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Dynamic reports and dashboards</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Templates for everyone</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Development workflow</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Limitless business automation</span></li><li class=\"flex space-x-3\"><svg class=\"flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\"></path></svg><span class=\"text-base font-medium leading-tight text-gray-900 dark:text-white\">Knowledge management</span></li></ul><p class=\"text-white lg:text-xl\">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>','2024-12-27 02:05:12','2024-12-27 02:05:12',2),(3,'Service1','blqllkkdek','uploads/services/1736747627.jpg','hehehehheheh','2025-01-12 21:53:47','2025-01-12 21:53:47',1),(4,'yooAhIn','actor','uploads/services/1736747864.jpg','<p>geujwepiwef</p>','2025-01-12 21:57:44','2025-01-12 21:57:44',1);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_general_ci,
  `payload` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('1exGr9rjykKlRxfHXBclVCqAfveR2eBR4OezLvnM',1,'192.168.1.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36','YTo1OntzOjY6Il90b2tlbiI7czo0MDoieUhBNlFiRThWbGVoY29YNHIzcDZGdFMxVURKMDh0MGsxb3llZ0VhVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM6Imh0dHA6Ly8xOTIuMTY4LjEuMjo4MDAwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==',1737009176),('b28rkTNey7HKuCftUDDNpdbFxUawoQVP1l4ApEcg',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiT0hGY05pQmxlTzM3NFdiTzRsZFd0dW05eElqYUFFNFJnRGFKTkcwWCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly90ZXN0LmxvY2FsaG9zdDo4MDAwIjt9fQ==',1737009176);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templates` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `frontend` int NOT NULL,
  `banner` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_overview` longtext COLLATE utf8mb4_unicode_ci,
  `about_background` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `partners` longtext COLLATE utf8mb4_unicode_ci,
  `partners_background` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `portfolios` longtext COLLATE utf8mb4_unicode_ci,
  `portfolios_background` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `posts` longtext COLLATE utf8mb4_unicode_ci,
  `posts_background` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `services` longtext COLLATE utf8mb4_unicode_ci,
  `services_background` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(455) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES (2,'Загвар 1',1,'uploads/banners/1736927900.png','<h1 class=\"max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white\"><span>\r\n                            Building digital <br>\r\n                            products &amp; brands</span>.\r\n                        </h1>\r\n                        <p class=\"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400\">\r\n                            This free and open-source landing page template was\r\n                            built using the utility classes from{\" \"}\r\n                            <a href=\"#\" target=\"_blank\" class=\"hover:underline\">\r\n                                Tailwind CSS\r\n                            </a>{\" \"}\r\n                            and based on the components from the{\" \"}\r\n                            <a href=\"#/\" class=\"hover:underline\" target=\"_blank\">\r\n                                Flowbite Library\r\n                            </a>{\" \"}\r\n                            and the{\" \"}\r\n                            <a href=\"https://flowbite.com/blocks/\" target=\"_blank\" class=\"hover:underline\">\r\n                                Blocks System\r\n                            </a>\r\n                            .\r\n                        </p>','#111827',NULL,'0',NULL,'0',NULL,'0',NULL,'#1f2937','2025-01-01 06:56:34','2025-01-14 23:58:20','uploads/templates/1736927900.jfif'),(3,'Загвар 999',0,'uploads/banners/1736927829.png','<div class=\"text-center sm:text-start\"><h1 class=\"text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7\">The best way to<span class=\"relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0\">showcase</span>your saas</h1><p class=\"sm:text-lg text-default-500\">Make your saas application stand out with high-quality landing page designed and developed by professional</p><div class=\"flex gap-3 mt-16\"><input class=\"inline-block text-sm border border-default-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 \" id=\"Email\" aria-describedby=\"emailHelp\" placeholder=\"Your Email\" type=\"email\"><button for=\"Email\" class=\"bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3\">Sign Up</button></div><div class=\"flex flex-wrap items-center gap-5 mt-5\"><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">Free 14-day Demo</p></div><div class=\"flex items-center gap-2\"><i class=\"i-tabler-check size-5 text-green-500\"></i><p class=\"text-sm text-default-700\">No credit card needed</p></div></div></div>','#ffffff',NULL,'0',NULL,'0',NULL,'0',NULL,'','2025-01-02 06:56:39','2025-01-14 23:57:09','uploads/templates/1736927829.PNG'),(4,'Загвар2',2,'uploads/banners/1736928023.png','<p>sdfd</p>','#ffffff',NULL,'0',NULL,'0',NULL,'0',NULL,'#1f2937','2025-01-15 04:14:46','2025-01-15 00:00:23','uploads/templates/1736928023.png'),(5,'Загвар2',2,'uploads/banners/1736928023.png','<p>sdfd</p>','#ffffff',NULL,'0',NULL,'0',NULL,'0',NULL,'#1f2937','2025-01-15 04:14:46','2025-01-15 00:00:23','uploads/templates/1736928023.png');
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `subdomain` varchar(455) COLLATE utf8mb4_general_ci NOT NULL,
  `template` int NOT NULL,
  `phone` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL DEFAULT '1',
  `expire_date` datetime NOT NULL DEFAULT '2024-12-01 00:00:00',
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admins','',2,'',0,'2024-12-01 00:00:00','admin@dev.mn',NULL,'$2y$12$sYK1FEO66lKgjXYWmBFxtuL46ZFu6wJ4en7RxTgcNnR6sEqV5rxce','co8RiiLN7F8Jm2ZYmp2CyZm3QlSk4AMv5jIeULbGWj4jVXybdlWiIEcj1o42','2024-12-22 08:44:40','2024-12-24 00:37:29'),(2,'Tests12','test',1,'85819992',1,'2025-12-01 00:00:00','test@gmail.com',NULL,'$2y$12$sYK1FEO66lKgjXYWmBFxtuL46ZFu6wJ4en7RxTgcNnR6sEqV5rxce','goN0VjbhKncWOcnZIo7U5uINKu4A8EOdsx2qbds4lRXQQvtGL7hEx0C5Hjk9','2024-12-22 08:44:40','2025-01-08 22:00:56');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-16 14:48:17
