import React, { Fragment} from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import Footer from '../Footer/Footer'

import styles from './Page.module.css';
import useForecast from '../../hooks/useForecast';
import GoBack from '../GoBack/GoBack';

function Page () {
    const {isError, isLoading, forecast, submitRequest} = useForecast();
    const onSubmit =(value)=>{
        submitRequest(value);
    }
   // const[goForm, setGoForm]=useState(true);
    const handleGoBack =()=>{
        window.location.reload(false)
    }
   // console.log(goForm)

    return (
        <>

            <Header />
            {(!forecast) &&(
            <div className={`${styles.box} position-relative`}>
                {(!isLoading) && <Form submitSearch={onSubmit}/>}
                {isError && <Error message={isError}/> }
                {isLoading && <Loader/>}
                
                
            </div>
            )}
            {forecast && (
                <>
            <Forecast forecast={forecast}/> 
            <GoBack onClick={handleGoBack}/>
            </>
            )}

            <Footer/>

            

        </>
    );
};

export default Page;
