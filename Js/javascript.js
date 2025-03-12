function toggleSearch() {
    var searchBox = document.getElementById("searchBox");
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block"; // Show search bar
    } else {
        searchBox.style.display = "none"; // Hide search bar
    }
}