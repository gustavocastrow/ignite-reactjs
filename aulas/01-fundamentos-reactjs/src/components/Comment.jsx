import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/gustavocastrow.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Gustavo Castr</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar cometário">
            <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}