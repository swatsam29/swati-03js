/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Swathi SampathKumar
      Date:   09/18/2023

      Filename: project03-01.js
*/

const menuItems = document.getElementsByClassName('menuItem');

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        calcTotal();
    });
}

function calcTotal() {
    let orderTotal = 0;

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }

    document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}


 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }