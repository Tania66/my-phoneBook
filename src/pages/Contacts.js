import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/options';
import {
  selectFilterContact,
  selectIsLoading,
} from '../redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import ModalAdd from 'components/Modall/ModalAdd';
import {
  Contact,
  ContactImg,
  ContactImgText,
  ContactSpanText,
  ContactWrap,
  WrapContactImg,
} from './Pages.styled';
import defaultSadMobil from './sad-mobile.png';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();
  const sadMobil = defaultSadMobil;

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
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <WrapContactImg>
          <ContactImg src={sadMobil} alt="sad-mobile" />
          <ContactImgText>
            You haven't added any <ContactSpanText>contacts</ContactSpanText>{' '}
            yet...
          </ContactImgText>
        </WrapContactImg>
      )}
    </Contact>
  );
};

export default Contacts;
