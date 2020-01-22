import { formatCar } from './formatCar.js';

export const generateReport = (cars, maxPrice) =>
  cars
    .filter(car => car.Price < maxPrice)
    .map(formatCar)
    .join('\n');