const users = require('../model/index');
const express = require('express');
const app = express();
const path = require('path');



exports.indexPage = (req, res) => {
  const pageUrl = 'C:/Users/ADMIN/Desktop/Vaishnavi/Sharpener/ExpressSQL/Full Stack Booking Appoinntment App/public/index.html';
  res.sendFile(pageUrl);
};


exports.postExpenseLoginData = async (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;

  // Validate the user input
  if (!amount || !description || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const result = await users.create({
        amount: amount,
        description: description,
        category: category,
    });

    console.log('Created Expense');
      // Send the result as JSON response
    res.json({ message: 'Expense created successfully', user: result });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

exports.showallusers = async (req, res, next) => {
  try{
    const  user =await users.findAll();
    console.log(user);
      res.status(200).json({allUsers:user});
}catch(err){
  console.log(err);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

    exports.list= (req, res) => {
      const pageUrl = 'C:/Users/ADMIN/Desktop/Vaishnavi/Sharpener/ExpressSQL/Full Stack Booking Appoinntment App/public/list.html';
      res.sendFile(pageUrl);
    };


    exports.deleteexpense = async (req, res) => {
      const userId = req.params.id; // Retrieve the user ID from the URL parameter
      console.log(userId);
  
      try {
         
          if (userId == 'undefined') {
            console.log('ID is missing')
            return res.status(400).json({err:'ID is missing'})
          }
              await users.destroy({where:{id:userId}});
              console.log('DESTROYED USER');
              res.status(200);
            //  res.redirect('/showallusers');
         
      } catch (err) {
          console.log(err);
          // Handle any errors that occur during the database operation
      }
     
  };
  
  
        
     
 
    // exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId)
//     .then(product => {
//       return product.destroy();
//     })
//     .then(result => {
//       console.log('DESTROYED PRODUCT');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };

// exports.showallusers = (req, res, next) => {
//   users.fetchAll(user1 => {
//       if(req.query.id){
//         user1.forEach(user2 => {
//           console.log(user2.id)
          
//         });
//       }
//     .catch(err => console.log(err));
// };

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId)
//     .then(product => {
//       if (!product) {
//         return res.redirect('/');
//       }
//       res.render('admin/edit-product', {
//         pageTitle: 'Edit Product',
//         path: '/admin/edit-product',
//         editing: editMode,
//         product: product
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   Product.findById(prodId)
//     .then(product => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.description = updatedDesc;
//       product.imageUrl = updatedImageUrl;
//       return product.save();
//     })
//     .then(result => {
//       console.log('UPDATED PRODUCT!');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };




