import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/options';
import { selectIsLoading } from '../redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ModalAdd from 'components/Modall/ModalAdd';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Filter />
        <ModalAdd />
      </div>

      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default Contacts;
