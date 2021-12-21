class SearchForm {
  constructor(element) {
    this.element = element;
    this.createInputs();
  }

  createInputs() {
    const input = document.createElement("input");
    input.setAttribute("id", "id_input");
    input.classList.add("form-control");

    const button = document.createElement("button");
    button.setAttribute("id", "id_btn");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.innerHTML = "Search";
    // button.addEventListener("click", () => {
    //   this.fetchData();
    // });
    this.element.append(input);
    this.element.append(button);
  }

  // fetchData() {
  //   fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.companies = data;
  //       console.log(this);
  //     });
  // }
}

// const form = new SearchForm(document.getElementById("form"));
// form.createInputs();
