console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");

    if (response.ok) {
      console.log("sucess");
      const data = await response.json();
      console.log(data.results[2].eye_color);
      return data;
    } else {
      console.error("failure");
    }
  } catch (error) {
    console.error("ann Error Occured");
  }
}

fetchData();
