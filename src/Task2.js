const countDown = n => {
    const result = []
    for (let i = n; i > 0; i = i - n) 
    result.push(i)
    return result
  }
  
  module.exports = countDown
  
  if (require.main === module) {
    console.log('index started')
    console.log('result=', countDown(7))
  }