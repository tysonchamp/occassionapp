import react from 'react';

function Loader() {
    return (
        <>
            <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
            <span class="sr-only">Refreshing...</span>
        </>
    )
}

export default Loader;