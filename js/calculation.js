// working on calculate btn
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get user input income
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const inocmeAmount = parseFloat(incomeFieldString);

    //get user input food expense
    const foodField = document.getElementById('food-field');
    const foodFieldString = foodField.value;
    const foodExpense = parseFloat(foodFieldString);

    // get user input rent expense
    const rentField = document.getElementById('rent-field');
    const rentFieldString = rentField.value;
    const rentExpense = parseFloat(rentFieldString);

    // get user input from cloths expense 
    const clothsField = document.getElementById('cloths-field');
    const clothsFieldString = clothsField.value;
    const clothsExpense = parseFloat(clothsFieldString);

    // total expense calculate
    const totalExpense = foodExpense + rentExpense + clothsExpense;
    // update total expense value
    const totalExpenseField = document.getElementById('total-expense-field');
    totalExpenseField.innerText = totalExpense;
    //update our balance
    const balanceField = document.getElementById('balance-field');
    const balance = inocmeAmount - totalExpense;
    balanceField.innerText = balance;
    //update remaing balance
    const remaingBalanceField = document.getElementById('remaining-balance-field');
    remaingBalanceField.innerText = balance;
})
document.getElementById('percentage-btn').addEventListener('click', function(){
    // get percentage value
    const percentageField = document.getElementById('percentage-field');
    const percentageFieldString = percentageField.value;
    const percentage = parseFloat(percentageFieldString); 
    //get income amount
    const incomeAmonutBalance =  document.getElementById('income-field');
    const incomeAmonutBalanceString = incomeAmonutBalance.value;
    const income = parseFloat(incomeAmonutBalanceString);
    // calculate percentage value
    const percentageAmount = (income*percentage)/100;
    // update saings amount 
    const savingField = document.getElementById('saving-field');
    
    const balanceField2 = document.getElementById('balance-field');

    const remaingBalanceField2 = document.getElementById('remaining-balance-field');
    const remaingBalanceField2String = remaingBalanceField2.innerText;
    const remainBalance2 = parseFloat(remaingBalanceField2String);
    const newRemainingBalance = remainBalance2-percentageAmount;
    if(newRemainingBalance>0)
    {
        savingField.innerText = percentageAmount;
        remaingBalanceField2.innerText = newRemainingBalance;
        balanceField2.innerText = newRemainingBalance;
    }
    else
    {
        alert("you cant save "+percentage+"%. Please update.");
    }
})