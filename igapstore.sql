-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2022 at 09:16 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igapstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `igapvendors`
--

CREATE TABLE `igapvendors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobileno` int(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cityid` int(11) NOT NULL,
  `pincode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `igapvendors`
--

INSERT INTO `igapvendors` (`id`, `name`, `email`, `mobileno`, `address`, `cityid`, `pincode`) VALUES
(1, 'samiksha', 'sam@gmail.com', 0, 'herale', 76, 416005),
(2, 'varsh', 'varsh@gmail.com', 0, 'sablevadi', 6, 41),
(3, 'varsh', 'varsh@gmail.com', 0, 'sablevadi', 6, 41),
(5, 'h', 'rsh@gmail.com', 0, 'rukadi', 7, 1),
(6, 'sam', 'sammed@gmail.com', 0, 'sangali', 76, 416005),
(7, 'sam', 'sammed@gmail.com', 0, 'sangali', 76, 416005),
(8, 'sam', 'sammed@gmail.com', 0, 'sangali', 76, 416005),
(9, 'sam', 'sammed@gmail.com', 2147483647, 'sangali', 76, 416005);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `igapvendors`
--
ALTER TABLE `igapvendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `igapvendors`
--
ALTER TABLE `igapvendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
