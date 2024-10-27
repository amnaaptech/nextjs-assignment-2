import Header from './components/Header/Header';
import Hero from './components/Hero/page';
import Footer from './components/Footer/Footer';

const pg = () => {
    return (
        <div>
            <Header />
            <Hero />
            <h1 className='text-4xl font-bold'>This Is About us Section</h1>  
            <Footer />
        </div>
    );
};

export default pg;
