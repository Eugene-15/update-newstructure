function showPopup() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    setTimeout(function(){
        modal.style.display = "none";
    }, 8000)

    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function getCurrentYear(){
    let currentData = new Date();
    let currentYear = currentData.getFullYear();
    return currentYear;
}


