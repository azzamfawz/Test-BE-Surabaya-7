import db from "../config/database.js";
import Order from "../models/OrderModel.js";


// Fungsi untuk menghasilkan nomor tiket secara otomatis
export const generateTicketNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const ticketNumberLength = 8;
  
    let ticketNumber = '';
    for (let i = 0; i < ticketNumberLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      ticketNumber += characters.charAt(randomIndex);
    }
  
    return ticketNumber;
  };
  
export const createOrder = async (req, res) => {
  try {
    const ticketNumber = generateTicketNumber();
    const {
      name,
      email,
      origin,
      destination,
      date_time,
      price,
      total_passanger,
    } = req.body;

    // Membuat order baru
    const newOrder = await Order.create({
        ticketNumber,
        name,
        email,
        origin,
        destination,
        date_time,
        price,
        total_passanger,
    });

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Data telah diterima dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan
    res.status(201).json({ message: responseMessage });
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrderByTicketNumber = async (req, res) => {
  try {
    const { ticketNumber } = req.params;

    const order = await Order.findOne({
      where: { ticketNumber },
      attributes: { exclude: ["order_id", "createdAt", "updatedAt"] },
    });

    if (!order) {
      return res.status(404).json({ error: "Order tidak ditemukan" });
    }

    // Pesan tambahan untuk respons JSON
    const responseMessage = `Order dengan nomor tiket ${ticketNumber}`;

    // Mengirim respons JSON dengan pesan tambahan dan status 200
    res.status(200).json({ message: responseMessage, order });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};