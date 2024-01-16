import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contacts/filterSlice";
import { selectedFilter } from "../../redux/contacts/selectors";
import { Input } from "./Filter.styled";

const Filter = () =>{


    const filter = useSelector(selectedFilter);
    const dispatch = useDispatch();
  
    const filteredContact = event => {
      dispatch(filterContact(event.target.value.toLowerCase()));
    };
  

    return (
        <label >
          <Input
            type="text"
            value={filter}
            placeholder="Find contacts by name" 
            onChange={filteredContact}
          ></Input>
        </label>
      );  
}

export default Filter;