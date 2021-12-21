const symFromQuery = window.location.search.slice(8, window.location.search.length);
console.log(symFromQuery);
const profileUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symFromQuery}`;
const historyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symFromQuery}?serietype=line`;

const companyDiv = document.createElement("div");
const loadingChartSpinner = document.getElementById("loadingChartSpinner");

let closeArr = [];
let dateArr = [];

fetch(profileUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let rawChangesPercentage = data.profile.changesPercentage;
    changesPercentage = parseFloat(rawChangesPercentage.substr(0, 5));
    console.log(changesPercentage);
    if (changesPercentage > 0) {
      changesPercentage = "green";
    } else {
      changesPercentage = "red";
    }

    companyDiv.innerHTML = `
        <div class="card mb-3>
            <img src="${data.profile.image}" class="card-image-top"/>
            <div class="card-body">
                <h5 class="card-title">${data.profile.companyName}</h5>
                <p class="card-text">${data.profile.description}</p>
                <div>Stock Price: ${data.profile.price}${data.profile.currency}</div>
                <div style="color:${changesPercentage};">${data.profile.changesPercentage}</div>
                <a href="#" class="btn btn-primary">${data.profile.website}</a>
            </div>
        </div>
    `;
    companyContainer.append(companyDiv);
  });

fetch(historyUrl)
  .then((response) => response.json())
  .then((data) => {
    loadingChartSpinner.classList.remove("d-none");
    for (let i = 0; i < 30; i++) {
      closeArr.push(data.historical[i].close);
      dateArr.push(data.historical[i].date);
    }

    setTimeout(() => {
      loadingChartSpinner.classList.add("d-none");
      let ctx = document.getElementById("myChart").getContext("2d");
      let chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dateArr,
          datasets: [
            {
              label: "Stock Price History",
              backgroundColor: "rgb(0,186,142,0.5)",
              borderColor: "rgb(186,182,255)",
              data: closeArr,
            },
          ],
        },
        options: {},
      });
    }, 800);
  });
