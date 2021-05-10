import Seo from './Seo';
import Header from './Header';

const MainLayout = ({children} : any): JSX.Element => (
    <>
    <Seo 
        title="CoolPics - a wonderful photos database" 
        description="CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. " />
    <Header />
        { children }
    <footer className="footer" />
    </>
)

export default MainLayout;