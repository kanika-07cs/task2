function calcTotal(){
    let total=0;
    const productSelected=document.getElementById('selectedProducts');
    productSelected.innerHTML=' ';
    const content=document.querySelectorAll('#items input[type="number"]');

    content.forEach(input=>{
        const name=input.dataset.name;
        const image=input.dataset.image;
        const qty=parseInt(input.value,10)||0;
        const price=parseInt(input.dataset.price,10);

        if(qty>0){
            total+=qty*price;
            const addedProduct=document.createElement('newOne');
            addedProduct.classList.add('product-added');
            addedProduct.innerHTML=`<img src="${image}" width="50px">
            <span>${name}</span>
            <span>Qty:${qty}  Cost:${price*qty}</span><br>`;

            productSelected.appendChild(addedProduct);
        }
    });
    document.getElementById('totalCost').innerText=total;

    const selectedPayment=document.querySelector('input[name="methodPay"]:checked').value;
    document.getElementById('payOption').innerText=selectedPayment;
}