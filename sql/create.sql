-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema coins
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coins
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coins` DEFAULT CHARACTER SET utf8;
USE `coins` ;

-- -----------------------------------------------------
-- Table `coins`.`coins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coins`.`coins` (
  `coinID` INT NOT NULL AUTO_INCREMENT,
  `typ` ENUM('Bullion', 'Exclusive', 'Commemorative') NOT NULL,
  `coin` VARCHAR(255) NOT NULL,
  `shortD` TEXT NOT NULL,
  `longD` TEXT NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `metal` VARCHAR(255) NOT NULL,
  `quality` VARCHAR(255) NOT NULL,
  `denom` VARCHAR(255) NOT NULL,
  `year` INT NOT NULL,
  `weight` FLOAT NOT NULL,
  `price` INT NOT NULL,
  `obv` TEXT NOT NULL,
  `rev` TEXT NOT NULL,
  PRIMARY KEY (`coinID`))
ENGINE = InnoDB
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
