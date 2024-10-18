// Hides slider and show description of the clicked coffee image
function description(coffee, data, image) {
    let description = document.querySelector(".description");
    let coffeeName = document.querySelector(".coffee-name");
    let coffeeDescription = document.querySelector(".coffee-description");
    let coffeeImage = document.querySelector(".coffee-image");
    let coffeeSlider = document.querySelector(".coffees-slider");
    let icedCoffeeSlider = document.querySelector(".iced-coffees-slider")

    coffeeImage.src = image;
    coffeeImage.style.width = "300px";
    coffeeName.textContent = coffee;
    coffeeDescription.textContent = data;
    coffeeSlider.style.display = "none";
    icedCoffeeSlider.style.display = "none";
    description.style.display = "block";
}

// Hides description of coffee and return to slider
let returnBtn = document.querySelector(".return");
returnBtn.addEventListener("click", () => {
    let description = document.querySelector(".description");
    let coffeeSlider = document.querySelector(".coffees-slider")
    let icedCoffeeSlider = document.querySelector(".iced-coffees-slider")
    description.style.display = "none";
    coffeeSlider.style.display = "block";
    icedCoffeeSlider.style.display = "block";
});

// Fetch data asynchronosly from Coffee API
async function getData() {
    try {
        // Fech data
        let response = await fetch("https://api.sampleapis.com/coffee/hot");
        let data = await response.json();

        let coffees = document.querySelector(".coffees");

        // For each coffee fetched, create a coffee container with its image and title and append it to the slider 
        for (let i=0; i < data.length; i++) {
            let coffee = document.createElement("div");
            coffee.classList.add("coffee");
            coffee.style = `--position: ${i+1}`;

            let coffeeImg = document.createElement("img");
            coffeeImg.classList.add("coffee-img");
            coffeeImg.src = `${data[i].image}`;

            let newLine = document.createElement("br");
            let coffeeName = document.createElement("h3");
            let coffeNameData = `${data[i].title}`;
            coffeeName.textContent = coffeNameData;

            // If an image in the slider is clicked, run description function
            coffeeImg.onclick = () => description(coffeNameData, data[i].description, `${data[i].image}`);

            coffeeName.style.textAlign = "center";
            coffee.append(coffeeImg);
            coffee.append(newLine);
            coffee.append(coffeeName);
            
            coffees.append(coffee);
        }
        
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch(error) {
        alert(error);
    }
}

getData();

// Fetch data asynchronosly from Coffee API
async function getIcedCoffeeData() {
    try {
        // Fech data
        let response = await fetch("https://api.sampleapis.com/coffee/iced");
        let data = await response.json();
        console.log(data);

        let coffees = document.querySelector(".iced-coffees");

        // For each coffee fetched, create a coffee container with its image and title and append it to the slider 
        for (let i=0; i < data.length; i++) {
            let coffee = document.createElement("div");
            coffee.classList.add("iced-coffee");
            coffee.style = `--position: ${i+1}`;

            let coffeeImg = document.createElement("img");
            coffeeImg.classList.add("iced-coffee-img");
            coffeeImg.src = `${data[i].image}`;

            let newLine = document.createElement("br");
            let coffeeName = document.createElement("h3");
            let coffeNameData = `${data[i].title}`;
            coffeeName.textContent = coffeNameData;

            // If an image in the slider is clicked, run description function
            coffeeImg.onclick = () => description(coffeNameData, data[i].description, `${data[i].image}`);

            coffeeName.style.textAlign = "center";
            coffee.append(coffeeImg);
            coffee.append(newLine);
            coffee.append(coffeeName);
            
            coffees.append(coffee);
        }
        
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch(error) {
        alert(error);
    }
}

getIcedCoffeeData();