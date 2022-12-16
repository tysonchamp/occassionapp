function PostcardsLists() {
    return <>
        <section className="main-content">
            <div className="container-fluid">
                <div className="content-inner">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <div className="card bg-light mb-3">
                                        <div className="card-header">Create Filter Rules</div>
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
                                            <form className="filter-wrap row">
                                                <div className="col-lg-12">
                                                    <h5>Filter by</h5>
                                                </div>
                                                <div className="col-lg-12 row" id="filterRules">
                                                    <fieldset className="col-lg-4">
                                                        <label>Field Name</label>
                                                        <input type="text" className="form-control" value="name" readonly />
                                                    </fieldset>
                                                    <fieldset className="col-lg-4">
                                                        <label>Conditions</label>
                                                        <input type="text" className="form-control" value="LIKE" readonly />
                                                    </fieldset>
                                                    <fieldset className="col-lg-4">
                                                        <label>Query Texts</label>
                                                        <input type="text" className="form-control" value="Mark" readonly />
                                                    </fieldset>
                                                    <fieldset className="col-lg-4">
                                                        <label>Field Name</label>
                                                        <input type="text" className="form-control" value="date" readonly />
                                                    </fieldset>
                                                    <fieldset className="col-lg-4">
                                                        <label>Conditions</label>
                                                        <input type="text" className="form-control" value="LIKE" readonly />
                                                    </fieldset>
                                                    <fieldset className="col-lg-4">
                                                        <label>Query Texts</label>
                                                        <input type="text" className="form-control" value="25-05-2021" readonly />
                                                    </fieldset>
                                                </div>
                                                <fieldset className="col-lg-6">
                                                    <button className="btn-block btn-dark">Search</button>
                                                </fieldset>
                                                <fieldset className="col-lg-6">
                                                    <button className="btn-block btn-dark">Clear Filter</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="content-wrap">
                                    <div className="table-wrap">
                                        <div className="card bg-light mb-3">
                                            <div className="card-header">
                                                <span>Donations List</span>
                                                <div className="filter-drop">
                                                    <div className="dropdown">
                                                        <a href="javascript::void(0);" type="button" data-toggle="dropdown">
                                                            <span>Short by </span>
                                                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <h6>Short by</h6>
                                                            <a className="dropdown-item" href="javascript::void(0);">Amount Low - High</a>
                                                            <a className="dropdown-item" href="javascript::void(0);">Amount High - Low</a>
                                                            <a className="dropdown-item" href="javascript::void(0);">Donation Date ASC</a>
                                                            <a className="dropdown-item" href="javascript::void(0);">Donation Date DESC</a>
                                                            <a className="dropdown-item" href="javascript::void(0);">Donation Type</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-wrap">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Doner Details</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Type</th>
                                                                <th scope="col">Others Info</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">
                                                                    Matt Cuts<br />
                                                                    +91 - 9073352191<br />
                                                                    email.someting181@gmail.com<br />
                                                                    Tribeni Kalitala Bazar, Hooghly, WB - 712503
                                                                </td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Recurring Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium<br />
                                                                        Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mark</td>
                                                                <td>120/- INR</td>
                                                                <td>25th Dec, 2020</td>
                                                                <td>Onetime Payment</td>
                                                                <td>
                                                                    <p>In Memory of: Mark Wilium</p>
                                                                    <p>Cause of Donation: Covid19</p>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-eye fa-lg"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href=""><i className="fa fa-trash fa-lg"></i></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item"><a className="page-link" href="javascript::void(0);">
                                                            <ion-icon name="chevron-back-outline"></ion-icon>
                                                        </a></li>
                                                        <li className="page-item"><a className="page-link" href="javascript::void(0);">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="javascript::void(0);">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="javascript::void(0);">3</a></li>
                                                        <li className="page-item"><a className="page-link" href="javascript::void(0);">
                                                            <ion-icon name="chevron-forward-outline"></ion-icon>
                                                        </a></li>
                                                    </ul>
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

export default PostcardsLists;