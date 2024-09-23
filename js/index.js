async function getData() {
    try {
        let response = await fetch("https://api.sampleapis.com/coffee/hot");
        let data = await response.json();

        let coffees = document.querySelector(".coffees");
        let coffeesSlider = document.querySelector(".coffees-slider");

        for (let i=0; i < data.length; i++) {
            let coffee = document.createElement("div");
            coffee.classList.add("coffee");
            coffee.style = `--position: ${i+1}`;

            let coffeeImg = document.createElement("img");
            coffeeImg.src = `${data[i].image}`;

            let newLine = document.createElement("br");
            let coffeeName = document.createElement("h3");
            coffeeName.textContent = `${data[i].title}`
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