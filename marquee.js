class Marquee {
  constructor(element) {
    this.element = element;
  }

  load() {
    fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/etf/list`)
      .then((response) => response.json())
      .then((data) => {
        let marqueContainer = document.getElementById("marquee");
        for (let i = 0; i < 10; i++) {
          let marqueeDiv = document.createElement("div");
          marqueeDiv.innerHTML = `${data[i].symbol}
            <span style="color: rgb(0,185,0);">($${data[i].price})</span>
            `;
          marqueeDiv.classList.add("contentCube");
          marqueContainer.append(marqueeDiv);
        }
      });
  }
}
