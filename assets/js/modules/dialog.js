const openDialogButton = document.querySelector('#open-dialog');
const dialog = document.querySelector('dialog');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});
