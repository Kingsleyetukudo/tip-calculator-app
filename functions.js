function myfun() {
    let custom = document.getElementById('custom').value
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    // let percent = custom
    let c = (a/b)
    let d = (custom/100)*a
    document.getElementById('total').innerHTML = `$${c.toFixed(2)}`
    document.getElementById("tipAmount").innerHTML=  `$${d.toFixed(2)}`
}

function myfun2() {
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    let percent = 5
    let c = (percent/100)*a
    let d = a/b
    document.getElementById("tipAmount").innerHTML=  `$${c.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${d.toFixed(2)}`
}

function myfun3() {
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    let percent = 10
    let c = (percent/100)*a
    let d = a/b
    document.getElementById("tipAmount").innerHTML=  `$${c.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${d.toFixed(2)}`
}

function myfun4() {
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    let percent = 15
    let c = (percent/100)*a
    let d = a/b
    document.getElementById("tipAmount").innerHTML=  `$${c.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${d.toFixed(2)}`
}

function myfun5() {
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    let percent = 25
    let c = (percent/100)*a
    let d = a/b
    document.getElementById("tipAmount").innerHTML=  `$${c.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${d.toFixed(2)}`
}

function myfun6() {
    let a = document.getElementById("number").value
    let b = document.getElementById("numbers").value
    let percent = 50
    let c = (percent/100)*a
    let d = a/b
    document.getElementById("tipAmount").innerHTML=  `$${c.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${d.toFixed(2)}`

}

function reset() {
    let a = document.getElementById("number").value = ''
    let b = document.getElementById("numbers").value = ''
    document.getElementById("tipAmount").innerHTML= '$'
    document.getElementById('total').innerHTML = '$'
}

// let col = document.getElementById("numbers").value
// let num = 0
// if(col === num) {
//     document.getElementById("err").innerHTML = 'Value can\'t be zore'
// } else {}

let btn = document.querySelectorAll('.btn')
let box1 = document.getElementById("number").value
let box2 = document.getElementById("numbers").value 

btn.addEventListener('click', try1)
function try1(e) {

    if(box1.value = '') {
        alert('enter a value')
        document.getElementById("err").innerHTML = 'Value can\'t be zore'
    } else if(b){
            document.getElementById("numbers").style.border = '1px solid red'
            document.getElementById("number").style.border = '1px solid red'
    } else{
        document.getElementById("tipAmount").innerHTML=`$${c.toFixed(2)}`
    
    }
}
//  setInterval(() => {
//     document.getElementById("err").innerHTML = ' '
//  }, 5000)