const root = document.getElementById("root");
const API_KEY = process.env.API_KEY;
const URL = "https://api.openweathermap.org";
let cityName = "Navi Mumbai";

const getData = async () => {
  const fetchData = await fetch(
    `${URL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`
  );

  if (!fetchData.ok) {
    throw new Error("some error in api");
  }
  const response = await fetchData.json();
  return response;
};

getData()
  .then((response) => {
    console.log(response[0].name);
    return response[0];
  })
  .then((info) => {
    const getData2 = async () => {
        const lat = info.lat;
        const lon = info.lon;
      // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
      const fetchData2 = await fetch(
        `${URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!fetchData2.ok) {
        throw new Error("some error in api");
      }
      const response2 = await fetchData2.json();
      return response2;
    };
    return getData2();

  })
  .then((result)=>{
    console.log(result)
  })
  .catch(() => {
    console.error("Error:", err.message);
  });
