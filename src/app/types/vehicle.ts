export type VehicleGroup = {
  vehicleId: string;
  specification: VehicleSpecification;
  physical: VehiclePhysicalInformation;
  marketingInformation: VehicleMarketingInformation;
  registrationInformation: VehicleRegistrationInformation;
  retailer: Retailer;
};

export type VehiclePhysicalInformation = {
  images: string[];
  mileage: number;
  onTheRoadPrice: number;
  powerBhp: number;
  engineSizeLiters: number;
};

export type VehicleSpecification = {
  derivative: string;
  description: string;
  manufacturer: string;
  model: string;
  modelYear: number;
  variant: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  color: string;
};

export type VehicleMarketingInformation = {};

export type VehicleRegistrationInformation = {
  registrationNumber: string;
  dateOfFirstRegistration: Date;
  countryCodeOfRegistration: string;
};

export type Retailer = {
  name: string;
  address: string;
};
