import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">Мой Портфолио</Link>
        </div>
      </section>
    </Layout>
  )

}
