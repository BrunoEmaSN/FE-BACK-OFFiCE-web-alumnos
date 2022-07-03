import axios from 'axios';
import Swal from 'sweetalert2';

export const axiosWithoutToken = async ( url, method = 'GET' ) => {
    const config = {
        method,
        url
    };

    let result = [];

    await axios( config )
        .then((response) => {
            result = response.data;
        })
        .catch((error) => {
            const message = error.message

            Swal.fire( 'Error', message, 'error' );
        });
    return result;
}