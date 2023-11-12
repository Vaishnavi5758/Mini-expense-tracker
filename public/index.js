


//const baseURL = e71cb1bfabef45eda4aaab1457157299;
const myForm = document.querySelector('#myForm');
const amount = document.querySelector('#amount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const usersList = document.querySelector('#data');
myForm.addEventListener("submit",onsubmit);

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    });

    console.log(obj);
    axios.post("http://localhost:3000/expense", obj)
        .then((response) => {
            console.log(response);
            event.target.reset();
            document.body.innerHTML = "<h4>Thanks for adding expense.</h4>"; 
        })
        .catch((err) => {
            document.body.innerHTML = "<h4>Something went wrong</h4>";
            console.error(err);
        });

        
});
