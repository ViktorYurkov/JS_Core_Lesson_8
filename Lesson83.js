function show(data) {
    console.log(data);
}

function WorkerG(cname){
    this.name = cname;
    var money = 0;
    var chour = 0;
    var csalary = 0;
    
    this.setManeyG = function(chour, csalary){
        var kol = chour.length>csalary.length? csalary.length : chour.length;
        for (i = 0; i < kol; i++) {
            money += chour[i] * csalary[i];
        };
    };
    this.getManey = function(){
        //show(chour+' '+csalary+' '+money);
        return money;
    };
};           
           
WorkerG.prototype.getData = function(){
    show( 'Працівник :'+this.name+' отримує за відпрацьований період року '+this.getManey());
}

function WorkerM(csalary, cday, cdayMonth){
    var money = 0;
    var kol = cday.length > cdayMonth.length? cdayMonth.length : cday.length;
    for (i = 0; i < kol; i++) {
     money += csalary * cday[i] / cdayMonth[i];
     }; 
    
    this.getManey = function(){
        return money;
    };
}

WorkerM.prototype = new WorkerG();

WorkerM.prototype.getData = function(){
    show( 'Працівник :'+this.name+' отримує за відпрацьований період року '+this.getManey());
}

var dayOfMonth = [20, 21, 22, 23];  //кількість робочих днів помісячно
var kolDayMonth = [20, 15, 21, 20,];  //кількість ваідпрацьованих днів помісячно
var salaryM = 15000
var workerM = new WorkerM(salaryM, kolDayMonth, dayOfMonth);
workerM.name = "Петро";
workerM.getData();

var hourOfMonth = [88, 33, 55, 77];  //кількість відпрацьованих годин помісячно
var salaryG = [63, 64, 67];  //вартість години помісячно
var workerG = new WorkerG("Василь");
workerG.setManeyG(hourOfMonth , salaryG);
workerG.getData();








