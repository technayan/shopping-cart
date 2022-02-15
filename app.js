// Variables Declaration

const phoneIncreaseBtn = document.getElementById('phone-increase-btn');
const phoneDecreaseBtn = document.getElementById('phone-decrease-btn');
const caseIncreaseBtn = document.getElementById('case-increase-btn');
const caseDecreaseBtn = document.getElementById('case-decrease-btn');
const phonePricePerUnit = 1219;
const casePricePerUnit = 59;
const subTotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

// Event Handelers

phoneIncreaseBtn.addEventListener('click', increasePhone);
phoneDecreaseBtn.addEventListener('click', decreasePhone);
caseIncreaseBtn.addEventListener('click', increaseCase);
caseDecreaseBtn.addEventListener('click', decreaseCase);

///// Functions \\\\\

// Update product function

function updateProduct (product, price, isIncreasing) {
    const productQuantityInput = document.getElementById(product + '-quantity');
    let productQuantity = parseInt(productQuantityInput.value);
    if (isIncreasing) {
        productQuantity += 1;
    } else {
        if (productQuantity >= 2) {
            productQuantity -= 1;
        }
    };
    productQuantityInput.value = productQuantity;

    productTotal = document.getElementById(product + '-total');

    productTotal.innerText = productQuantity * price;

    totalCalculation ();
}

function totalCalculation () {
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const caseTotal = parseInt(document.getElementById('case-total').innerText);

    const shoppingSubTotal = phoneTotal + caseTotal;
    const shoppingTax = shoppingSubTotal / 20; // 5%
    const shoppingTotal = shoppingSubTotal + shoppingTax;

    subTotal.innerText = shoppingSubTotal;
    tax.innerText = shoppingTax;
    total.innerText = shoppingTotal;
}

// Increase phone function

function increasePhone() {
    updateProduct('phone', phonePricePerUnit, true);
}

// Decrease phone function

function decreasePhone() {
    updateProduct('phone', phonePricePerUnit, false);
}

// Increase case function

function increaseCase() {
    updateProduct('case', casePricePerUnit, true);
}

// Decrease case function

function decreaseCase() {
    updateProduct('case', casePricePerUnit, false);
}
