const functionAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hizo código asincrono'), 3000)
        : reject(new Error('No salio'))
    })
}

const hazAlgo = async () => {
    const something = await functionAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')