document.addEventListener('DOMContentLoaded', () => {
    let exp = document.getElementById("expand");
    let coll = document.getElementById("collapse");
    let content = document.getElementById("moreaboutme");

    exp.addEventListener("click", function() {
        coll.style.display = "block";
        exp.style.display = "none";
        content.style.display = "block";
    });

    coll.addEventListener("click", function() {
        coll.style.display = "none";
        exp.style.display = "block";
        content.style.display = "none";
    });
});
