import React from 'react';
import PropTypes from 'prop-types';

//importando react-icons para utilizar no browser
import { FaPlus } from 'react-icons/fa';
import './Form.css';

//pegando os métodos da main como paramêtro
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* para usar JS no JSX usar "{}" */}
      {/* onChange: ao mudar algo no input, chama função handleChange */}
      <input
        onChange={handleChange}
        placeholder="Digite aqui sua tarefa"
        type="text"
        // repare que no value estou chamando o STATE sem aspas
        value={novaTarefa}
      />
      <button type="submit" tabIndex={0}>
        {/* chamando FaPlus que foi importado do react-icons*/}
        <FaPlus />
      </button>
    </form>
  );
}

//se eu não quero alguma PROPS obrigatória, fazer assim:
// Form.defaultProps = {
//   novaTarefa: 'Valor padrão'
// }

//configurando as PROPS da função Form
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
