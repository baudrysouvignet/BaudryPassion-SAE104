let footer = document.getElementById('footer')
let ml = document.getElementById('mLlink')

function mentionlegale(){
    if (footer.className == "mLclose"){
        footer.className = "mLopen";
    }else if (footer.className == "mLopen"){
        footer.className = "mLclose";
    }
    document.getElementById("mentionL").scrollIntoView();
}