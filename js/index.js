//Get container div for the grid

const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "1300px";



for(let i = 0; i < 64; i++)
{
    const div = document.createElement("div");
    div.style.border = "solid 1px black";
    div.style.width = "150px";
    div.style.height = "150px";
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "red";
    });
    container.appendChild(div);
}

