const openDialogButtons = document.querySelectorAll(
  '#section-dialog .open-dialog-btn'
)

const showDialog = (evt) => {
  const { target } = evt.target.dataset
  const dialog = document.querySelector(target)
  dialog.showModal()
}
openDialogButtons.forEach((el) => el.addEventListener('click', showDialog))
