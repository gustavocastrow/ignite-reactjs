import styles from './NewTask.module.css';
import {PlusCircle } from 'phosphor-react'

export function NewTask(){
  return (
    <div>
      <form className={styles.newTaskContainer}>
        <textarea
          name="task"
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar
          <PlusCircle size={32} />
        </button>
      </form>
      
    </div>

  )

}