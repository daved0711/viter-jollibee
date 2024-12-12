-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 01:28 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_food` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` varchar(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_food` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(6, 1, '', 'chicken', 150, 29, '2024-12-11 15:25:37', 2024),
(7, 1, 'chicken-2.webp', '2pc Chicken', 150, 30, '2024-12-12 07:52:28', 2024),
(8, 1, 'burger-1.webp', 'Regular Burger', 40, 28, '2024-12-12 07:36:44', 2024),
(10, 1, 'sides-3.webp', 'Rice', 30, 33, '2024-12-12 07:53:06', 2024),
(11, 1, 'dessert-1.webp', 'Peach Mango Pie', 60, 39, '2024-12-12 07:54:04', 2024),
(12, 1, 'nav-spaghetti.webp', 'Spaghetti', 80, 45, '2024-12-12 07:54:28', 2024),
(13, 1, 'value-meal-3.webp', '2 Chicken Combo', 300, 46, '2024-12-12 07:55:10', 2024),
(14, 1, 'steak-1.webp', '3 Burger Steak', 120, 47, '2024-12-12 07:55:38', 2024),
(15, 1, 'palabok-1.webp', 'Palabok', 100, 48, '2024-12-12 07:55:58', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
