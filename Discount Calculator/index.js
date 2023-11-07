document.querySelector("#button").addEventListener("click",function(){
    //Get Body Rate
    let TagPrice = document.querySelector("#price").value;
    //Get Discount Persentage
    let discountPrice = document.querySelector("#Discount").value;
    //Discount Price
    let discountCost = TagPrice*discountPrice/100;
    //Final cost
    let finalCost = TagPrice - discountCost;
    //Asign Value of this Class
    document.querySelector(".Result").innerHTML = "Your Final Cost Is = "+ finalCost;

});


