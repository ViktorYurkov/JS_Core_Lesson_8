function show(data) {
    console.log(data);
}

function helm(Turn){    //кермо
    this.turn = Turn;
    var steeringTurn=0;    // 0-180
    this.setTurn = function(steeringTurn){
        (this.turn + steeringTurn > 0 & this.turn + steeringTurn < 180)? (this.turn += steeringTurn) : this.turn ;
    };
    this.getTurn = function(){
        return this.turn;
    };
}
function wheel(rotate){    //колесо
    this.rotate = rotate;
    var rotateWheel = 0;
    
    this.setRotate = function(rotateWheel){
        (this.rotate + rotateWheel>0 & this.rotate + rotateWheel<200)? (this.rotate += rotateWheel) : this.rotate;
    };
    this.getRotate = function(){
        return this.rotate;
    };
}
function body(lifting){    //кузов
    this.lift = lifting;
    var liftingBody=0;
    this.setLift = function(liftingBody){
        (this.lift + liftingBody > 12 & this.lift + liftingBody < 16)? (this.lift += liftingBody) : this.lift;
    };
    this.getLift = function(){
        return this.lift;
    };
}

function auto(){
    this.long = 5000;
    this.width = 1800;
    this.autoHelm = new helm(90);
    this.autoWheel = new wheel(0);
    this.autoBody = new body(14);
}

var myAuto = new auto();

show("Кермо на "+myAuto.autoHelm.getTurn()+" градусів");
show("Швидкість обертання колес "+myAuto.autoWheel.getRotate()+" км/г");
show("Кліренс кузова авто "+myAuto.autoBody.getLift()+" см");

myAuto.autoHelm.setTurn(20);
show("Кермо на "+myAuto.autoHelm.getTurn()+" градусів");
myAuto.autoWheel.setRotate(30);
show("Швидкість обертання колес "+myAuto.autoWheel.getRotate()+" км/г");
myAuto.autoBody.setLift(-1);
show("Кліренс кузова авто "+myAuto.autoBody.getLift()+" см");

myAuto.autoHelm.setTurn(-10);
show("Кермо на "+myAuto.autoHelm.getTurn()+" градусів");
myAuto.autoWheel.setRotate(70);
show("Швидкість обертання колес "+myAuto.autoWheel.getRotate()+" км/г");
myAuto.autoBody.setLift(-1);
show("Кліренс кузова авто "+myAuto.autoBody.getLift()+" см");