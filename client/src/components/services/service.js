import { environment } from '../../environments/environment.dev.js'


export async function fetchText() {
    let response = await fetch(`${environment.apiUrl}`);
    let data = await response;
    console.log(data);
}

export async function getAllPost() {

    console.log('getALL')

    // const response = await fetch(`${environment.apiUrl}`);
    // console.log(response)
    // const json = response.then((a)=> {
    //     console.log(a)
    // })
    // console.log(json);

    // fetch(`${environment.apiUrl}`)
    //     .then(response => response.json())
    //     .then((data) =>
    //         console.log(data))


}



