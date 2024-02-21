import React from 'react';
import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';
import './ValidadorTarefas.css';

export default function ValidadorTarefas({
  handleSearch,
  handleChangeInputValidator,
  buscaTarefa,
  mostraTarefa
}) {
  return (
    <div>
      <form onSubmit={handleSearch} action="#" className="form__search">
        <input
          onChange={handleChangeInputValidator}
          placeholder="Digite aqui a tarefa que você quer pesquisar"
          type="text"
          value={buscaTarefa}
        />
        <button type="submit" tabIndex={0}>
          <FaSearch />
        </button>
      </form>

      <section className="resultado-pesquisa">{mostraTarefa}</section>
    </div>
  );
}

ValidadorTarefas.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChangeInputValidator: PropTypes.func.isRequired,
  buscaTarefa: PropTypes.string.isRequired,
  mostraTarefa: PropTypes.string.isRequired,
};
