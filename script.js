const taka=document.getElementById("tk");
const usdolar=document.getElementById("dolar");
const indianrupi=document.getElementById("indianRs");
const netherlandsEuro=document.getElementById("netherlandsEuro");


taka.addEventListener("input",bdTktoOthers);
function bdTktoOthers(){
    const bdtk = parseFloat(taka.value);
    const usd=bdtk*0.012;
    const ir = bdtk*0.86;
    const nr = bdtk*0.0099;
    
    usdolar.value = usd;
    indianrupi.value=ir;
    netherlandsEuro.value=nr;
}



usdolar.addEventListener("input",usdTktoOthers);
function usdTktoOthers(){
    const usd = parseFloat(usdolar.value);
    const bdtk=usd*84.73;
    const ir = usd*73.23;
    const nr = usd*0.84;
    
    taka.value = bdtk;
    indianrupi.value=ir;
    netherlandsEuro.value=nr;
}

indianrupi.addEventListener("input",inrTOothers);
function  inrTOothers(){
    const ir= parseFloat(indianrupi.value);
    const bdtk = ir*1.15;
    const usd = ir*0.013;
    const nr=ir*0.011;
    taka.value = bdtk;
    usdolar.value = usd;
    netherlandsEuro.value=nr;

}

netherlandsEuro.addEventListener("input",netherlandstoother);
function netherlandstoother(){

    const nr = parseFloat(netherlandsEuro.value);
    const bdtk = nr*101;
    const usd  = nr*1.19;
    const ir  = nr*87.954;
    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;

}


function main(){
    bdTktoOthers();
    usdTktoOthers();
    inrTOothers();
    netherlandstoother();
}
main();