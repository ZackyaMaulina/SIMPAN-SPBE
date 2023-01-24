const textarea = document.getElementById("textarea");

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e){
    if(textarea.style.fontweight == "bold")
    {
        textarea.style.fontweight = "normal";
    }
    else
    {
        textarea.style.fontweight = "bold";

    }
}

// function f3(e){
//     if(textarea.style.fontweight == "italic")
//     {
//         textarea.style.fontweight = "normal";

//     }
//     else
//     {
//         textarea.style.fontweight = "italic";


//     }
// }