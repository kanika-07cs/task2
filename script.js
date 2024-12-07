let discountAmt=0;
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
            <span>${name} Qty:${qty} Cost:${price*qty}</span><br>`;

            productSelected.appendChild(addedProduct);
        }
    });

    document.getElementById('totalCost').innerText=`Total Cost:Rs.${total.toFixed(2)}`;
    document.getElementById('discount').innerText=' ';
    
    const selectedPayment=document.querySelector('input[name="methodPay"]:checked').value;
    document.getElementById('payOption').innerText=selectedPayment;

    const qrcodeScan=document.getElementById('qrCode');
    if(selectedPayment==='GPay'){
        qrcodeScan.style.display='block';
    }
    else{
        qrcodeScan.style.display='none';
    }

    discountAmt=0;
    if(total>0){
        paymentProcessing();
    }
}

function discountapply(){
    const discountCode=document.getElementById('disCode').value;
    let total = totalAmt();
    discountAmt=0;
    if(discountCode==='BIT24'){
        discountAmt=0.3*total;
    }
    else{
        alert('Invalid Discount Code');
        return;
    }

    const totalAfterDiscount = total - discountAmt;
    document.getElementById('discount').innerText=`Discount applied:Rs.${discountAmt.toFixed(2)}`;
    document.getElementById('totalCost').innerText=`Total cost after discount:Rs.${totalAfterDiscount.toFixed(2)}`;

    const selectedPayment = document.querySelector('input[name="methodPay"]:checked').value;
    document.getElementById('payOption').innerText = selectedPayment;
}

function totalAmt(){
    let total=0;
    const content = document.querySelectorAll('#items input[type="number"]');
    content.forEach(input => {
        const qty = parseInt(input.value, 10) || 0;
        const price = parseInt(input.dataset.price, 10);
        total += qty * price;
    });
    return total;
}

function paymentProcessing(){
    const paymentStatus=document.getElementById('payStatus');
    paymentStatus.innerText='Payment Processing...';

    setTimeout(()=>{
        const success=Math.random()>0.2;
        if (success){
            paymentStatus.innerText='Payment successful!Enjoy your snacks';
            paymentStatus.style.color='green';
        }
        else{
            paymentStatus.innerText='Payment Failed.Please try again!';
            paymentStatus.style.color='red';
        }
    },3000);
}