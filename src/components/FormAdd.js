import Data from './../services/Data';
import { useRef } from 'react';

const FormAdd = (props) => {
  const input_add_ref = useRef(null);

  return (
    <form onSubmit = {(event) => {
      event.preventDefault();
      props.onAdd(event, input_add_ref.current.value);
      input_add_ref.current.value = '';
      input_add_ref.current.focus();
    }}>
      <label className='form-label'>
        Valeur initiale :
        <input ref={input_add_ref} type="number" className='form-control' id="counter-value" />
      </label>
      <input type="submit" value="Créer" className='btn btn-success ms-3'/>
    </form>
  );
}

export default FormAdd;