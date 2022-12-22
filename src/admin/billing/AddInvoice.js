import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';
import InvoiceFields from '../../components/InvoiceFields';
import CustomSweetAlert from '../../components/SweetAlert';

function AddInvoice() {

    const [postCardList, setPostCardsList] = useState("");
    const [allUsers, setAllUsers] = useState("");
    // 
    const [user_id, setUser_id] = useState("");
    const [product_id, setProduct_id] = useState("");
    const [amount, setAmount] = useState("");
    const [payment_date, setPayment_date] = useState("");
    const [notes, setNotes] = useState("");
    // 
    const [invoiceItemsNumber, setInvoiceItemsNumber] = useState(1);
    // 
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");
    const [invoiceFieldHTML, setInvoiceFieldHTML] = useState("");
    const location = useLocation()

    const showLoader = () => {
        setLoader(
            <Loader />
        )
    }

    const showInvoiceFields = (rowData) => {
        setInvoiceFieldHTML("")
    }

    const addFields = () => {
        let fieldNumber = invoiceItemsNumber + 1;
        setInvoiceItemsNumber(fieldNumber);
        const element = [];
        for (let index = 0; index < invoiceItemsNumber; index++) {
            let rowData = {};
            rowData.id = index + 1;
            rowData.postCardList = postCardList;
            element[index] = <InvoiceFields rowdata={rowData} />;
        }
        setInvoiceFieldHTML(element)
    }

    const showAlert = (message, type) => {
        let alertData = { msg: message, type: type };
        setAlert(
            <CustomSweetAlert alert={alertData} />
        )

        setTimeout(() => {
            setAlert("");
        }, 5000);
    }

    useEffect(() => {
        console.log(location.pathname.split('/'));
        let pathname = location.pathname.split('/');

        var requestOptions = {
            method: 'GET',
            // body: formdata,
            redirect: 'follow'
        };

        if (location.pathname.split('/').length === 5) {
            fetch(AppContext.apiUrl + "billing/fetch/"+pathname[4], requestOptions)
                .then(response => { return response.json() })
                .then(data => {
                    setPostCardsList(data.postcardsData);
                    setAllUsers(data.allUsers);
                    setUser_id(data.invoiceData.user_id);
                    setProduct_id(data.invoiceData.product_id);
                    setAmount(data.invoiceData.amount);
                    setPayment_date(data.invoiceData.payment_date);
                    setNotes(data.invoiceData.notes);
                })
        }else{
            fetch(AppContext.apiUrl + "post/cards/all", requestOptions)
                .then(response => { return response.json() })
                .then(data => {
                    setPostCardsList(data.postcardsData);
                    setAllUsers(data.allUsers);
                })
        }

        showInvoiceFields();
    }, [location]);

    const handleformsubmit = async (event) => {
        event.preventDefault();
        let pathname = location.pathname.split('/');
        showLoader();

        var formdata = new FormData();
        formdata.append("user_id", user_id);
        formdata.append("product_id", product_id);
        formdata.append("amount", amount);
        formdata.append("payment_date", payment_date);
        formdata.append("notes", notes);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (location.pathname.split('/').length === 5) {
            let results = await fetch(AppContext.apiUrl + "billing/update/"+pathname[4], requestOptions);
            let returnData = await results.json();

            console.log(returnData);
            if (returnData.success === true) {
                showAlert(returnData.message[0], 'success');
                setLoader("");
            } else {
                showAlert(returnData.message[0], 'warning');
                setLoader("");
            }
        }else{
            let results = await fetch(AppContext.apiUrl + "billing/create", requestOptions);
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
                                            <h3>Manage Purpose</h3>
                                        </div>
                                        {alert}
                                        <form onSubmit={handleformsubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset className="select-box">
                                                        <label>Select a Customer</label>
                                                        <select className="form-control" name='user_id' onChange={e => setUser_id(e.target.value)} value={user_id}>
                                                            {allUsers && allUsers.map((user) => (
                                                                <option value={user.id}>{user.name} - {user.email}</option>
                                                            ))}
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Billing Date</label>
                                                        <input type="date" className="form-control" name='payment_date' onChange={e => setPayment_date(e.target.value)} value={payment_date} />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div id='productsLists'>
                                                <div className="row" id='rowid-0' key="{'rowid-0'}">
                                                    <div className="col-lg-6">
                                                        <fieldset className="select-box">
                                                            <label>Select Postcard</label>
                                                            <select className="form-control" name='product_id' onChange={e => setProduct_id(e.target.value)} value={product_id}>
                                                                {postCardList && postCardList.map((card) => (
                                                                    <option value={card.id} mrp={card.mrp} discount={card.discount}>{card.title}</option>
                                                                ))}
                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <fieldset>
                                                            <label>Amount</label>
                                                            <input type="text" className="form-control" name='amount' onChange={e => setAmount(e.target.value)} value={amount} />
                                                        </fieldset>
                                                    </div>
                                                    {/* <div className="col-lg-4">
                                                        <fieldset className="">
                                                            <label>Remarks</label>
                                                            <input type="text" className="form-control" />
                                                        </fieldset>
                                                    </div> */}
                                                    {/* <div className="col-lg-1">
                                                        <fieldset style={{ marginTop: '40px' }}>
                                                            <ion-icon name="add-circle-outline" style={{ fontSize: '35px' }} onClick={addFields}></ion-icon>
                                                        </fieldset>
                                                    </div> */}
                                                </div>
                                                {invoiceFieldHTML}
                                            </div>
                                            <div className="row" style={{ marginTop: '25px' }}>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <label>Notes</label>
                                                        <textarea className="form-control" name='notes' onChange={e => setNotes(e.target.value)} value={notes}></textarea>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            {alert}
                                            <button className="btn-primary">Generate</button>
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

export default AddInvoice;