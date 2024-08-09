let coll = document.getElementsByClassName("collapse");

coll[0].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
});
