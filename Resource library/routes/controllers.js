const { Resource, Author } = require('../models/models');

// Resource Controllers

// Controller to get all resources
const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to add a new resource
const addResource = async (req, res) => {
    const { title, author, type } = req.body;
    const newResource = new Resource({
        title,
        author,
        type
    });

    try {
        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a resource
const deleteResource = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedResource = await Resource.findByIdAndDelete(id);
        if (!deletedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Author Controllers

// Controller to get all authors
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to add a new author
const addAuthor = async (req, res) => {
    const { name } = req.body;
    const newAuthor = new Author({
        name
    });

    try {
        const savedAuthor = await newAuthor.save();
        res.status(201).json(savedAuthor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete an author
const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id);
        if (!deletedAuthor) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllResources,
    addResource,
    deleteResource,
    getAllAuthors,
    addAuthor,
    deleteAuthor
};
