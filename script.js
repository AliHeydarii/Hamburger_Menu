    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')
    const span = document.querySelectorAll('.toggle>span')
    let flag = 1
    function Hamburger_Menu(){
        if(flag%2){
            menu.style.left='10px'
            span[1].style.opacity='0'
            span[0].style.transform='rotate(-33deg)'
            span[2].style.transform='rotate(33deg)'
        }else{
            menu.style.left='-250px'
            span[1].style.opacity='100'
            span[0].style.transform='rotate(0deg)'
            span[2].style.transform='rotate(0deg)'
        }
        flag++
    }