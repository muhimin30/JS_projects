
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

//convert all the input to Number
let NumberofPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill =  () => {
    let bill = Number(billInput.value);
    let tip = Number(tipInput.value)/100;
    let billWithTip = bill +( bill*tip);
    let Total = billWithTip/NumberofPeople;
    perPersonTotalDiv.innerHTML = '$'+ Total.toFixed(2);

}

let increasePeople = () => {
    NumberofPeople+=1;
    numberOfPeopleDiv.innerText = NumberofPeople; 
    calculateBill(); 
}

let decreasePeople = () => {
    if(NumberofPeople > 1){
    NumberofPeople -= 1; 
    numberOfPeopleDiv.innerText = NumberofPeople;
    }

    calculateBill()
}