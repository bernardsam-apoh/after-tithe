'use strict'

const percentageSettings = () => {
    const expensesPercent = Number(expansesPercentOption.value)
    const savingsPercent = Number(savingsPercentOption.value)
    const investmentPercent = Number(investmentPercentOption.value)
    const utilitiesPercent = Number(utilitiesPercentOption.value)
    const totalPercent = expensesPercent + savingsPercent + investmentPercent + utilitiesPercent

    return { expensesPercent, savingsPercent, investmentPercent, utilitiesPercent, totalPercent }
}

const clearElements = () => {
    titheElement.textContent = ''
    remainingAmountElement.textContent = ''
    expensesElement.textContent = ''
    savingsElement.textContent = ''
    investmentsElement.textContent = ''
    utilitiesElement.textContent = ''
}

const clearPercentages = () => {
    expansesPercentOption.value = ''
    savingsPercentOption.value = ''
    investmentPercentOption.value = ''
    utilitiesPercentOption.value = ''
}

const renderExpenesesDom = (amount, expensesPercent=50, savingsPercent=20, investmentPercent=20, utilitiesPercent=10) => {
    const tithe = amount * 0.1
    const remainingAmount = amount - tithe
    const expenses = remainingAmount * (expensesPercent / 100)
    const savings = remainingAmount * (savingsPercent / 100)
    const investments = remainingAmount * (investmentPercent / 100)
    const utilities = remainingAmount * (utilitiesPercent / 100)

    titheElement.textContent = `GH ${tithe.toFixed(2)}`
    remainingAmountElement.textContent = `GH ${remainingAmount.toFixed(2)}`
    expensesElement.textContent = `GH ${expenses.toFixed(2)}`
    savingsElement.textContent = `GH ${savings.toFixed(2)}`
    investmentsElement.textContent = `GH ${investments.toFixed(2)}`
    utilitiesElement.textContent = `GH ${utilities.toFixed(2)}`
}
