import { environment } from '../../environments/environment.dev.js'




export function getAll() {
    return fetch(`${environment.apiUrl}`)
        .then(res => res.json())
        .catch(err => console.log('ERROR' + err))
}






