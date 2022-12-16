import { Outlet, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
// 

const addBodyClass = className => document.body.classList.add('login-body');

function ForgotPassword() {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('login-body');
    }, []);

    return <>
        <Helmet>
            <title>Admin Forgot Password</title>
            {/* <link rel="stylesheet" href="assets/admin/css/bootstrap.min.css" /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
            {/* <link rel="stylesheet" href="/assets/admin/css/owl.carousel.min.css" /> */}
            <link href="/assets/admin/css/animate.css" rel='stylesheet' type='text/css' />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/style.css" />
            {/* <!-- Scripts --> */}
            <script src="/assets/admin/js/jquery.min.js"></script>
            {/* <script src="assets/admin/js/owl.carousel.js"></script> */}
            <script src="/assets/admin/js/bootstrap.min.js"></script>
            <script src="/assets/admin/js/customize.js"></script>
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
                                <form className="login-form">
                                    <fieldset>
                                        <label for="5">Email ID</label>
                                        <input type="text" id="5" className="form-control" placeholder="Email" />
                                    </fieldset>
                                    <Link to="/login" className="forgot-btn">Login Now</Link>
                                    <button className="btn-primary btn-block">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ForgotPassword;