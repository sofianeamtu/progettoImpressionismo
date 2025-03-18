document.addEventListener("DOMContentLoaded", function () {
    const hotspots = document.querySelectorAll(".hotspot");
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");
    document.body.appendChild(infoBox);

    hotspots.forEach(hotspot => {
        hotspot.addEventListener("click", function (event) {
            const info = hotspot.getAttribute("data-info");
            infoBox.innerHTML = `<div class="info-card">${info}</div>`;
            infoBox.style.display = "block";
            infoBox.style.top = event.pageY + 15 + "px";
            infoBox.style.left = event.pageX + 15 + "px";
            infoBox.classList.add("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.classList.contains("hotspot") && !event.target.closest(".info-box")) {
            infoBox.classList.remove("show");
            setTimeout(() => {
                infoBox.style.display = "none";
            }, 300); 
        }
    });
});

function downloadImage(imageSrc) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
}
function shareImage(imageSrc) {
    if (navigator.share) {
        navigator.share({
            title: 'Impressionismo Digitale',
            text: 'Guarda questa splendida opera impressionista!',
            url: imageSrc
        }).catch(console.error);
    } else {
        alert('Condivisione non supportata nel tuo browser. Copia l\'URL per condividerlo: ' + imageSrc);
    }
}
