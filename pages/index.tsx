import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderTop from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <section>
        <div>
          <p>Box lalala</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
