import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import CustomSweetAlert from '../components/SweetAlert';
import AppContext from '../components/GlobalVars';
// 

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('login-body');
        if(localStorage.getItem('userData')){
            console.log(localStorage.getItem('userData'));
            // history.push('/admin');
            navigate('/admin');
        }
    }, []);

    const showAlert = (message, type) => {
        let alertData = { msg: message, type:type };
        setAlert(
            <CustomSweetAlert alert={alertData} />
        )
    }

    const handleSubmit = async (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();

        var formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        let results = await fetch(AppContext.apiUrl+"admin_login", requestOptions);
        let userData = await results.json();

        console.log(userData);
        if(userData.success == true){
            localStorage.setItem('userData', JSON.stringify(userData.userData));
            navigate('/admin');
        }else{
            showAlert(userData.message[0], 'warning');
        }
    };
    
    // setInterval(() => {
    //     setAlert("");
    // }, 3000);

    return <>
        <Helmet>
            <title>Admin Login</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
            <link href="/assets/admin/css/animate.css" rel='stylesheet' type='text/css' />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/style.css" />
            {/* <!-- Scripts --> */}
            <script src="/assets/admin/js/jquery.min.js"></script>
            <script src="/assets/admin/js/bootstrap.min.js"></script>
            <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
        </Helmet>

        <section className="main-container">
            <div className="container">
                <div className="entry-container">
                    <div className="form-box form-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="log-graphics">
                                    <div className="logo"><img src="/assets/admin/images/logo-light.png" alt="" /></div>
                                    <div className="title-div">
                                        <p>Sign in to your account</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form className="login-form" onSubmit={handleSubmit}>
                                    {alert}
                                    <fieldset>
                                        <label for="5">Email ID</label>
                                        <input type="email" className="form-control" placeholder="Email" name='email' onChange={e => setEmail(e.target.value)} value={email} />
                                    </fieldset>
                                    <fieldset>
                                        <label for="5">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name='password' onChange={e => setPassword(e.target.value)} />
                                    </fieldset>
                                    <Link to="/reset-password" className="forgot-btn">Forgot your password?</Link>
                                    <button className="btn-primary btn-block">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Login;