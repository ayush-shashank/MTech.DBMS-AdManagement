-- MySQL Workbench Forward Engineering
SET
  @OLD_UNIQUE_CHECKS = @ @UNIQUE_CHECKS,
  UNIQUE_CHECKS = 0;

SET
  @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
  FOREIGN_KEY_CHECKS = 0;

SET
  @OLD_SQL_MODE = @ @SQL_MODE,
  SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema AdManagement
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema AdManagement
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AdManagement` DEFAULT CHARACTER SET utf8;

USE `AdManagement`;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Company`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Company` (
  `CompanyId` INT NOT NULL AUTO_INCREMENT,
  `CompanyName` VARCHAR(45) NOT NULL,
  `PhoneNumber` DECIMAL(10, 0) NOT NULL,
  `Industry` VARCHAR(45) NULL,
  `Website` VARCHAR(45) NULL,
  `AnnualRevenue` DECIMAL(10, 2) NULL,
  `NumberOfEmployees` INT NULL,
  `CreateTime` TIMESTAMP NULL DEFAULT NOW(),
  `UpdateTime` TIMESTAMP NULL,
  PRIMARY KEY (`CompanyId`),
  UNIQUE INDEX `Company_Name_UNIQUE` (`CompanyName` ASC) VISIBLE,
  UNIQUE INDEX `Phone_Number_UNIQUE` (`PhoneNumber` ASC) VISIBLE
);

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Product`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Product` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `CompanyId` INT NOT NULL,
  `ProductName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(10, 2) NOT NULL,
  `Category` VARCHAR(45) NULL,
  `Description` VARCHAR(45) NULL,
  `ProductImage` VARCHAR(45) NULL,
  `CreateTime` TIMESTAMP NULL DEFAULT NOW(),
  `UpdateTime` TIMESTAMP NULL,
  PRIMARY KEY (`ProductId`),
  INDEX `fk_CompanyProduct_idx` (`CompanyId` ASC) VISIBLE,
  CONSTRAINT `fk_CompanyProduct` FOREIGN KEY (`CompanyId`) REFERENCES `AdManagement`.`tbl_Company` (`CompanyId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Address`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Address` (
  `AddressId` VARCHAR(45) NOT NULL,
  `CompanyId` INT NOT NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`AddressId`, `CompanyId`),
  CONSTRAINT `fk_CompanyId` FOREIGN KEY (`CompanyId`) REFERENCES `AdManagement`.`tbl_Company` (`CompanyId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_User`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_User` (
  `UserId` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `DateOfBirth` DATE NULL,
  `PhoneNumber` DECIMAL(10, 0) NULL,
  `EmailId` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `CreateTime` TIMESTAMP NULL DEFAULT NOW(),
  `UpdateTime` TIMESTAMP NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE,
  UNIQUE INDEX `EmailId_UNIQUE` (`EmailId` ASC) VISIBLE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Employee`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Employee` (
  `employeeId` INT NOT NULL,
  `userId` INT NOT NULL,
  `companyId` INT NOT NULL,
  PRIMARY KEY (`employeeId`),
  INDEX `fk_tbl_Employee_tbl_Company1_idx` (`companyId` ASC) VISIBLE,
  INDEX `fk_tbl_Employee_tbl_User1_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_Employee_tbl_Company` FOREIGN KEY (`companyId`) REFERENCES `AdManagement`.`tbl_Company` (`CompanyId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tbl_Employee_tbl_User` FOREIGN KEY (`userId`) REFERENCES `AdManagement`.`tbl_User` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_AdCampaign`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_AdCampaign`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_AdCampaign` (
  `CampaignId` INT NOT NULL AUTO_INCREMENT,
  `ManagerId` INT NOT NULL,
  `ProductId` INT NOT NULL,
  `CampaignName` VARCHAR(45) NOT NULL,
  `TargetAudience` VARCHAR(45) NULL,
  `StartDate` VARCHAR(45) NULL,
  `EndDate` VARCHAR(45) NULL,
  `CreateTime` TIMESTAMP NULL DEFAULT NOW(),
  `UpdateTime` TIMESTAMP NULL,
  PRIMARY KEY (`CampaignId`),
  INDEX `fk_CampaignProduct_idx` (`ProductId` ASC) VISIBLE,
  INDEX `fk_CampaignEmployee_idx` (`ManagerId` ASC) VISIBLE,
  CONSTRAINT `fk_CampaignEmployee` FOREIGN KEY (`ManagerId`) REFERENCES `AdManagement`.`tbl_Employee` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_CampaignProduct` FOREIGN KEY (`ProductId`) REFERENCES `AdManagement`.`tbl_Product` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Platform`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Platform`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Platform` (
  `PlatformId` INT NOT NULL,
  `PlatformName` VARCHAR(45) NOT NULL,
  `PlatformType` VARCHAR(45) NULL,
  PRIMARY KEY (`PlatformId`),
  UNIQUE INDEX `PlatformName_UNIQUE` (`PlatformName` ASC) VISIBLE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Advertisment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Advertisment`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Advertisment` (
  `AdvertismentId` INT NOT NULL AUTO_INCREMENT,
  `AdCampaignId` INT NOT NULL,
  `PlatformId` INT NOT NULL,
  `AdContent` NVARCHAR(2048) NOT NULL,
  `Type` VARCHAR(45) NULL,
  `CreateTime` TIMESTAMP NULL DEFAULT NOW(),
  `UpdateTime` TIMESTAMP NULL,
  PRIMARY KEY (`AdvertismentId`),
  INDEX `fk_Ad_Campaign_idx` (`AdCampaignId` ASC) VISIBLE,
  INDEX `fk_AdPlatform_idx` (`PlatformId` ASC) VISIBLE,
  CONSTRAINT `fk_AdvertCampaign` FOREIGN KEY (`AdCampaignId`) REFERENCES `AdManagement`.`tbl_AdCampaign` (`CampaignId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_AdPlatform` FOREIGN KEY (`PlatformId`) REFERENCES `AdManagement`.`tbl_Platform` (`PlatformId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Advertiser`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Advertiser`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Advertiser` (
  `UserId` INT NOT NULL,
  `PlatformId` INT NOT NULL,
  `UserPlatformId` VARCHAR(45) NULL,
  PRIMARY KEY (`UserId`, `PlatformId`),
  INDEX `fk_AdvertiserPlatform_idx` (`PlatformId` ASC) VISIBLE,
  CONSTRAINT `fk_AdvertiserUser` FOREIGN KEY (`UserId`) REFERENCES `AdManagement`.`tbl_User` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_AdvertiserPlatform` FOREIGN KEY (`PlatformId`) REFERENCES `AdManagement`.`tbl_Platform` (`PlatformId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Report`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Report`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Report` (
  `ReportId` INT NOT NULL AUTO_INCREMENT,
  `CampaignId` INT NOT NULL,
  `StartDate` DATE NULL,
  `EndDate` DATE NULL,
  PRIMARY KEY (`ReportId`, `CampaignId`),
  INDEX `fk_tbl_Reports_tbl_AdCampaign1_idx` (`CampaignId` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_Reports_tbl_AdCampaign1` FOREIGN KEY (`CampaignId`) REFERENCES `AdManagement`.`tbl_AdCampaign` (`CampaignId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_AdvertismentHasAdvertiser`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_AdvertismentHasAdvertiser`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_AdvertismentHasAdvertiser` (
  `AdvertismentId` INT NOT NULL,
  `UserId` INT NOT NULL,
  `PlatformId` INT NOT NULL,
  `Placement` VARCHAR(45) NULL,
  `Cost` DECIMAL(10, 2) NULL,
  `Clicks` INT NULL,
  `Conversions` INT NULL,
  `StartDate` DATE NULL,
  `EndDate` DATE NULL,
  PRIMARY KEY (`AdvertismentId`, `UserId`, `PlatformId`),
  INDEX `fk_tbl_Advertisment_has_tbl_Advertiser1_tbl_Advertiser1_idx` (`UserId` ASC, `PlatformId` ASC) VISIBLE,
  INDEX `fk_tbl_Advertisment_has_tbl_Advertiser1_tbl_Advertisment1_idx` (`AdvertismentId` ASC) VISIBLE,
  CONSTRAINT `fk_AdvertismentHasAdvertiser_Advertisment` FOREIGN KEY (`AdvertismentId`) REFERENCES `AdManagement`.`tbl_Advertisment` (`AdvertismentId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_AdvertismentHasAdvertiser_Advertiser` FOREIGN KEY (`UserId`, `PlatformId`) REFERENCES `AdManagement`.`tbl_Advertiser` (`UserId`, `PlatformId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AdManagement`.`tbl_Budget`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AdManagement`.`tbl_Budget`;

CREATE TABLE IF NOT EXISTS `AdManagement`.`tbl_Budget` (
  `BudgetId` INT NOT NULL AUTO_INCREMENT,
  `CampaignId` INT NOT NULL,
  `BudgetAmount` DECIMAL(10, 2) NOT NULL,
  `AmountSpent` DECIMAL(10, 2) NOT NULL DEFAULT 0,
  `BudgetType` VARCHAR(45) NULL,
  `StartDate` VARCHAR(45) NULL,
  `EndDate` VARCHAR(45) NULL,
  PRIMARY KEY (`BudgetId`),
  INDEX `fk_tbl_Budget_tbl_AdCampaign1_idx` (`CampaignId` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_Budget_tbl_AdCampaign1` FOREIGN KEY (`CampaignId`) REFERENCES `AdManagement`.`tbl_AdCampaign` (`CampaignId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

SET
  SQL_MODE = @OLD_SQL_MODE;

SET
  FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET
  UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;