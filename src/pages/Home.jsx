import landingImg from '../img/landing.png';

const Home = () => {
  return (
    <section className='section home'>
      <div className='description'>
        <h1>Hamed Jafari</h1>
        <h3>Frontend Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aliquid est quas mollitia, temporibus esse, officia ut incidunt id
          itaque animi quam, voluptatem nam voluptas eligendi nemo quia
          asperiores laudantium!
        </p>
        <button>Hire Me</button>
      </div>
      <img className='landingImg' src={landingImg} alt='landingImage' />
    </section>
  );
};

export default Home;
