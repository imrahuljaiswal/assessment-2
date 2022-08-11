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
        <h4>${response[i].name}</h4>
        <h4>${response[i].username}</h4>
        <h4>${response[i].email}</h4>
        <h4>${response[i].address.street}</h4>
        <h4>${response[i].address.suite}</h4>
        <h4>${response[i].address.city}</h4>
        <h4>${response[i].address.zipcode}</h4>
        <h4>${response[i].address.geo.lat}</h4>
        <h4>${response[i].address.geo.lng}</h4>

        <h4>${response[i].phone}</h4>
        <h4>${response[i].website}</h4>
        <h4>${response[i].company.name}</h4>
        <h4>${response[i].company.cathphrase}</h4>
        <h4>${response[i].company.bs}</h4>

        `;
    }
    document.querySelector("#my-container").innerHTML = output;
  }
};
xhr.send();
