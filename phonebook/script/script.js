
import {renederPhoneBook, renderContacts} from './modules/render.js';
import serviceStorage from './modules/serviceStorage.js';
const {
  getStorage,
setStorage,
removeStorage} = serviceStorage;

import * as createElements from './modules/createElements.js';
const {
  createContainer,
createHeader,
createLogo,
createMain,
createButtonsGroup,
createTable,
createForm,
createFooter,
createRow,
} = createElements;
import control from './modules/control.js';
const {
  modalControl,
  deleteControl,
  formControl,
  hoverRow,
} = control;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renederPhoneBook(app, title);
    // функционал
    const allRow = renderContacts(list, getStorage(title));
    const {closeModal} = modalControl(btnAdd, formOverlay);
    hoverRow(allRow, logo);

    deleteControl(btnDel, list, title);
    formControl(title, form, list, closeModal);
  };

  window.phoneBookInit = init;
}
