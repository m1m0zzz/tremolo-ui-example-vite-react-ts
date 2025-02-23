import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  title: string
  note?: string
  children?: ReactNode
}

export function Card({
  title,
  note,
  children
}: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {note && <p className={styles.note}>{note}</p>}
      {children}
    </div>
  )
}
