const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const fetchdata = async () => {
  try {
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    h1.innerText = data.fact;
  } catch (error) {
    console.log("Fail to fetch");
  }
};

fetchdata();


// 