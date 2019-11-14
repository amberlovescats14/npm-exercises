const $ = require('jquery')

$(document).ready(function () {
    const sayHello = () => console.log(`Hello`)
    sayHello()
    $('body').append(`<h1>Hello World</h1>`).css({
        background: 'black',
        color: 'pink'
    })
    
    
})

