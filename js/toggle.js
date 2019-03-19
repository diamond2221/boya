(function(params) {
    var Oul = document.querySelector(".bor ul.but");
    var lis = document.querySelectorAll(".bor ul.but li");
    var imgs = document.querySelector(".content .inner .top .imgs");
    Oul.addEventListener("click", function(e) {
        var li = e.target;
        if (li.nodeName.toLowerCase() === "li") {
            var idx = li.getAttribute("data-idx");
            imgs.style.transform = `translateX(-${idx * 1000}px)`;
            [...lis].forEach(i => (i.className = ""));
            li.className = "cur";
        }
    });
})();
