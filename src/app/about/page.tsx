import Header from '../components/Header/Header';
import Hero from '../components/Hero/page';
import Footer from '../components/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <Hero />
            <h1 className='text-4xl font-bold  text-center '>This is About us Section</h1>  
            <Footer />
        </div>
    );
};

export default About;
