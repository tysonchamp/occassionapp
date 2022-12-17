import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';
import InvoiceFields from '../../components/InvoiceFields';

function AddInvoice() {

    const [postCardList, setPostCardsList] = useState("");
    const [invoiceItemsNumber, setInvoiceItemsNumber] = useState(1);
    // 
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
        let fieldNumber = invoiceItemsNumber+1;
        setInvoiceItemsNumber(fieldNumber);
        const element = [];
        for (let index = 0; index < invoiceItemsNumber; index++) {
            let rowData = {};
            rowData.id = index+1;
            rowData.postCardList = postCardList;
            element[index] = <InvoiceFields rowdata={rowData} />;
        }
        setInvoiceFieldHTML(element)
    }

    useEffect(() => {
        console.log(location.pathname.split('/'));
        let pathname = location.pathname.split('/');
        var requestOptions = {
            method: 'GET',
            // body: formdata,
            redirect: 'follow'
        };

        fetch(AppContext.apiUrl + "post/cards/all", requestOptions)
            .then(response => { return response.json() })
            .then(data => { setPostCardsList(data.postcardsData) })

        showInvoiceFields();

    }, [location]);

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
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset className="select-box">
                                                        <label>Select a Flat</label>
                                                        <select className="form-control">
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Reciept Date</label>
                                                        <input type="date" className="form-control" placeholder="Lorem Ipsum" />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div id='productsLists'>
                                                <div className="row" id='rowid-0' key="{'rowid-0'}">
                                                    <div className="col-lg-4">
                                                        <fieldset className="select-box">
                                                            <label>Select Postcard</label>
                                                            <select className="form-control">
                                                                {postCardList && postCardList.map( (card) => (
                                                                    <option value={card.id} mrp={card.mrp} discount={card.discount}>{card.title}</option>
                                                                ))}
                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <fieldset>
                                                            <label>Amount</label>
                                                            <input type="text" className="form-control" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <fieldset className="">
                                                            <label>Remarks</label>
                                                            <input type="text" className="form-control" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <fieldset style={{ marginTop: '40px' }}>
                                                            <ion-icon name="add-circle-outline" style={{ fontSize: '35px' }} onClick={addFields}></ion-icon>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                {invoiceFieldHTML}
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <table className="">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="col-md-10" colSpan="4">Sub Total: </td>
                                                                        <td className="col-md-2">
                                                                            <input type="text" className="form-control" id="subtotalCost" name="subtotalCost" readOnly />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="col-md-10" colSpan="4">18% GST: </td>
                                                                        <td className="col-md-2">
                                                                            <input type="text" className="form-control" id="gstAmount" name="gstAmount" readOnly />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="col-md-10" colSpan="4">Total Cost: </td>
                                                                        <td className="col-md-2">
                                                                            <input type="text" className="form-control" id="totalCost" name="totalCost" readOnly />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="col-md-10" colSpan="4">Recivable Payment: </td>
                                                                        <td className="col-md-2">
                                                                            <input type="text" className="form-control" id="advancePayment" name="advancePayment" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="col-md-10" colSpan="4">Current Due: </td>
                                                                        <td className="col-md-2">
                                                                            <input type="text" className="form-control" id="totalDue" name="totalDue" readOnly />
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ marginTop: '25px' }}>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Notes</label>
                                                        <textarea className="form-control"></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Admin Remarks (For Admin Purpose Only)</label>
                                                        <textarea className="form-control"></textarea>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <button className="btn-primary">Generate</button>
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