'use strict'

const calc =  (expPercent=50, savPercent=20, invPercent=20, ultPercent=10) => {
    const amount = 2800
    const tithe = amount * 0.1
    
    const remainingAmount = amount - tithe
    const expenses = remainingAmount * (expPercent / 100)
    const savings = remainingAmount * (savPercent / 100)
    const investments = remainingAmount * (invPercent / 100)
    const utilities = remainingAmount * (ultPercent / 100)

    

    const totalPercent = expPercent + savPercent + invPercent + ultPercent
    console.log(totalPercent+'%')


    if (totalPercent === 100) {
        console.log(tithe)
        console.log(remainingAmount)
        console.log(expenses)
        console.log(savings)
        console.log(investments)
        console.log(utilities)
    }

    if (totalPercent < 100) {
        console.log('Total percentage less than 100')
        const extra = 100 - totalPercent
        console.log(extra)
    }

}


calc(50, 20, 20, 10)


