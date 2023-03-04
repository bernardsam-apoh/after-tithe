const renderExpeneses =  (expansesPercent=50, savingsPercent=20, investmentPercent=20, utilitiesPercent=10) => {
    const amount = Number(document.querySelector('#amount').value)
    const tithe = document.querySelector('#tithe').textContent  = amount * 0.1
    const remainingAmount = document.querySelector('#remaining-amount').textContent = amount - tithe
    const expenses = document.querySelector('#expenses').textContent = remainingAmount * (expansesPercent / 100)
    const savings = document.querySelector('#savings').textContent = remainingAmount * (savingsPercent / 100)
    const investments = document.querySelector('#investments').textContent = remainingAmount * (investmentPercent / 100)
    const utilities = document.querySelector('#utilities').textContent = remainingAmount * (utilitiesPercent / 100)

    return { amount, tithe, remainingAmount, expenses, savings, investments, utilities}
}

const settings = () => {
    const expansesPercent = Number(document.querySelector('#expanses-percent').value)
    const savingsPercent = Number(document.querySelector('#savings-percent').value)
    const investmentPercent = Number(document.querySelector('#investments-percent').value)
    const utilitiesPercent = Number(document.querySelector('#utilities-percent').value)
    return { expansesPercent, savingsPercent, investmentPercent, utilitiesPercent }
}