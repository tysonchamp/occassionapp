import react from 'react';

function CustomSweetAlert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.type}:</strong> {props.alert.msg}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default CustomSweetAlert;