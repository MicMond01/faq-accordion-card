const answerEl = document.getElementsByClassName("question")

for (i = 0; i < answerEl.length; i++) {
    answerEl[i].addEventListener("click", function(){
        this.classList.toggle ("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
    })
}