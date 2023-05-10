var imeges = document.querySelectorAll("img");
var wrapBox = document.querySelectorAll(".img-item");
var btn = document.querySelector("button");
var _loop_1 = function (i) {
    var newURL = imeges[i].getAttribute("src");
    if (newURL)
        imeges[i].src = newURL;
    imeges[i].addEventListener("load", function () {
        wrapBox[i].classList.remove("laziy");
        console.log(wrapBox);
    });
};
for (var i = 0; i < imeges.length; i++) {
    _loop_1(i);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    window.location.reload();
    console.log("hello");
});
