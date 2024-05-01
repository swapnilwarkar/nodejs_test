const data = []; // In-memory array to store data

module.exports = {
    // Function to add a new item
    addItem(item) {
        data.push(item);
    },

    // Function to get all items
    getItems() {
        return data;
    },

    // Function to get an item by ID
    getItemById(id) {
        return data.find(item => item.id === id);
    },

    // Function to update an item by ID
    updateItem(id, updatedItem) {
        const itemIndex = data.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            data[itemIndex] = updatedItem;
            return true;
        }
        return false;
    },

    // Function to delete an item by ID
    deleteItem(id) {
        const itemIndex = data.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            data.splice(itemIndex, 1);
            return true;
        }
        return false;
    }
};

