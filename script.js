// validation
const submitBtn=document.querySelector(".submit-btn");
if (submitBtn){
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let name=document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let suggestion=document.getElementById("suggestion").value.trim();
        let nameError=document.getElementById("name-error");
        let emailError=document.getElementById("email-error");
        let suggestionError=document.getElementById("suggestion-error");
        let successMessage=document.getElementById("success-message");

        nameError.textContent="";
        emailError.textContent="";
        suggestionError.textContent="";
        successMessage.textContent="";
        let valid=true;

        if (name===""){
            nameError.textContent="Please enter your name!";
            valid=false;
        }
        if (email===""){
            emailError.textContent="Please enter your email!";
            valid=false;
        }
        else if (!email.includes("@")){
            emailError.textContent="Please enter a valid email!";
            valid=false;
        }
        if (suggestion===""){
            suggestionError.textContent="Please enter your case suggestion!";
            valid=false;
        }
        if (valid){
        successMessage.textContent="Form submitted successfully!";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("suggestion").value="";
        }
    });
}
//Cart
const cart=document.querySelector(".cart");
const cartPanel=document.getElementById("cartPanel");
const cartCount=document.getElementById("cart-count");
const emptyMsg=document.getElementById("empty-msg");
const checkoutBtn=document.getElementById("checkoutBtn");
const closeCart=document.querySelector(".close-cart");
let totalItems=0;

if (cart){
    cart.addEventListener("click", function(){
        cartPanel.classList.toggle("active");
    });
}
// close btn
if(closeCart){
    closeCart.addEventListener("click", function(){
        cartPanel.classList.remove("active");
    });
}
// Buy Buttons
const buyButtons=document.querySelectorAll(".buy-btn");
buyButtons.forEach(function (button){
    button.addEventListener("click", function(){
        const product=button.parentElement;
        const productName=product.querySelector("h3").textContent;
        const productPrice=product.querySelector("p").textContent;

        //Popup if added a product in the cart
        alert(productName+" has been added to your cart!");
        
        if(emptyMsg){
            emptyMsg.style.display="none";
        }
        const item=document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML=
        `<div class="cart-top">
        <h4>${productName}</h4>
        <button class="remove-item">x</button>
        </div>
        <p>${productPrice}</p>`;

        cartPanel.appendChild(item);
        checkoutBtn.style.display="block";
        // remove btn
        const removeBtn=item.querySelector(".remove-item");
        
        removeBtn.addEventListener("click", function(){
            item.remove();
            totalItems--;
            cartCount.textContent=totalItems;
            if(totalItems===0){
                emptyMsg.style.display="block";
                checkoutBtn.style.display="none";
            }
        });
        totalItems++;
        cartCount.textContent=totalItems;
    });
});
// Pop-up after buying
checkoutBtn.addEventListener("click", function(){
    alert("Your order has been sent successfully! We will contact you soon.");
    //Make the cart empty after clicking the button
    cartPanel.querySelectorAll(".cart-item").forEach(function (item){
        item.remove();
    });
    totalItems=0;
    cartCount.textContent=0;
    emptyMsg.style.display="block";
    checkoutBtn.style.display="none";
})
