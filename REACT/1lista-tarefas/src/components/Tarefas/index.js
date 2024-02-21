import React from 'react';
import PropTypes from 'prop-types';
import './Tarefas.css';

//importando incones react
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        //KEY: serve como uma INDEX para o REACT, nesse caso ele usa a própria tarefa (e depois vai tratar pra não ter tarefa igual)
        <li key={index}>
          {`${index + 1} - ${tarefa}`}
          <span>
            {/* botão editar */}
            <FaEdit
              //como os métodos tem 2 params, tem que escrever assim o invés de onClick={this.handleEdit}
              onClick={(event) => handleEdit(event, index)}
              className="edit"
            />

            {/* botão deletar */}
            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
