
function fetchDataFromApi1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then(response => response.json())
                .then(data => {
                    resolve(data.posts);
                })
                .catch(error => {
                    reject(error);
                });
        }, 1000);
    });
}

function fetchDataFromApi2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then(response => response.json())
                .then(data => {
                    console.log(data.products[0].title);
                    resolve(data.products);
                })
                .catch(error => {
                    reject(error);
                });
        },2000);
    });
}

function fetchDataFromApi3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then(response => response.json())
                .then(data => {
                    console.log(data.todos);
                    resolve(data.todos);
                })
                .catch(error => {
                    reject(error);
                });
        },3000);
    });
}


api1Promise() 
    .then((api1Data) => {
        api1Data.forEach(item => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.innerText = item.title;
            row.appendChild(cell);
            tableBody.appendChild(row);
        });

        return true;
    })
    .then(api1Resolved => {
        if (api1Resolved) {
            return api2Promise;
        }
    })
    .then(api2Data => {
        api2Data.forEach(item => {
            const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
            const cell = document.createElement("td");
            cell.innerText = item.title;
            row.appendChild(cell);
        });

        return true;
    })
    .then(api2Resolved => {
        if (api2Resolved) {
            return api3Promise;
        }
    })
    .then(api3Data => {
        api3Data.forEach(item => {
            const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
            const cell = document.createElement("td");
            cell.innerText = item.completed;
            row.appendChild(cell);
        });
    })
    .catch(error => {
        console.error(error);
    });
        

const fetchDataButton = document.querySelector("#fetchDataButton");
fetchDataButton.addEventListener("click", fetchApiData);