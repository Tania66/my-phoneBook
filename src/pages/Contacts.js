import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/options';
import {
  getContact,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ModalAdd from 'components/Modall/ModalAdd';
import { SectionHeader } from 'components/ContactList/ContactList.styled';

const Contacts = () => {
  const contacts = useSelector(getContact);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <SectionHeader>
        <Filter />
        <ModalAdd />
      </SectionHeader>
      {isLoading && <Loader />}
      {error && <p>❌ Something went wrong - {error}</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default Contacts;
