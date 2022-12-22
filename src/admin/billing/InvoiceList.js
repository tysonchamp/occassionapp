import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';

function InvoiceList() {

    const [invoiceLists, setInvoiceLists] = useState("");
    const [loader, setLoader] = useState("");
    const location = useLocation()

    const showLoader = () => {
        setLoader(
            <Loader />
        )
    }

    useEffect(() => {
        console.log(location.pathname.split('/'));
        let pathname = location.pathname.split('/');
        var requestOptions = {
            method: 'GET',
            // body: formdata,
            redirect: 'follow'
        };

        if(pathname[3] == 'cancelled'){
            fetch(AppContext.apiUrl + "billing/cancelled/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setInvoiceLists(data.allBillingList) })
        }else{
            fetch(AppContext.apiUrl + "billing/lists/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setInvoiceLists(data.allBillingList) })
        }

    }, [location]);

    const statusupdate = (userid, status) => {
        showLoader();

        var formdata = new FormData();
        formdata.append("id", userid);
        formdata.append("status", status);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(AppContext.apiUrl + "billing/status_update", requestOptions)
            .then(response => { return response.json() })
            .then(data => { setInvoiceLists(data.allBillingList) })

        setLoader("");
    }

    return <>
        <section className="main-content">
            <div className="container-fluid">
                <div className="content-inner">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <div className="card bg-light mb-3">
                                        <div className="card-header">Search Customers</div>
                                        <div className="card-body">
                                            <div className="filter-wrap row">
                                                <fieldset className="select-box col-lg-3">
                                                    <label>Select Box</label>
                                                    <select className="form-control">
                                                        <option>Select Option 1</option>
                                                        <option>Select Option 2</option>
                                                        <option>Select Option 3</option>
                                                        <option>Select Option 4</option>
                                                        <option>Select Option 5</option>
                                                    </select>
                                                </fieldset>
                                                <fieldset className="select-box col-lg-3">
                                                    <label>Select Box</label>
                                                    <select className="form-control">
                                                        <option>Select Option 1</option>
                                                        <option>Select Option 2</option>
                                                        <option>Select Option 3</option>
                                                        <option>Select Option 4</option>
                                                        <option>Select Option 5</option>
                                                    </select>
                                                </fieldset>
                                                <fieldset className="col-lg-3">
                                                    <label>Text Box</label>
                                                    <input type="text" className="form-control" placeholder="Lorem Ipsum" />
                                                </fieldset>
                                                <fieldset className="col-lg-3" style={{ marginTop: '32px' }}>
                                                    <button className="btn-block btn-dark">Add</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="content-wrap">
                                    <div className="table-wrap">
                                        <div className="card bg-light mb-3">
                                            <div className="card-header">
                                                <span>Post Card List</span>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-wrap">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Notes</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {invoiceLists && invoiceLists.map((invoice) => (
                                                                <tr key={invoice.id}>
                                                                    <td scope="row">#{invoice.id}</td>
                                                                    <td>{invoice.amount} USD</td>
                                                                    <td>{invoice.notes}</td>
                                                                    <td>
                                                                        <Link to={`/admin/invoice/edit/${invoice.id}`} state={{ invoiceid: invoice.id }}><i className="fa fa-pencil-square-o fa-lg"></i></Link>
                                                                    </td>
                                                                    <td>
                                                                        <a href="" onClick={(e) => { e.preventDefault(); statusupdate(invoice.id, (invoice.deleted_at == null ? 0 : 1)) }}>
                                                                            {invoice.deleted_at == null ? <i className="fa fa-trash fa-lg"></i> : <i className="fa fa-recycle fa-lg"></i>}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav className="text-center">
                                                    {loader}
                                                </nav>
                                            </div>
                                        </div>
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

export default InvoiceList;