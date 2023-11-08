
fetch("https://isro.vercel.app/api/spacecrafts")
    .then((response) => response.json())
    .then((data)=>{
        let spacescraft =data.spacecrafts
        document.getElementById("isro").innerHTML=spacescraft.map(
            (post) =>
            `<div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title text-center text-bg-info p-3">${post.id}</h5>
                    <p class="card-text text-center">${post.name}</p>
                </div>
            </div>`
        ).join("");;
    })
    .catch((err) =>{
        console.log("Error:",err);
    });

    fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
    .then((response) => response.json())
    .then((data)=>{
        document.getElementById("holiday").innerHTML = data.map(
            (post) =>
            `<div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title text-center text-bg-success p-3">${post.name}</h5>
                    <p class="card-text text-center">${post.date}</p>
                </div>
            </div>`
        ).join("");
    })
    .catch((err) =>{
        console.log("Error:",err);
    });

    fetch("https://emojihub.yurace.pro/api/all/category/travel-and-places")
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
       document.getElementById("emoji").innerHTML = data.map(
        (post) =>
        `<div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title text-center text-bg-danger p-3">${post.name}</h5>
                <p class="card-text text-center">${post.category}</p>
            </div>
        </div>`
    ).join("");;
       
    })
    .catch((err) =>{
        console.log("Error:",err);
    });