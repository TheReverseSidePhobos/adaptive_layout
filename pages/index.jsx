import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Burning man</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
          <section className="about">
            <div className="container">
              <h2 className='about__title'>About the event</h2>
              <div className="description">
                <div className="desc-left">
                  <h3>Rebuilding the society</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dolorum quod tenetur, praesentium tempore omnis
                    consequatur? Cum voluptatem sunt eveniet, voluptatibus autem
                    officiis esse aliquid quam minus, animi minima labore, ratione
                    provident asperiores necessitatibus pariatur ab delectus
                    facere illum praesentium velit ea? Ratione deleniti oluptates
                    nihil hic. Cupiditate nisi veniam temporibus commodi voluptas
                    minus quibusdam deleniti, reprehenderit voluptatum numquam cum
                    rem quos pariatur ipsum? Excepturi voluptatum facere ratione
                    alias quaerat! Consectetur dolore debitis voluptatem molestias
                    deleniti quia mollitia laboriosam perferendis expedita? Aut
                    voluptatibus voluptates cum distinctio tenetur vel in error
                    ea, cumque blanditiis! Repudiandae commodi molestiae ipsam.
                    Officia, nemo earum.
                  </p>
                </div>
                <div className="desc-right">
                  <h3>This drives us</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dolorum quod tenetur, praesentium tempore omnis
                    consequatur? Cum voluptatem sunt eveniet, voluptatibus autem
                    officiis esse aliquid quam minus, animi minima labore, ratione
                    provident asperiores necessitatibus pariatur ab delectus
                    facere illum praesentium velit ea? Ratione deleniti oluptates
                    nihil hic. Cupiditate nisi veniam temporibus commodi voluptas
                    minus quibusdam deleniti, reprehenderit voluptatum numquam cum
                    rem quos pariatur ipsum? Excepturi voluptatum facere ratione
                    alias quaerat! Consectetur dolore debitis voluptatem molestias
                    deleniti quia mollitia laboriosam perferendis expedita? Aut
                    voluptatibus voluptates cum distinctio tenetur vel in error
                    ea, cumque blanditiis! Repudiandae commodi molestiae ipsam.
                    Officia, nemo earum.
                  </p>
                </div>
              </div>
              <div className="gallery">
                <img src="./img/img1.jpg" alt="img1" />
                <img src="./img/img2.jpg" alt="img2" />
                <img src="./img/img3.jpg" alt="img3" />
              </div>
            </div>
          </section>
        <Footer/>
      </div>
  );
}
