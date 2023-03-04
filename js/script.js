'use strict'

const calcExpenses = () => {
    const { expansesPercent, savingsPercent, investmentPercent, utilitiesPercent } = settings()

    if ( expansesPercent || savingsPercent || investmentPercent || utilitiesPercent ) {
        renderExpeneses(expansesPercent, savingsPercent, investmentPercent, utilitiesPercent)
        console.log('If block runs')
    } else {
        renderExpeneses()
        console.log('Else block runs')
    }
}





