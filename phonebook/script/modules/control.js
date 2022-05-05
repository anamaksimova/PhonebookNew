export default {
    modalControl,
    deleteControl,
    formControl,
    hoverRow,
};
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

import serviceStorage from './modules/serviceStorage.js';
const {
  getStorage,
setStorage,
removeStorage,
} = serviceStorage;



const modalControl = (btnAdd, formOverlay) => {
    const openModal = () => {
      formOverlay.classList.add('is-visible');
    };
    const closeModal = () => {
      formOverlay.classList.remove('is-visible');
    };

    btnAdd.addEventListener('click', () => {
      openModal();
    });

    formOverlay.addEventListener('click', e => {
      const target = e.target;
      if (target === formOverlay ||
            target.classList.contains('close')) {
        closeModal();
      }
    });
    return {
      closeModal,

    };
  };

  const deleteControl = (btnDel, list, title) => {
    btnDel.addEventListener('click', () => {
      document.querySelectorAll('.delete').forEach(del => {
        del.classList.toggle('is-visible');
      });
    });

    list.addEventListener('click', e => {
      if (e.target.closest('.del-icon')) {
        e.target.closest('.contact').remove();

        removeStorage(e.target.closest('.contact').children[3].textContent, title);
      }
    });
  };
  const formControl = (title, form, list, closeModal) => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);

      setStorage(title, newContact);
      addContactPage(newContact, list);
      // addContactData(newContact);
      form.reset();
      closeModal();
    });
  };
  const addContactPage = (contact, list) => {
    list.append(createRow(contact));
  };
  const hoverRow = (allRow, logo) => {
    const text = logo.textContent;
    allRow.forEach(contact => {
      contact.addEventListener('mouseenter', () => {
        logo.textContent = contact.phoneLink.textContent;
      });
      contact.addEventListener('mouseleave', () => {
        logo.textContent = text;
      });
    });
  };

