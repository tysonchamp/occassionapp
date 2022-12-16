import CustomSweetAlert from '../../components/SweetAlert';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';

function Password() {

    const [old_password, setOld_password] = useState("");
    const [new_password, setNew_password] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    // 
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");

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
        let userSessionData = JSON.parse(localStorage.getItem('userData'));

        var formdata = new FormData();
        formdata.append("old_password", old_password);
        formdata.append("password", new_password);
        formdata.append("password_confirmation", confirm_password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        let results = await fetch(AppContext.apiUrl + "customers/change_password/"+userSessionData.id, requestOptions);
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
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="content-wrap">
                                    <div className="form-wrap">
                                        <div className="title-div">
                                            <h3>Change System Password</h3>
                                        </div>
                                        <form className="filter-wrap" onSubmit={handleformsubmit}>
                                            {alert}
                                            <fieldset>
                                                <label>Current Password</label>
                                                <input type="password" className="form-control" placeholder="Current Password"  name='old_password' onChange={e => setOld_password(e.target.value)} value={old_password} />
                                            </fieldset>
                                            <fieldset>
                                                <label>New Password</label>
                                                <input type="password" className="form-control" placeholder="New Password"  name='new_password' onChange={e => setNew_password(e.target.value)} value={new_password} />
                                            </fieldset>
                                            <fieldset>
                                                <label>Confirm Password</label>
                                                <input type="password" className="form-control" placeholder="Confirm Password"  name='confirm_password' onChange={e => setConfirm_password(e.target.value)} value={confirm_password} />
                                            </fieldset>
                                            <button className="btn-block btn-dark">Change Password</button>

                                                {loader}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Password;