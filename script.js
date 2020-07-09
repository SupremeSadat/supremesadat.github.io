function openTab(tabName) {
    document.getElementById('currentTabName').innerHTML = tabName;
    var x = document.getElementsByClassName("tabs");
    for (var i = 0; i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(tabName).style.display="block";
    
    
}