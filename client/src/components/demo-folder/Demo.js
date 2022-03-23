import { environment } from '../../environments/environment.dev.js'

function Demo() {




    fetch(`${environment.apiUrl}`)
        .then(response => response.json())
        .then((data) => data)




    return (
        <div>
            <h1>data</h1>
        </div>

    );

}



export default Demo