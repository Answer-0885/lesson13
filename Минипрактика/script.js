const input = document.getElementById('input')
const btnSave = document.getElementById('btn_save')
const btnRemove = document.getElementById('btn_remove')
const text = document.getElementById('text')

const showText = () => {
   text.textContent = localStorage.getItem('text')
}

btnSave.addEventListener('click', () => {
   localStorage.setItem('text', input.value)
   showText()
})
btnRemove.addEventListener('click', () => {
   localStorage.clear();
   showText()
})
showText()