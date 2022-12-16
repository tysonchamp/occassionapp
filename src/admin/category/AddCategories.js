import { Link, useLocation } from 'react-router-dom';
import CustomSweetAlert from '../../components/SweetAlert';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';

function AddCategories(props) {

    const [catname, setCatname] = useState("");
    const [catdescriptions, setCatdescriptions] = useState("");
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");
    const [categoryLists, setCategoryLists] = useState("");
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
    
            fetch(AppContext.apiUrl + "post/category/fetch/"+pathname[5], requestOptions)
                .then(response => { return response.json() })
                .then(data => { 
                    setCategoryLists(data.categories);
                    setCatname(data.categoryData.title);
                    setCatdescriptions((data.categoryData.descriptions == null ? "" : data.categoryData.descriptions));
                })
        }else{
            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };
    
            fetch(AppContext.apiUrl + "post/category/lists/0", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setCategoryLists(data.categories) })
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
        formdata.append("title", catname);
        formdata.append("descriptions", catdescriptions);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (location.pathname.split('/').length < 6) {
            
            let results = await fetch(AppContext.apiUrl + "post/category/create", requestOptions);
            let returnData = await results.json();

            console.log(returnData);
            if (returnData.success === true) {
                showAlert(returnData.message[0], 'success');
                setCategoryLists(returnData.categories);
                setLoader("");
            } else {
                showAlert(returnData.message[0], 'warning');
                setLoader("");
            }
        }else{
            let pathname = location.pathname.split('/');
            let results = await fetch(AppContext.apiUrl + "post/category/update/"+pathname[5], requestOptions);
            let returnData = await results.json();

            console.log(returnData);
            if (returnData.success === true) {
                showAlert(returnData.message[0], 'success');
                setCategoryLists(returnData.categories);
                setLoader("");
            } else {
                showAlert(returnData.message[0], 'warning');
                setLoader("");
            }
        }
    };

    const statusupdate = (catid, status) => {
        showLoader();

        var formdata = new FormData();
        formdata.append("id", catid);
        formdata.append("status", status);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(AppContext.apiUrl + "post/category/status_update", requestOptions)
            .then(response => { return response.json() })
            .then(data => { setCategoryLists(data.categories) })

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
                                        <div className="card-header">Create Category</div>
                                        <div className="card-body">
                                            {alert}
                                            <form className="filter-wrap row" onSubmit={handleSubmit}>
                                                <div className="col-lg-12 row">
                                                    <fieldset className="col-lg-12">
                                                        <label>Category Title</label>
                                                        <input type="text" className="form-control" name="catname" onChange={e => setCatname(e.target.value)} value={catname} />
                                                    </fieldset>
                                                    <fieldset className="col-lg-12">
                                                        <label>Descriptions</label>
                                                        <textarea type="text" className="form-control" name="catdescriptions" onChange={e => setCatdescriptions(e.target.value)} value={catdescriptions}></textarea>
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
                                                                <th scope="col">Category Title</th>
                                                                <th scope="col">Descriptions</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {categoryLists && categoryLists.map((cat) => (
                                                                <tr key={cat.id}>
                                                                    <td scope="row">{cat.title}</td>
                                                                    <td>{cat.descriptions}</td>
                                                                    <td>
                                                                        <Link to={`/admin/postcards/category/edit/${cat.id}`} state={{ catid: cat.id }}><i className="fa fa-pencil-square-o fa-lg"></i></Link>
                                                                    </td>
                                                                    <td>
                                                                        <a href="" onClick={(e) => { e.preventDefault(); statusupdate(cat.id, (cat.deleted_at == null ? 0 : 1)) }}>
                                                                            {cat.deleted_at == null ? <i className="fa fa-trash fa-lg"></i> : <i className="fa fa-recycle fa-lg"></i>}
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

export default AddCategories;