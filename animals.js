
const editAnimalInfo = function() {
    let forms = document.body.getElementsByTagName("input");
    for(let i = 0; i < forms.length; i++) {
        if(forms[i].style.display == "none") forms[i].style.display = "inline";
        else forms[i].style.display = "none";
    }
}