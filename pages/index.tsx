import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderTop from '../components/header';
import Footer from '../components/footer';
import HomePage from './pagUm';

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <section>
        <div>
          <HomePage />
        </div>
      </section>
      <Footer />
    </div>
  );
}
