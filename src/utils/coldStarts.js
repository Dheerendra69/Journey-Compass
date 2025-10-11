// this is a personal file to start backend of all my projects. you can delete this file and the useEffect from ../App.js. Still the website will work fine
const urls = [
  "https://blogging-website-x3hj.onrender.com/api/wake-up",
  "https://event-booking-system-tqf3.onrender.com/api/wake-up",
  "https://stationery-heaven-v2.onrender.com/api/wake-up",
  //   "http://localhost:4000/api/wake-up",
];

export const warmUpBackend = async () => {
  console.log("Warming up backend...");
  for (const url of urls) {
    try {
      const res = await fetch(url);
    //   console.log(`Pinged: ${url} - ${res.status}`);
    } catch (err) {
    //   console.log(`Failed to reach ${url}:`, err.message);
    }
  }
  console.log("Warm-up completed!");
};
