class SearchResults {
  constructor(element) {
    this.element = element;
    this.createListening();
    this.input = document.getElementById("id_input");
  }
  createListening() {
    const btn = document.getElementById("id_btn");
    btn.addEventListener("click", () => {
      this.spinner();
      this.fetchData();
    });
  }

  fetchData() {
    fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${this.input.value}&limit=10&exchange=NASDAQ`)
      .then((response) => response.json())
      .then((data) => {
        const receivedData = data;
        const symbolsArr = [];
        receivedData.map((element) => {
          symbolsArr.push(element.symbol);
        });
        for (let i = 0; i < symbolsArr.length; i++) {
          fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbolsArr[i]}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.renderData(data);
            });
        }
      });
  }

  spinner() {
    let resultSpinner = document.createElement("div");
    resultSpinner.className = "list-group";
    resultSpinner.id = "resultSpinner";
    resultSpinner.innerHTML = ` 
    <div class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
    </div>`;
    document.getElementById("results").append(resultSpinner);
    const removeSpinner = document.getElementById("resultSpinner");
    setTimeout(function () {
      removeSpinner.classList.add("d-none");
    }, 1500);
  }

  renderData(data) {
    let changeColor = data.profile.changesPercentage;
    let indicator = data.profile.changesPercentage;
    indicator = parseFloat(indicator.substr(0, 5));
    if (changeColor > 0) {
      changeColor = "green";
    } else {
      changeColor = "red";
    }
    let resultList = document.createElement("ul");
    resultList.className = "list-group";
    resultList.id = "resultList";
    document.getElementById("showResults").append(resultList);
    resultList.innerHTML = "";
    let resultsSpan = document.createElement("li");
    resultsSpan.className = "list-group-item";
    resultsSpan.innerHTML = `
        <img src="${data.profile.image}">
        <a href="./company.html?symbol=${data.symbol}">  
        <span class="bg-warning">${data.profile.companyName}</span>  <span class="bg-warning">(${data.symbol})</span> <span style="color:${changeColor};">(${indicator})
         </span>
          </a> <button class="btn btn-primary" id="resBtn">Compare</button>
         `;

    document.getElementById("resultList").append(resultsSpan);
  }
}
