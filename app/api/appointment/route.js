import mongoose from "mongoose";
import { NextResponse } from "next/server";
import validator from "validator";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS,
  },
});

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI is missing!");

// ✅ Connect to MongoDB (Reuse existing connection)
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

// ✅ Define Schema (Prevents recompilation)
const AppointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, trim: true, lowercase: true }, // Added email
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (v) => validator.isMobilePhone(v, "en-IN"), // Adjust based on your country
        message: "Invalid phone number",
      },
    },
    date: { type: String, required: true },
    time: { type: String, required: true },
    service: { type: String, required: true, trim: true, maxlength: 100 },
    notes: { type: String, trim: true, maxlength: 500 }, // Optional notes
  },
  { timestamps: true }
);

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);

// ✅ API Handler
export async function POST(req) {
  try {
    await connectDB(); // 🔹 Connect to MongoDB

    const body = await req.json();
    const { name, email, phone, service, date, time, notes } = body;

    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // 🔹 Save Appointment in MongoDB
    const newAppointment = await Appointment.create({ name, email, phone, service, date, time, notes });

    console.log("✅ Appointment Saved:", newAppointment);

    await transporter.sendMail({
      from: '"Alerts @CarEleven" <ashishahirwar4793@gmail.com>', // Must be the verified email
      to: "ashishku1063@gmail.com", 
      subject: "New Appointment Recieved",
      html: `<p>Dear Admin,</p><p style='font-weight : bold;'>A new appointment has been received!</p><p style='font-weight: bold;'>Appointment Details :-</p><p>Name: ${newAppointment.name}</p><p>Email: ${newAppointment.email}</p><p>Phone: ${newAppointment.phone}</p><p>Service: ${newAppointment.service}</p><p>Date: ${newAppointment.date}</p><p>Time: ${newAppointment.time}</p><p>Notes: ${newAppointment.notes || "N/A"}</p><p></p><p>Regards,</p><p>Postmaster@CarEleven</p>`,
    });

    return NextResponse.json({ message: "Appointment booked successfully!", appointment: newAppointment }, { status: 201 });
  } catch (error) {
    console.error("❌ Error processing appointment:", error);
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.name }, { status: 400 });
    }    
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
