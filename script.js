// let input = document.getElementById("search");
// const searchBtn = document.getElementById("button");

// ----- \\\
// const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3`;
// const endPoint = `/search?query=${input}&limit=10&exchange=NASDAQ`;

// const finalUrl = url + endPoint;
// const result = document.getElementById("showResults");
// const spinnerElement = document.getElementById("resultSpinner");

//---- Button Listener ----\\

// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   spinner();
//   console.log(input.value);
//   stockFetch();
// });

//---- Fetching the search query ----\\

// function stockFetch() {
// const eladUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`;
// fetch(eladUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const receivedData = data;
//     const symbolsArr = [];
//     receivedData.map((element) => {
//       symbolsArr.push(element.symbol);
//     });
//---- Entering Marquee ----\\
// fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/etf/list`)
//   .then((response) => response.json())
//   .then((data) => {
//     let marqueContainer = document.getElementById("marquee");
//     for (let i = 0; i < 10; i++) {
//       let marqueeDiv = document.createElement("div");
//       marqueeDiv.innerHTML = `${data[i].symbol}
//       <span style="color: rgb(0,185,0);">($${data[i].price})</span>
//       `;
//       marqueeDiv.classList.add("contentCube");
//       marqueContainer.append(marqueeDiv);
//     }
//   });
//---- symbolArr profile fetch ----\\
//       for (let i = 0; i < symbolsArr.length; i++) {
//         fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbolsArr[i]}`)
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//             printResult(data);
//           });
//       }
//     });
// }

//---- Printing the results ----\\
// function printResult(data) {
//   let changeColor = data.profile.changesPercentage;
//   let indicator = data.profile.changesPercentage;
//   indicator = parseFloat(indicator.substr(0, 5));
//   if (changeColor > 0) {
//     changeColor = "green";
//   } else {
//     changeColor = "red";
//   }
//   let resultList = document.createElement("ul");
//   resultList.className = "list-group";
//   resultList.id = "resultList";
//   document.getElementById("showResults").append(resultList);
//   resultList.innerHTML = "";
//   let resultsSpan = document.createElement("li");
//   resultsSpan.className = "list-group-item";
//   resultsSpan.innerHTML = `
//         <img src="${data.profile.image}">
//         <a href="./company.html?symbol=${data.symbol}">
//          ${data.profile.companyName} (${data.symbol}) <span style="color:${changeColor};">(${indicator})
//          </span>
//           </a>
//          `;
//   document.getElementById("resultList").append(resultsSpan);
//   spinnerElement.classList.add("d-none");
// }

//---- Spinner ----\\
// function spinner() {
//   spinnerElement.classList.remove("d-none");
//   spinnerElement.innerHTML = `
//   <div class="spinner-border text-primary" role="status">
//     <span class="sr-only"></span>
//   </div>`;
// }
