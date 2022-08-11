const xhr = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09#`;

xhr.open("GET", url);

xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);

    let output = "";

    for (let i = 0; i < response.length; i++) {
      output += `
      <div style="display:flex; justify-content:space-evenly; ">
        <div style="margin-bottom:4rem;  background-color:#000">
          <h1 style=" font-family: poppins; background-color:#ffffcc">Details of ${response[i].name}</h1>
          <div style="background-color:#cdb4db">
            <h4 >UserName: @${response[i].username}</h4>
            <h4 >Email: ${response[i].email}</h4>
            </div>
            <div style="background-color:#FFABC3"> <h3>Address</h3>
              <h4 >Suite: ${response[i].address.suite}</h4>
              <h4 >Street: ${response[i].address.street}</h4>
              <h4 >City: ${response[i].address.city}</h4>
              <h4 >Zip: ${response[i].address.zipcode}</h4>
            </div>
            <div style="background-color:#d2fa9e"> <h3>Location</h3>
              <h4 >Latitude: ${response[i].address.geo.lat}</h4>
              <h4 >Longitude: ${response[i].address.geo.lng}</h4>
            </div>
        </div> 

        <div style="background-color:#000; height:10%; margin-left:1rem;">
          <h1 style="background-color:#caffbf;">Office details</h1>
            <div style="background-color:#ffffcc">
              <h4 >Contact-info: ${response[i].phone}</h4>
              <h4 >Website: ${response[i].website}</h4>
              <h4 >Comapny: ${response[i].company.name}</h4>
              <h4 >Catchphrase: ${response[i].company.cathphrase}</h4>
              <h4 >Bs: ${response[i].company.bs}</h4>
            </div>
        </div>
      </div>



        `;
    }
    document.querySelector("#my-container").innerHTML = output;
  }
};
xhr.send();
