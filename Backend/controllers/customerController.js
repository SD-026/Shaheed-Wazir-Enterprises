import Customer from '../models/Customer.js';

// export const addCustomer = async (req, res) => {
//     const customer = await Customer.create(req.body);
//     res.status(201).json(customer);
// };




// Add new customer
export const addCustomer = async (req, res) => {
  try {
    // Validate input
    const { name, email, phone, address, reference } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Check if customer already exists
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({success:false, message: 'Customer with this email already exists' });
    }

    // Create new customer
    const newCustomer = new Customer({
      name,
      email,
      phone: phone || '',
      address: address || '',
      reference: reference || '',
      balance: 0 // Initialize balance to 0
    });

    // Save to database
    const savedCustomer = await newCustomer.save();

    // Return success response
    res.status(201).json({
      message: 'Customer added successfully',
      customer: savedCustomer,
      success:true
    });
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}



export const getCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.json({customers});
};



export const deleteUserController = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Customer.findByIdAndDelete(id);
      if (!user) return res.status(404).json({success:false, message: 'Customer not found' });
      res.status(200).json({success:true, message: 'Customer deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  export const getcustomer = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Customer.findById(id);
      if (!user) return res.status(404).json({success:false, message: 'Customer not found' });
      res.status(200).json({user});
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };