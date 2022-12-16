import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';
// 
import Dashboard from '../dashboard/Dashboard';
import Password from '../dashboard/Password';
// post cards management
import AddCategories from '../category/AddCategories';
import AddPostCards from '../postcards/AddPostCards';
import PostcardsLists from '../postcards/PostcardsLists';
// customer management
import AddCustomers from '../customers/AddCustomers';
import CustomerLists from '../customers/CustomerLists';
// billing management
import AddInvoice from '../billing/AddInvoice';
import InvoiceList from '../billing/InvoiceList';
// affiliates
import AffiliateLinks from '../affiliates/AffiliateLinks';

function Common() {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('userData')){
            // history.push('/admin');
            navigate('/login');
        }
        // 👇 add class to body element
        document.body.classList.remove('login-body');
        $(document).ready(function () {
            $(".link-btn").click(function () {
                $("#toggle-box").toggle(200);
            })
        });
        $('.navbar .dropdown').hover(function () {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(1).slideDown();
        }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
        });
        $(".sidebar-dropdown > a").click(function () {
            $(".sidebar-submenu").slideUp(200);
            if (
                $(this)
                    .parent()
                    .hasClass("active")
            ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .parent()
                    .removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
                $(this)
                    .parent()
                    .addClass("active");
            }
        });
        $('#show-sidebar').click(function () {
            $(".left-nav").toggleClass("toggle-sidebar");
            $(".overlay").toggleClass("overlay-active");
        });
    }, []);

    const logOut = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    };

    return <>
        <Helmet>
            <title>SlingShot</title>
            <link rel="stylesheet" href="/assets/admin/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
            <link rel="stylesheet" href="/assets/admin/css/owl.carousel.min.css" />
            <link href="/assets/admin/css/animate.css" rel='stylesheet' type='text/css' />
            <link rel="stylesheet" type="text/css" href="/assets/admin/css/style.css" />
            {/*  */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            {/* <script type="text/javascript" src="/assets/admin/js/owl.carousel.js"></script> */}
            <script type="text/javascript" src="/assets/admin/js/bootstrap.min.js"></script>
            {/* <script type="text/javascript" src="/assets/admin/js/customize.js"></script> */}
            <script type="text/javascript" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
        </Helmet>

        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid"> <Link className="navbar-brand" to="/admin"><img src="/assets/admin/images/logo.png" alt="SlingShot" /></Link>
                    <button className="navbar-toggler" id="show-sidebar"> <span className="navbar-toggler-icon"></span> </button>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown user"> <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/admin/password"><span className="lnr lnr-cog"></span> Change Password</Link>
                                <a className="dropdown-item" onClick={logOut}><span className="lnr lnr-power-switch"></span> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <section className="left-nav">
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" >
                    <i className="fas fa-bars"></i>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-header">
                            <div className="user-pic">
                                <img className="img-responsive img-rounded" src="/assets/admin/images/user.png" alt="" />
                            </div>
                            <div className="user-info">
                                <span className="user-name">Jhon
                                    <strong>Smith</strong>
                                </span>
                                <span className="user-status">
                                    <i className="fa fa-circle"></i>
                                    <span>Online</span>
                                </span>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul>
                                <li>
                                    <Link to="/admin">
                                        <i className="fa fa-dashcube"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a >
                                        <i className="fa fa-heart fa-lg"></i>
                                        <span>Manage Postcards</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><Link to="/admin/postcards/categories">Manage Categories</Link></li>
                                            <li><Link to="/admin/postcards/add">Add Template</Link></li>
                                            <li><Link to="/admin/postcards/lists">Templates Library</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a >
                                        <i className="fa fa-certificate fa-lg"></i>
                                        <span>Manage Customers</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><Link to="/admin/customer/add">Add New</Link></li>
                                            <li><Link to="/admin/customer/active">Active Lists</Link></li>
                                            <li><Link to="/admin/customer/inactive">Inactive Lists</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/admin/affiliates/links">
                                        <i className="fa fa-dashcube"></i>
                                        <span>Manage Affiliate Links</span>
                                    </Link>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a >
                                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                                        <span>Invoice/Payment History</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><Link to="/admin/invoice/add">Add Template</Link></li>
                                            <li><Link to="/admin/invoice/pending">Pending</Link></li>
                                            <li><Link to="/admin/invoice/paid">Paid</Link></li>
                                            <li><Link to="/admin/invoice/cancelled">Cancelled</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a >
                                        <i className="fa fa-paypal"></i>
                                        <span>Settings</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            {/* <li><a >Payment Gateway</a></li> */}
                                            <li><Link to="/admin/password">Change Password</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a onClick={logOut}>
                                        <i className="fa fa-sign-out"></i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* post cards */}
            <Route path="/postcards/categories" element={<AddCategories />} />
            <Route path="/postcards/category/edit/*" element={<AddCategories />} />
            <Route path="/postcards/add" element={<AddPostCards />} />
            <Route path="/postcards/edit/*" element={<AddPostCards />} />
            <Route path="/postcards/lists" element={<PostcardsLists />} />
            {/* Customers */}
            <Route path="/customer/add" element={<AddCustomers />} />
            <Route path="/customer/edit/*" element={<AddCustomers />} />
            <Route path="/customer/active" element={<CustomerLists />} />
            <Route path="/customer/inactive" element={<CustomerLists />} />
            {/* invoice section */}
            <Route path="/invoice/add" element={<AddInvoice />} />
            <Route path="/invoice/edit/*" element={<AddInvoice />} />
            <Route path="/invoice/pending" element={<InvoiceList />} />
            <Route path="/invoice/paid" element={<InvoiceList />} />
            <Route path="/invoice/cancelled" element={<InvoiceList />} />
            {/* affiliates */}
            <Route path="/affiliates/links" element={<AffiliateLinks />} />
            <Route path="/affiliates/links/edit/*" element={<AffiliateLinks />} />
            {/* settings */}
            <Route path="/password" element={<Password />} />
        </Routes>

        <footer>
            <div className="footer-inner">
                <div className="left-info"><img src="/assets/admin/images/payment-options.png" alt="SlingShot" /></div>
                <div className="right-info"><span>© SlingShot. All Right Resercved | 2020</span></div>
            </div>
        </footer>
    </>
}

export default Common;