// Calculate income to balace
document.getElementById('calculate-btn').addEventListener('click', function () {

    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const cloths = document.getElementById('clothes').value;


    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('clothes').value = '';


    if (
        income == "" ||
        income < 0 ||

        food == "" ||
        food < 0 ||
        rent == "" ||
        rent < 0 ||
        cloths == "" ||
        cloths < 0

    ) {
        alert("inpute must be positive number");
        return;
    }
    const totalExpense = parseInt(food) + parseInt(rent) + parseInt(cloths);
    const balance = parseInt(income) - parseInt(totalExpense);
    if (totalExpense > income) {
        alert('expense is more than balance')
    }
    else {
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('balance').innerText = balance;
    }
});

// calculate to saving balace///

function calculateSavings() {
    const saveParsent = parseInt(document.getElementById('save').value);
    document.getElementById('save').value = '';
    if (saveParsent < 0) {
        alert('Ipute positive value')
        return;
    }
    const income = parseInt(document.getElementById('income').value);
    const saveAmount = parseInt((saveParsent / 100) * income);


    const balance = parseInt(document.getElementById('balance').innerText);
    const remainBalace = parseInt(balance - saveAmount);


    if (saveAmount > balance) {
        alert('Be careful when expense');
    }
    else {
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remaining-balance-all').innerText = remainBalace;
        document.getElementById('income').value = '';

    }
}