function AddPostCards() {
    return <>
        <section className="main-content">
            <div className="container-fluid">
                <div className="content-inner">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-9 main-box">
                                <div className="content-wrap">
                                    <div className="form-wrap">
                                        <div className="title-div">
                                            <h3>Add New Email Template</h3>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <label>Template Title</label>
                                                        <input type="text" className="form-control" placeholder="Lorem Ipsum" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset className="select-box">
                                                        <label>Select Template Category</label>
                                                        <select className="form-control">
                                                            <option>Select Option 1</option>
                                                            <option>Select Option 2</option>
                                                            <option>Select Option 3</option>
                                                            <option>Select Option 4</option>
                                                            <option>Select Option 5</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <label>Template Code</label>
                                                        <textarea className="form-control" cols="" rows="4" placeholder="Enter Message"></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-4">
                                                    <fieldset>
                                                        <label className="title">Enable This Template</label>
                                                        <div className="radio small-box">
                                                            <label>
                                                                <input type="radio" value="" name="radio" required />
                                                                    <span className="cr"><i className="cr-icon fa fa-check" aria-hidden="true"></i></span>
                                                                    <span><strong>Yes</strong> <a href="#" title="Get a similarity report along with the final file ($5)"></a></span>
                                                            </label>
                                                        </div>
                                                        <div className="radio small-box">
                                                            <label>
                                                                <input type="radio" name="radio" value="" required />
                                                                    <span className="cr"><i className="cr-icon fa fa-check" aria-hidden="true"></i></span>
                                                                    <span><strong>No</strong> <a href="#" title="Get a similarity report along with the final file ($5)"></a></span>
                                                            </label>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-8">
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <label>Upload Files</label>
                                                            <div className="custom-file">
                                                                <input type="file" name="files[]" multiple className="custom-file-input form-control" id="customFile" />
                                                                    <label className="custom-file-label" for="customFile">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <button className="btn-primary">Add Template</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 right-box">
                                <div className="right-panel">
                                    <div className="graphics"><a href="#"><img src="images/chart-3.webp" alt="SlingShot" /></a></div>
                                    <div className="right-content">
                                        <div className="content-item">
                                            <div className="content-title">
                                                <div className="icon">
                                                    <ion-icon name="documents-outline"></ion-icon>
                                                </div>
                                                <h4>Lorem ipsum dolor sit amet adipiscing</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                        </div>
                                        <div className="content-item">
                                            <div className="content-title">
                                                <div className="icon">
                                                    <ion-icon name="document-text-outline"></ion-icon>
                                                </div>
                                                <h4>eiusmod tempor incididunt labore et</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                        </div>
                                        <div className="content-item">
                                            <div className="content-title">
                                                <div className="icon">
                                                    <ion-icon name="shield-checkmark-outline"></ion-icon>
                                                </div>
                                                <h4>At vero eos et accusamus iusto odio dolor</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
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

export default AddPostCards;