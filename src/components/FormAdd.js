import Data from './../services/Data';

const FormAdd = (props) => {
  return (
    <form onSubmit = {props.onAdd}>
      <label>
        Valeur initiale :
        <input type="text" />
      </label>
      <input type="submit" value="Créer" />
    </form>
  );
}

export default FormAdd;