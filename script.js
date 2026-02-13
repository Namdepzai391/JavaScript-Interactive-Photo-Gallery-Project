function upDate(previewPic) {

    console.log("Mouse over image");

    let preview = document.getElementById("image");

    preview.style.backgroundImage = "url('" + previewPic.src + "')";
    preview.innerHTML = previewPic.alt;
}

function unDo() {

    console.log("Mouse leave image");

    let preview = document.getElementById("image");

    preview.style.backgroundImage = "url('')";
    preview.innerHTML = "Hover over an image below to display here.";
}
