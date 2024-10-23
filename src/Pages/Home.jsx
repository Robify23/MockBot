import Homepage from '../Components/Homepage';
import Technicalmcqs from '../Components/Technicalmcqs';
import Iqmcqs from '../Components/Iqmcqs';
import Eqmcqs from '../Components/Eqmcqs';
import Resume from '../Components/Resume';
import InterviewScreen from '../Components/Interviewscreen';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
function Home() {
    return (
        <div className="App">
            <Homepage/>
            <Technicalmcqs/> 
            <Iqmcqs/>
            <Eqmcqs/>
            <Resume/>
            <InterviewScreen/>
            <FAQ/>
            <Footer/>

          
        </div>
    )
    
}
 export default Home;