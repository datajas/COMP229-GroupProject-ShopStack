export const getProducts = (req, res) => {
  res.json([
    { id: 1, name: "Phone", price: 899 },
    { id: 2, name: "Laptop", price: 1499 }
  ]);
};

export const addProduct = (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ message: `Product ${name} added successfully`, price });
};