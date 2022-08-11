const xhr = new XMLHttpRequest();
//   const value = document.querySelector("#search").value;

const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09#`;

xhr.open("GET", url);

xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);

    let output = "";

    for (let i = 0; i < response.length; i++) {
      output += `
      <div style="display:flex; justify-content:space-evenly">
        <div>
          <h1>Personal details</h1>
            <h4>Name: ${response[i].name}</h4>
            <h4>UserName: @${response[i].username}</h4>
            <h4>Email: ${response[i].email}</h4>
            <div>
              <h4>Suite: ${response[i].address.suite}</h4>
              <h4>Address: ${response[i].address.street}</h4>
              <h4>City: ${response[i].address.city}</h4>
              <h4>Zip: ${response[i].address.zipcode}</h4>
            </div>
            <div>
              <h4>Latitude: ${response[i].address.geo.lat}</h4>
              <h4>Longitude: ${response[i].address.geo.lng}</h4>
            </div>
        </div>

        <div>
        <h1>Office details</h1>
          <h4>Contact-info: ${response[i].phone}</h4>
          <h4>Website: ${response[i].website}</h4>
          <h4>Comapny-name: ${response[i].company.name}</h4>
          <h4>Catchphrase: ${response[i].company.cathphrase}</h4>
          <h4>Bs: ${response[i].company.bs}</h4>
        </div>
      </div>


        `;
    }
    document.querySelector("#my-container").innerHTML = output;
  }
};
xhr.send();
