import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/options';
import { selectIsLoading } from '../redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ModalAdd from 'components/Modall/ModalAdd';
import { Contact, ContactWrap } from './Pages.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contact>
      <ContactWrap>
        <Filter />
        <ModalAdd />
      </ContactWrap>

      {isLoading && <Loader />}
      <ContactList />
    </Contact>
  );
};

export default Contacts;
