import { cars } from './cars.js';
import { generateReport} from './generateReport.js';

const message = generateReport(cars, 25000);

document.getElementById('message-element').textContent = message;