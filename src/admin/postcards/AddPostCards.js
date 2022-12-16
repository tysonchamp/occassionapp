import { useLocation } from 'react-router-dom';
import CustomSweetAlert from '../../components/SweetAlert';
import { useState, useEffect } from 'react';
import AppContext from '../../components/GlobalVars';
import Loader from '../../components/Loader';
// 

function AddPostCards() {

    const [title, setTitle] = useState("");
    const [mrp, setMrp] = useState("");
    const [discount, setDiscount] = useState("");
    const [category, setCategory] = useState("");
    // eslint-disable-next-line
    const [preview_image, setPreview_image] = useState("");
    // eslint-disable-next-line
    const [attachment, setAttachment] = useState("");
    const [postCardCategories, setPostCardCategories] = useState("");
    // 
    const [alert, setAlert] = useState("");
    const [loader, setLoader] = useState("");
    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname.split('/'));
        if (location.pathname.split('/').length === 5) {
            let pathname = location.pathname.split('/');
            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };

            fetch(AppContext.apiUrl + "post/cards/fetch/"+pathname[4], requestOptions)
                .then(response => { return response.json() })
                .then(data => { 
                    console.log(data);
                    setTitle(data.postCardData.title);
                    setMrp(data.postCardData.mrp);
                    setDiscount(data.postCardData.discount);
                    setCategory(data.postCardData.category);
                    setPreview_image(data.postCardData.preview_image);
                    setAttachment(data.postCardData.attachment);
                    setPostCardCategories(data.categories);
                })
        }else{
            var requestOptions = {
                method: 'GET',
                // body: formdata,
                redirect: 'follow'
            };
    
            fetch(AppContext.apiUrl + "post/category/all_lists", requestOptions)
                .then(response => { return response.json() })
                .then(data => { setPostCardCategories(data.categories) })
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
        formdata.append("title", title);
        formdata.append("preview_image", preview_image);
        formdata.append("mrp", mrp);
        formdata.append("discount", discount);
        formdata.append("attachment", attachment);
        formdata.append("category", category);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (location.pathname.split('/').length === 5) {
            let pathname = location.pathname.split('/');
            let results = await fetch(AppContext.apiUrl + "post/cards/update/"+pathname[4], requestOptions);
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
            let results = await fetch(AppContext.apiUrl + "post/cards/create", requestOptions);
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
                                            <h3>Manage Postcard Template</h3>
                                        </div>
                                        <form onSubmit={handleformsubmit}>
                                            {alert}
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Template Title</label>
                                                        <input type="text" className="form-control" placeholder="Template Title" name="title" onChange={e => setTitle(e.target.value)} value={title} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>MRP</label>
                                                        <input type="text" className="form-control" placeholder="MRP" name="mrp" onChange={e => setMrp(e.target.value)} value={mrp} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Discounted Amount</label>
                                                        <input type="text" className="form-control" placeholder="Discounted Amount" name="discount" onChange={e => setDiscount(e.target.value)} value={discount} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset className="select-box">
                                                        <label>Template Category</label>
                                                        <select className="form-control" name='category' onChange={e => setCategory(e.target.value)} value={category}>
                                                            <option>Select a Category</option>
                                                            {postCardCategories && postCardCategories.map((cat) => (
                                                                <option value={cat.id}>{cat.title}</option>
                                                            ))}
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <img src={preview_image && URL.createObjectURL(preview_image)} className='img-thumbnail' />
                                                        <div className="form-group">
                                                            <label>Preview Image</label>
                                                            <div className="custom-file">
                                                                <input type="file" name="preview_image" className="custom-file-input form-control" id="preview_image" onChange={e => setPreview_image(e.target.files[0])} />
                                                                <label className="custom-file-label" for="preview_image">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <img src={attachment && URL.createObjectURL(attachment)} className='img-thumbnail' />
                                                        <div className="form-group">
                                                            <label>Postcard File</label>
                                                            <div className="custom-file">
                                                                <input type="file" name="attachment" className="custom-file-input form-control" id="attachment" onChange={e => setAttachment(e.target.files[0])} />
                                                                <label className="custom-file-label" for="attachment">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <button className="btn-primary">Save Post Card</button>
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

export default AddPostCards;