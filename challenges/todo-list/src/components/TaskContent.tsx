import { useState } from 'react';
import styles from './TaskContent.module.css';

export function TaskContent(){
  return (
    <div className={styles.tasks}>
      <header className={styles.info}>
        <p className={styles.created}>Tarefas Criadas 5</p> 
        <p className={styles.done}>Concluídas 2 de 5</p>
      </header>
      <main className={styles.lists}>
        <input 
          type="checkbox"
        />
        <label>Integer urna interdum massa libero auctor neque turpis turpis 
          semper. Duis vel sed fames integer.
        </label>

        <input 
          type="checkbox"
        />
        <label>Integer urna interdum massa libero auctor neque turpis turpis 
          semper. Duis vel sed fames integer.
        </label>

        <input 
          type="checkbox"
        />
        <label>Integer urna interdum massa libero auctor neque turpis turpis 
          semper. Duis vel sed fames integer.
        </label>
      </main>
    </div>
  )
}