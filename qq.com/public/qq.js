const request = new XMLHttpRequest();

request.open("GET", "http://frank.com:7777/group.json");
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  }
};

request.send();
