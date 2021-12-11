const modal = document.querySelector('.modal')
const openModalBtn = document.querySelectorAll('.xoa')
const iconCloseModal = document.querySelector('.modal__header i')
const buttonCloseModal = document.querySelector('.modal__footer button')



for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', toggleModal)
    
}console.log(openModalBtn[0])
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})
function toggleModal() {
	modal.classList.toggle('hide')
}
