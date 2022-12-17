import react from 'react';

function InvoiceFields(props) {

    return (
        <>
            <div className="row" id={`rowid-${(props.rowdata != null ? props.rowdata.id : 0)}`} key="{(props.rowdata != null ? props.rowdata.id : 0)}">
                <div className="col-lg-4">
                    <fieldset className="select-box">
                        <label>Select Postcard</label>
                        <select className="form-control">
                            {props.rowdata && props.rowdata.postCardList.map( (card) => (
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
                    <fieldset style={{marginTop: '40px'}}>
                        <ion-icon name="trash-outline" style={{fontSize: '35px'}} onclick={`document.getElementById('rowid-${(props.rowdata != null ? props.rowdata.id : 0)}').remove();`}></ion-icon>
                    </fieldset>
                </div>
            </div>
        </>
    )
}

export default InvoiceFields;