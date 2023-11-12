
console.log("hi this is showallusers.js file");
document.addEventListener("DOMContentLoaded", function () {
    console.log("hi this is showallusers.js file");

    axios.get("http://localhost:3000/showallusers")
        .then((response) => {
            const jsonData = response.data.allUsers;

            // Function to create HTML elements
            function createExpenseItem(expense) {
                const item = document.createElement('div');
                item.classList.add('expenseItem');
                item.innerHTML = `
                    <p>ID: ${expense.id}</p>
                    <p>Amount: $${expense.amount}</p>
                    <p>Description: ${expense.description}</p>
                    <p>Category: ${expense.category}</p>
                    <p>Created At: ${expense.createdAt}</p>
                    <p>Updated At: ${expense.updatedAt}</p>
                    <button class="deleteButton">Delete</button>
                `;

                // Add an event listener to the delete button
                const deleteButton = item.querySelector('.deleteButton');
                deleteButton.addEventListener('click', () => deleteExpense(expense.id));

                return item;
            }

            // Get the expenseList div
            const expenseListDiv = document.getElementById('expenseList');

            // Function to delete an expense
            async function deleteExpense(expenseId) {
                try {
                    console.log(expenseId);
                    console.log('Before axios.delete');
                    const response = await axios.delete(`http://localhost:3000/deleteexpense/${expenseId}`);
                    console.log('After axios.delete - Success:', response.data);
            
                    // Remove the deleted expense from the UI
                    const expenseItemToDelete = document.getElementById(`expenseItem-${expenseId}`);
                    if (expenseItemToDelete) {
                        expenseItemToDelete.remove();
                    } else {
                        console.error(`Expense item with ID ${expenseId} not found in the UI.`);
                    }
                } catch (error) {
                    console.error('After axios.delete - Error:', error);
                }
            }
            
            

            // Loop through the JSON data and create HTML elements
            jsonData.forEach(expense => {
                const expenseItem = createExpenseItem(expense);
                expenseItem.id = `expenseItem-${expense.id}`;
                expenseListDiv.appendChild(expenseItem);
            });
        })
        .catch((error) => {
            console.error(error);
        });
});

    // function createDeleteButton(uniqueId) {
    //     const deleteButton = document.createElement('button');
    //     deleteButton.textContent = 'Delete';
    //     deleteButton.className = 'delete-btn';
    //     deleteButton.type="delete-btn";
    //    //The anonymous function is passed as the event listener. When the delete button is clicked
    //     deleteButton.addEventListener('click', () => deleteItemFromServer(uniqueId));
    //     //usersList.removeChild(li);
    
    //     return deleteButton;
      
    // }
    
    
    // function createEditButton(uniqueId) {
    //     const editButton = document.createElement('button');
    //     editButton.textContent = 'Edit';
    //     editButton.className = 'edit-btn';
    //    // editButton.addEventListener('click', onEdit);
    //     editButton.addEventListener('click', () => onEdit(uniqueId));
    //     return editButton;
    // }
    
    
    
    // // Function to delete an item from the server
    // function deleteItemFromServer(userId) {
     
    //   if(confirm('Are you sure?')){
    //  axios.delete(`https://crudcrud.com/api/562d9747c638493492856d9a2a89aafd/myData/${userId}`)
    // .then((response)=>{
      
    //   removeUserFromScreen(userId);
    //   console.log("item deleted successfully from server");
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    // }
    // }  
    
    
    
    // function removeUserFromScreen(userId){
    //   const parentNode = document.getElementById(data);
    //   const childNodeToBeDeleted = document.getElementById(userId);
    // if(childNodeToBeDeleted){
    //   parentNode.removeChild(childNodeToBeDeleted);
    //  // showAllUserOnScreen();
    // }
    // console.log("item deleted successfully from screen");
    // }
        
        
    
    // function onEdit(userId) {
       
    // axios.get(  `https://crudcrud.com/api/562d9747c638493492856d9a2a89aafd/myData/${userId}`)
    // .then((response)=>{
    
    //    const user =response.data;
    // document.getElementById("amount").value = user.amount;
    // document.getElementById("description").value = user.description;
    // document.getElementById("category").value = user.category;
    //     }
    //   //  console.log(response)
    // )
    // .catch((error)=>{
    //     console.log(error)
    // })
    // deleteItemFromServer(userId);
    
    // }