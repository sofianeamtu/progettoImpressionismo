document.addEventListener("DOMContentLoaded", function () {
    let keywords = new Set();

    document.querySelectorAll("strong").forEach(el => {
        let keyword = el.innerText.trim();
        if (keyword.length > 2) {  
            keywords.add(keyword);
        }
    });

    let keywordArray = [...keywords].sort();

    let keywordList = document.getElementById("keyword-list");
    if (keywordList) {
        keywordArray.forEach(keyword => {
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.href = "#";
            link.innerText = keyword;
            link.classList.add("keyword-link");
            link.dataset.keyword = keyword;
            li.appendChild(link);
            keywordList.appendChild(li);
        });

        document.querySelectorAll(".keyword-link").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let selectedKeyword = this.dataset.keyword;

                document.querySelectorAll("strong.highlight").forEach(el => {
                    el.classList.remove("highlight");
                });

                let highlighted = false;

                document.querySelectorAll("strong").forEach(el => {
                    if (el.innerText.trim() === selectedKeyword) {
                        el.classList.add("highlight");
                        
                        if (!highlighted) {
                            el.scrollIntoView({ 
                                behavior: "smooth", 
                                block: "center" 
                            });
                            highlighted = true; 
                        }
                    }
                });

                setTimeout(() => {
                    document.querySelectorAll("strong.highlight").forEach(el => {
                        el.classList.remove("highlight");
                    });
                }, 3000); 
            });
        });
    }
});
function searchArtist() {
    var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    
    var artists = {
        "monet": "monet.html",
        "renoir": "renoir.html",
        "degas": "degas.html",
        "manet": "manet.html"
    };

    if (searchInput === "") {
        return;
    }

    var artistPage = artists[searchInput];

    if (artistPage) {
        window.location.href = artistPage;
    } else {
        var messageDiv = document.getElementById('search-message');
        messageDiv.textContent = "Nessun risultato trovato";
    }
}
