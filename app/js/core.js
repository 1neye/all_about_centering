let modal = document.querySelector('.modal')
let cross = document.querySelector('.cross')
let btn = document.querySelector('.btn')



btn.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
    setTimeout(()=> {
        modal.style.opacity = '1'
    },1)

})

cross.addEventListener('click', ()=> {
    modal.style.opacity = '0'
    document.body.style.overflowY = 'visible'
    setTimeout(()=> {
        modal.style.display = 'none';
    },1000)

})