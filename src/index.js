// const $ = require('jquery')
// const {item, thing} = require('./item.js')
import $ from 'jquery'
const {item, thing} = require('./item')

import {cami, mason} from './importing'
import {cami as daughter, mason as son} from './importing'

$(document).ready(function () {
    const sayHello = () => console.log(`Hello`)
    sayHello()
    $('body').append(`<h1>Hello World</h1>`).css({
        background: 'black',
        color: 'pink'
    })
    console.log(item.name)
    console.log(thing.name)
    
    
    console.log(son.gender)
    
    
    
})

