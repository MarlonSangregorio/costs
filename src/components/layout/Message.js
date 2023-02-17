import { useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message({ msg, type }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }
    //else
    setVisible(true)

    //contador, ao passar 3s, muda o estado da visibilidade.
    const timer = setTimeout(() => {
      setVisible(false)
    }, 6000)

    return () => clearTimeout(timer)

    //condicionado a mensagem[msg]
  }, [msg])

  //se visivel, muda o estado

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message
