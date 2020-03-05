function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "callback" + Math.random();
    window[random] = data => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
    script.onload = () => {
      script.remove();
    };
  });
}
jsonp("http://qq.com:8888/friends.js").then(data => {
  console.log(data);
});
