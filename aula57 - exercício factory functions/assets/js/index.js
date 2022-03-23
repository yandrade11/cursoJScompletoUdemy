function handleButton() {
  let calcButtons = document.querySelectorAll("div input");

  calcButtons.forEach((btn) => {
    btn.addEventListener("click", handleClick());
    
    function handleClick() {
      console.log(btn);
    }
  });
}
