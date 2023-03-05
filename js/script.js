'use strict'

amountElement.addEventListener('focus', (e) => {
    console.log('Input element in focus')
    // messageElement.textContent = ''
    e.target.value = ''
    content.style.display = 'none'
    clearElements()
    clearPercentages()
})

settingButton.addEventListener('click', () => {
    if (settingPanel.style.display === "none") {
        settingPanel.style.display = "block";
      } else {
        settingPanel.style.display = "none";
      }
})

const calcExpenses = () => {
    const { expansesPercent, savingsPercent, investmentPercent, utilitiesPercent, totalPercent } = percentageSettings()
    const isPercentAvailable = expansesPercent || savingsPercent || investmentPercent || utilitiesPercent
    const amount = Number(amountElement.value)

    settingPanel.style.display = 'none'

    if(isNaN(amount)) {
        showContent()
        content.textContent = 'Input cannot be string'
    } else if (amount === 0) {
        showContent()
        content.textContent = 'Input cannot be empty'
    } else if (isPercentAvailable && totalPercent <= 100) {
        renderExpenesesDom(amount, expansesPercent, savingsPercent, investmentPercent, utilitiesPercent)
        showContent()
    } else if (isPercentAvailable && totalPercent > 100) {
        content.textContent = 'Percentages are more than 100%'
        showContent()
        clearElements()
    }  else {
        renderExpenesesDom(amount)
        showContent()
    }


}


