var change=0;
var insertedMoney=0;
var paidAmt=0;
const coinOne=1;
const coinTwo=2;
const coinFive=5;

function total(){
    var coinOnes=Number(document.getElementById('oneCoin').value);
    var coinTwos=Number(document.getElementById('twoCoin').value);
    var coinFives=Number(document.getElementById('fiveCoin').value);

    if(coinOnes>0){
        coinOnes*=coinOne;
    }
    if(coinTwos>0){
        coinTwos*=coinTwo;
    }
    if(coinFives>0){
        coinFives*=coinFive;
    }
    paidAmt=coinOnes+coinTwos+coinFives;
    return paidAmt.toFixed(2);
}
function tally(){
    insertedMoney=total();
    document.getElementById('amt').innerHTML=insertedMoney;
}
function cancelTally(){
    insertedMoney=0;
    document.getElementById('amt').innerHTML=insertedMoney;
}
function clearAmt(){
    document.getElementById('oneCoin').value=0;
    document.getElementById('twoCoin').value=0;
    document.getElementById('fiveCoin').value=0;
}
function clearAll(){
    total(){
        if(paidAmt==0){
            msg=Insert money first!!;
        }
    }
    clearAmt();
    cancelTally();
}