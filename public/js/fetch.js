console.log('Client side running')
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) =>{
        console.log(data)
    })
})
const fm = document.querySelector('form')
fm.addEventListener('submit',(e)=>{
    e.preventDefault()
})