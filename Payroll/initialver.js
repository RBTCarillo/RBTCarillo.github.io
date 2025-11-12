document.addEventListener("DOMContentLoaded", ()=>{
    initGUI();
});
document.getElementById("deleteButton").addEventListener("click",()=>{
    var x,l;
    l = gui.length;
    x=document.getElementById("number").value*1;
    --x;

    if (x >= 0 && x < l && confirm("Delete item " + (x+1)+"?")) {
        gui.splice(x,1);
        showGUI();
    }
}
);

function initGUI(){
    gui=[];
}

document.getElementById("addProfile").addEventListener("click",()=>{
    var employeedescinput = {
        "nameInput": "1",
        "daysWorkedInput": 0,
        "rateInput": 1,
        "deducInput": 1,
    };

    employeedescinput.nameInput = getElementById("nameInput").value;
    employeedescinput.daysWorked.getElementById("daysWorkedInput").value;
    employeedescinput.rate.getElementById("rateInput").value;
    employeedescinput.deduc.getElementById("deducInput").value;

    gui.push(employeedescinput);
    showGUI();
}
);

function showGUI() {
    var i,l,carttext,ln;
    var tbody;

    document.getElementById("payrollBody").innerHTML='';
    1 = gui.length;

    for (i = 0, carttext = "", tbody = ''; i < 1; i++) {
        ln = i + 1;
        tbody += "<tr>"
            +'<td>' +ln+ '</td>'
            +'<td>' +gui[i].name+ '</td>'
            +'<td style="text-align:right">' +gui[i].daysWorked+ '</td>'
            +'<td style="text-align:right">' +gui[i].rate+ '</td>'
            +'<td style="text-align:right">' +gui[i].deduc+ '</td>'
            
    }

    document.getElementById("payrollBody").innerHTML = tbody;
    
}

document.getElementById("clearBtn").addEventListener("click", ()=>{

    if (confirm("Clear the inputs?"))
        initGUI();
        showGUI();
}
);

var gui=[];