(function () {
  'use strict';

  const carsJSON = `[
  {
    "RRP": 13775,
    "Make": "Citroen",
    "Model": "C11.0 VTi Urban Ride",
    "Price": 11575
  },
  {
    "RRP": 62500,
    "Make": "Land Rover",
    "Model": "Range Rover Velar 2.0 D240 R-Dynamic",
    "Price": 58500
  },
  {
    "RRP": 44995,
    "Make": "Mercedes-Benz",
    "Model": "E Class 2.0 E220d AMG Line (Premium)",
    "Price": 41878
  },
  {
    "RRP": 21245,
    "Make": "Mitsubishi",
    "Model": "ASC Dynamic 2WD 5dr",
    "Price": 20990
  },
  {
    "RRP": 13535,
    "Make": "Fiat",
    "Model": "Panda 1.2 8v Waze",
    "Price": 11490
  }
]`;
   const cars = JSON.parse(carsJSON);

  const formatCar = car => `${car.Make} ${car.Model} being sold for £${car.Price}, \nwhen the retail is £${car.RRP}`;

  const generateReport = (cars, maxPrice) =>
    cars
      .filter(car => car.Price < maxPrice)
      .map(formatCar)
      .join('\n');

  const message = generateReport(cars, 25000);

  document.getElementById('message-element').textContent = message;

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNhcnMuanMiLCJmb3JtYXRDYXIuanMiLCJnZW5lcmF0ZVJlcG9ydC5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcnNKU09OID0gYFtcbiAge1xuICAgIFwiUlJQXCI6IDEzNzc1LFxuICAgIFwiTWFrZVwiOiBcIkNpdHJvZW5cIixcbiAgICBcIk1vZGVsXCI6IFwiQzExLjAgVlRpIFVyYmFuIFJpZGVcIixcbiAgICBcIlByaWNlXCI6IDExNTc1XG4gIH0sXG4gIHtcbiAgICBcIlJSUFwiOiA2MjUwMCxcbiAgICBcIk1ha2VcIjogXCJMYW5kIFJvdmVyXCIsXG4gICAgXCJNb2RlbFwiOiBcIlJhbmdlIFJvdmVyIFZlbGFyIDIuMCBEMjQwIFItRHluYW1pY1wiLFxuICAgIFwiUHJpY2VcIjogNTg1MDBcbiAgfSxcbiAge1xuICAgIFwiUlJQXCI6IDQ0OTk1LFxuICAgIFwiTWFrZVwiOiBcIk1lcmNlZGVzLUJlbnpcIixcbiAgICBcIk1vZGVsXCI6IFwiRSBDbGFzcyAyLjAgRTIyMGQgQU1HIExpbmUgKFByZW1pdW0pXCIsXG4gICAgXCJQcmljZVwiOiA0MTg3OFxuICB9LFxuICB7XG4gICAgXCJSUlBcIjogMjEyNDUsXG4gICAgXCJNYWtlXCI6IFwiTWl0c3ViaXNoaVwiLFxuICAgIFwiTW9kZWxcIjogXCJBU0MgRHluYW1pYyAyV0QgNWRyXCIsXG4gICAgXCJQcmljZVwiOiAyMDk5MFxuICB9LFxuICB7XG4gICAgXCJSUlBcIjogMTM1MzUsXG4gICAgXCJNYWtlXCI6IFwiRmlhdFwiLFxuICAgIFwiTW9kZWxcIjogXCJQYW5kYSAxLjIgOHYgV2F6ZVwiLFxuICAgIFwiUHJpY2VcIjogMTE0OTBcbiAgfVxuXWA7XG4gZXhwb3J0IGNvbnN0IGNhcnMgPSBKU09OLnBhcnNlKGNhcnNKU09OKTsiLCJleHBvcnQgY29uc3QgZm9ybWF0Q2FyID0gY2FyID0+IGAke2Nhci5NYWtlfSAke2Nhci5Nb2RlbH0gYmVpbmcgc29sZCBmb3Igw4LCoyR7Y2FyLlByaWNlfSwgXFxud2hlbiB0aGUgcmV0YWlsIGlzIMOCwqMke2Nhci5SUlB9YDsiLCJpbXBvcnQgeyBmb3JtYXRDYXIgfSBmcm9tICcuL2Zvcm1hdENhci5qcyc7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJlcG9ydCA9IChjYXJzLCBtYXhQcmljZSkgPT5cbiAgY2Fyc1xuICAgIC5maWx0ZXIoY2FyID0+IGNhci5QcmljZSA8IG1heFByaWNlKVxuICAgIC5tYXAoZm9ybWF0Q2FyKVxuICAgIC5qb2luKCdcXG4nKTsiLCJpbXBvcnQgeyBjYXJzIH0gZnJvbSAnLi9jYXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlUmVwb3J0fSBmcm9tICcuL2dlbmVyYXRlUmVwb3J0LmpzJztcblxuY29uc3QgbWVzc2FnZSA9IGdlbmVyYXRlUmVwb3J0KGNhcnMsIDI1MDAwKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtZWxlbWVudCcpLnRleHRDb250ZW50ID0gbWVzc2FnZTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBQUEsTUFBTSxRQUFRLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStCakIsQ0FBQyxDQUFDO0dBQ0YsQUFBTyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7RUNoQ2xDLE1BQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7RUNFbEgsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUTtJQUMzQyxJQUFJO09BQ0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztPQUNuQyxHQUFHLENBQUMsU0FBUyxDQUFDO09BQ2QsSUFBSSxDQUFDLElBQUksQ0FBQzs7RUNIZixNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztFQUU1QyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU87Ozs7In