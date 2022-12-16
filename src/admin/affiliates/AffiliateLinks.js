import { Link, useLocation } from 'react-router-dom';
import CustomSweetAlert from '../../components/SweetAlert';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';


function AffiliateLinks() {
    
    const [linktitle, setLinktitle] = useState("");
    const [refurl, setRefurl] = useState("");
    const [affiliatelinklists, setAffiliatelinklists] = useState("");
    // 
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");
    const location = useLocation()
    // console.log(location.pathname.split('/'));

    useEffect(() => {

        if (location.pathname.split('/').length == 6) {
            let pathname = location.pathname.split('/');
            console.log(pathname[5]);

            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };
    
            fetch(AppContext.apiUrl + "affiliate/fetch/"+pathname[5], requestOptions)
                .then(response => { return response.json() })
                .then(data => { 
                    setAffiliatelinklists(data.partnerLinks);
                    setLinktitle(data.partnerLinkData.title);
                    setRefurl(data.partnerLinkData.link);
                })
        }else{
            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };
    
            fetch(AppContext.apiUrl + "affiliate/lists/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setAffiliatelinklists(data.partnerLinks) })
        }

    }, [location]);

    const showAlert = (message, type) => {
        let alertData = { msg: message, type: type };
        setAlert(
            <CustomSweetAlert alert={alertData} />
        )

        setTimeout(() => {
            setAlert("");
        }, 2000);
    }

    const showLoader = () => {
        setLoader(
            <Loader />
        )
    }

    const handleSubmit = async (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        showLoader();

        var formdata = new FormData();
        formdata.append("title", linktitle);
        formdata.append("link", refurl);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (location.pathname.split('/').length < 6) {
            
            let results = await fetch(AppContext.apiUrl + "affiliate/create", requestOptions);
            let returnData = await results.json();

            console.log(returnData);
            if (returnData.success === true) {
                showAlert(returnData.message[0], 'success');
                setAffiliatelinklists(returnData.partnerLinks);
                setLoader("");
            } else {
                showAlert(returnData.message[0], 'warning');
                setLoader("");
            }
        }else{
            let pathname = location.pathname.split('/');
            let results = await fetch(AppContext.apiUrl + "affiliate/update/"+pathname[5], requestOptions);
            let returnData = await results.json();

            console.log(returnData);
            if (returnData.success === true) {
                showAlert(returnData.message[0], 'success');
                setAffiliatelinklists(returnData.partnerLinks);
                setLoader("");
            } else {
                showAlert(returnData.message[0], 'warning');
                setLoader("");
            }
        }
    };

    const statusupdate = (linkid, status) => {
        showLoader();

        var formdata = new FormData();
        formdata.append("id", linkid);
        formdata.append("status", status);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(AppContext.apiUrl + "affiliate/status_update", requestOptions)
            .then(response => { return response.json() })
            .then(data => { setAffiliatelinklists(data.partnerLinks) })

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
                                        <div className="card-header">Create Affliate Partner</div>
                                        <div className="card-body">
                                            {alert}
                                            <form className="filter-wrap row" onSubmit={handleSubmit}>
                                                <div className="col-lg-12 row">
                                                    <fieldset className="col-lg-12">
                                                        <label>Affliate Partner Title</label>
                                                        <input type="text" className="form-control" name="linktitle" onChange={e => setLinktitle(e.target.value)} value={linktitle} />
                                                    </fieldset>
                                                    <fieldset className="col-lg-12">
                                                        <label>Affliate Partner URL</label>
                                                        <input type="text" className="form-control" name="refurl" onChange={e => setRefurl(e.target.value)} value={refurl} />
                                                    </fieldset>
                                                </div>
                                                <fieldset className="col-lg-12">
                                                    <button className="btn-primary">Update Category</button>
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
                                                <span>Category List</span>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-wrap">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Title</th>
                                                                <th scope="col">Reffer Url</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {affiliatelinklists && affiliatelinklists.map((refLink) => (
                                                                <tr key={refLink.id}>
                                                                    <td scope="row">{refLink.title}</td>
                                                                    <td>{refLink.link}</td>
                                                                    <td>
                                                                        <Link to={`/admin/affiliates/links/edit/${refLink.id}`} state={{ linkid: refLink.id }}><i className="fa fa-pencil-square-o fa-lg"></i></Link>
                                                                    </td>
                                                                    <td>
                                                                        <a href="" onClick={(e) => { e.preventDefault(); statusupdate(refLink.id, (refLink.deleted_at == null ? 0 : 1)) }}>
                                                                            {refLink.deleted_at == null ? <i className="fa fa-trash fa-lg"></i> : <i className="fa fa-recycle fa-lg"></i>}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav className='text-center'>
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

export default AffiliateLinks;