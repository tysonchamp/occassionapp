import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';

function CustomerLists() {

    const [customerLists, setCustomerLists] = useState("");
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

        if(pathname[3] == 'active'){
            fetch(AppContext.apiUrl + "customers/active_lists/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setCustomerLists(data.userLists) })
        }else{
            fetch(AppContext.apiUrl + "customers/inactive_lists/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setCustomerLists(data.userLists) })
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

        fetch(AppContext.apiUrl + "customers/status_update", requestOptions)
            .then(response => { return response.json() })
            .then(data => { setCustomerLists(data.userLists) })

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
                                                <fieldset className="col-lg-3" style={{marginTop: '32px'}}>
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
                                                <span>Customers List</span>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-wrap">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Customer Name</th>
                                                                <th scope="col">Email</th>
                                                                <th scope="col">Phone No.</th>
                                                                <th scope="col">Country</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {customerLists && customerLists.map((user) => (
                                                                <tr key={user.id}>
                                                                    <td scope="row">{user.name}</td>
                                                                    <td>{user.email}</td>
                                                                    <td>{user.phone}</td>
                                                                    <td>{user.country}</td>
                                                                    <td>{user.address}</td>
                                                                    <td>
                                                                    <Link to={`/admin/customer/edit/${user.id}`} state={{ userid: user.id }}><i className="fa fa-pencil-square-o fa-lg"></i></Link>
                                                                    </td>
                                                                    <td>
                                                                    <a href="" onClick={(e) => { e.preventDefault(); statusupdate(user.id, (user.deleted_at == null ? 0 : 1)) }}>
                                                                            {user.deleted_at == null ? <i className="fa fa-trash fa-lg"></i> : <i className="fa fa-recycle fa-lg"></i>}
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

export default CustomerLists;