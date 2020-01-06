class UI {
  constructor() {}

  weatherLoader() {

    const divLoader = document.querySelector('.loader-wrapper'),
      divOutput = document.querySelector('#output');

    divLoader.style.display = "block";
    divOutput.style.display = "none";

    setTimeout(function () {
      divLoader.style.display = "none";
      divOutput.style.display = "block";
    }, 3000)
  }

  buttonAnimation() {
    const output = document.querySelector('#output');
    output.classList.remove('btn-anim');
    void output.offsetWidth;
    output.classList.add('btn-anim')
    console.log(123);


  }
}