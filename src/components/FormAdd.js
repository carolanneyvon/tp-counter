import Data from './../services/Data';

const FormAdd = (props) => {
  return (
    <form onSubmit = {(event) => {
      event.preventDefault();
      const counter_value = document.getElementById("counter-value").value;
      props.onAdd(event, counter_value);
    }}>
      <label className='form-label'>
        Valeur initiale :
        <input type="text" className='form-control' id="counter-value" />
      </label>
      <input type="submit" value="Créer" className='btn btn-success ms-3'/>
    </form>
  );
}

export default FormAdd;