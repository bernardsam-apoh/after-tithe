'use strict'

amountElement.addEventListener('focus', e => {
    e.target.value = ''
    clearElements()
    clearPercentages()
    display.style.display = 'none'
    message.style.display = 'none'
})

settingButton.addEventListener('click', () => {
    if (settingPanel.style.display === "none") {
        settingPanel.style.display = "block";
      } else {
        settingPanel.style.display = "none";
      }
})


const calcExpenses = () => {
    const { expensesPercent, savingsPercent, investmentPercent, utilitiesPercent, totalPercent } = percentageSettings()
    const isPercentAvailable = expensesPercent || savingsPercent || investmentPercent || utilitiesPercent
    const amount = Number(amountElement.value)

    content.style.display = 'block'

    if ( isNaN(amount) ) {
        console.log('amount is string')
        message.style.display = 'block'
        display.style.display = 'none'
        message.textContent = 'Please input an amount'
    } else if ( amount === 0 ) {
        message.style.display = 'block'
        message.textContent = 'Amount is required'
        display.style.display = 'none'
    } else if ( isPercentAvailable && totalPercent > 100 ) {
        message.style.display = 'block'
        display.style.display = 'none'
        message.textContent = 'Percentages are more than 100%'
    } else if ( isPercentAvailable && totalPercent <= 100 ) {
        display.style.display = 'block'
        renderExpenesesDom(amount, expensesPercent, savingsPercent, investmentPercent, utilitiesPercent)
        message.style.display = 'none'
    }   else {
        display.style.display = 'block'
        renderExpenesesDom(amount)
        message.style.display = 'none'
    }
}