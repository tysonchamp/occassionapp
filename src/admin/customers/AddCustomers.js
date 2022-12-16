import { useLocation } from 'react-router-dom';
import CustomSweetAlert from '../../components/SweetAlert';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';
// 

function AddCustomers(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    // 
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");
    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.split('/'));
        if (location.pathname.split('/').length == 5) {
            let pathname = location.pathname.split('/');
            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };

            fetch(AppContext.apiUrl + "customers/fetch/"+pathname[4], requestOptions)
                .then(response => { return response.json() })
                .then(data => { 
                    console.log(data);
                    setName(data.userData.name);
                    setEmail(data.userData.email);
                    setPhone(data.userData.phone);
                    setCountry(data.userData.country);
                    setState(data.userData.state);
                    setCity(data.userData.city);
                    setAddress(data.userData.address);
                    setPincode(data.userData.pincode);
                    setPassword("");
                })
        }
    }, [location]);

    const showAlert = (message, type) => {
        let alertData = { msg: message, type: type };
        setAlert(
            <CustomSweetAlert alert={alertData} />
        )

        setTimeout(() => {
            setAlert("");
        }, 5000);
    }

    const showLoader = () => {
        setLoader(
            <Loader />
        )
    }

    const handleformsubmit = async (event) => {
        event.preventDefault();
        showLoader();

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("phone", phone);
        formdata.append("country", country);
        formdata.append("state", state);
        formdata.append("city", city);
        formdata.append("address", address);
        formdata.append("pincode", pincode);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        let results = await fetch(AppContext.apiUrl + "customers/create", requestOptions);
        let returnData = await results.json();

        console.log(returnData);
        if (returnData.success === true) {
            showAlert(returnData.message[0], 'success');
            setLoader("");
        } else {
            showAlert(returnData.message[0], 'warning');
            setLoader("");
        }
    }

    return <>
        <section className="main-content">
            <div className="container-fluid">
                <div className="content-inner">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content-wrap">
                                    <div className="form-wrap">
                                        <div className="title-div">
                                            <h3>Customer Information</h3>
                                        </div>
                                        {alert}
                                        <form onSubmit={handleformsubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Full Name</label>
                                                        <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Password</label>
                                                        <input type="password" className="form-control" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" name="country" onChange={e => setCountry(e.target.value)} value={country} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>State</label>
                                                        <input type="text" className="form-control" name="state" onChange={e => setState(e.target.value)} value={state} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>City</label>
                                                        <input type="text" className="form-control" name="city" onChange={e => setCity(e.target.value)} value={city} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Pin Code</label>
                                                        <input type="text" className="form-control" name="pincode" onChange={e => setPincode(e.target.value)} value={pincode} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <label>Address</label>
                                                        <textarea className="form-control" cols="" rows="4" name="address" onChange={e => setAddress(e.target.value)} value={address} ></textarea>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {alert}
                                            <button className="btn-primary">Update Details</button>
                                            {loader}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AddCustomers;