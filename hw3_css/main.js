function changethebackgroundcolor(id){
    if(document.getElementById(id).style.backgroundColor!="white")
        document.getElementById(id).style.backgroundColor="white";
    else{
        if(document.getElementById("check").checked){
            document.getElementById(id).style.backgroundColor="lightcyan";
        }else{
            document.getElementById(id).style.backgroundColor="lightyellow";
        }
    }
}

function change(){
    if(document.getElementById("check").checked){
        document.getElementById('cssfile').href = 'style2.css'
    }
    else{
        document.getElementById('cssfile').href = 'style1.css'
    }
}