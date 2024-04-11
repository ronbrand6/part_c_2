console.log('contact us test')


fetch("http://127.0.0.1:5000/back_contact_us", {
method: "POST",
body: JSON.stringify({
first_name: "www",
last_name: "C",
email: 'soso@gmail.com',
phone:"054-33333333",
message: "please contact me, thank you very much"
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then((response) => response.json())
.then((json) => console.log(json))