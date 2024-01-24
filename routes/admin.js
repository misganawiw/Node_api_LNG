const express = require('express');
const router = express.Router();

// GET route for admin dashboard
router.get('/dashboard', (req, res) => {
                    res.send('Welcome to the admin dashboard!');
});router.get('/', (req, res) => {
                    res.send('Welcome to the admin dashboard!');
});

// POST route for adding a new book
router.post('/books', (req, res) => {
                    // Logic for adding a new book
                    res.send('Book added successfully!');
});

// PUT route for updating book details
router.put('/books/:id', (req, res) => {
                    const bookId = req.params.id;
                    // Logic for updating book details
                    res.send(`Book with ID ${bookId} updated successfully!`);
});

// DELETE route for removing a book
router.delete('/books/:id', (req, res) => {
                    const bookId = req.params.id;
                    // Logic for removing a book
                    res.send(`Book with ID ${bookId} removed successfully!`);
});



module.exports = router;
