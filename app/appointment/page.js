
'use client';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    notes: "",
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null); // Store booked appointment details

  useEffect(() => {
    generateTimeSlots();
  }, [formData.date]);

  function generateTimeSlots() {
    const startTime = 8 * 60 + 30; // 8:30 AM
    const endTime = 20 * 60 + 30; // 8:30 PM
    const interval = 45;
    const now = new Date();
    const todayString = now.toISOString().split("T")[0];

    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    let slots = [];

    for (let minutes = startTime; minutes <= endTime; minutes += interval) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours > 12 ? hours - 12 : hours;
      const formattedMins = mins === 0 ? "00" : mins;
      const timeString = `${formattedHours}:${formattedMins} ${ampm}`;

      if (formData.date === todayString && minutes < currentMinutes) continue;

      slots.push(timeString);
    }

    setAvailableSlots(slots);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      setMessage("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Appointment booked successfully!");
        toast('Appointment booked successfully!')
        setAppointmentDetails(data.appointment);
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: new Date().toISOString().split("T")[0],
          time: "",
          notes: "",
        });
      } else {
        if (data.error == "ValidationError") {
          toast("📵 Please enter a valid phone number!");
        } else {
          toast(`❌ ${error.message}`);
        }   
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast(`❌ ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <ToastContainer position="top-center" autoClose={10000} />
      <main className="flex-1">
        
        <section id="booking" className="relative bg-black py-24 md:py-32 overflow-hidden">
          <div className="relative">
            <div className="mx-auto max-w-[800px] text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Book Your Appointment</h2>
              <p className="mt-6 text-white/70 text-xl">Schedule your car wash appointment in just a few clicks.</p>
            </div>
            <div className="mx-4 md:mx-auto max-w-[600px] rounded-2xl bg-zinc-900 p-8 shadow-xl">
              {/* Show Appointment Card if appointment is booked */}
      {appointmentDetails ? (
        <div>
                  <h2 className="text-rose-500 text-xl text-center">Appointment booked successfully!</h2>

        <div className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden text-gray-100 p-6 m-4">
          <h2 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Appointment Details</h2>

          <div className="mb-3">
            <p className="text-gray-400 text-sm">Name</p>
            <p className="font-medium">{appointmentDetails.name}</p>
          </div>

          <div className="flex gap-4 mb-3">
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Date</p>
              <p className="font-medium">{appointmentDetails.date}</p>
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Time</p>
              <p className="font-medium">{appointmentDetails.time}</p>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="font-medium">{appointmentDetails.phone}</p>
          </div>

          <div className="mb-3">
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-medium">{appointmentDetails.email}</p>
          </div>

          <div className="mb-3">
            <p className="text-gray-400 text-sm">Service</p>
            <p className="font-medium">{appointmentDetails.service}</p>
          </div>

          {appointmentDetails.notes && (
            <div className="mt-4 pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-1">Notes</p>
              <p className="text-sm">{appointmentDetails.notes}</p>
            </div>
          )}
        </div>
        </div>
      ) : (
        // Show the Form if no appointment is booked yet
        <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-md mb-2 block">Full Name</label>
            <input id="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="text-md mb-2 block">Email Address</label>
            <input id="email" type="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-md mb-2 block">Phone Number</label>
            <input id="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="service" className="text-md mb-2 block">Service Type</label>
            <select id="service" value={formData.service} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white">
              <option value="" disabled>Select a package</option>
              <option>Bike Wash (₹70)</option>
              <option>Top Wash (₹200 - ₹250)</option>
              <option>Basic Wash (₹350 - ₹450)</option>
              <option>Premium Wash (₹500 - ₹600)</option>
            </select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="date" className="text-md mb-2 block">Preferred Date</label>
            <input type="date" id="date" value={formData.date} min={new Date().toISOString().split("T")[0]} max={new Date(Date.now() + 86400000).toISOString().split("T")[0]} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="text-md mb-2 block">Preferred Time</label>
            <select id="time" value={formData.time} onChange={handleChange} required className="w-full rounded-lg border bg-zinc-800 p-3 text-white">
              <option value="" disabled>Select a slot</option>
              {availableSlots.length > 0 ? availableSlots.map((time, index) => <option key={index}>{time}</option>) : <option value={''} disabled>No Available Slots</option>}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="notes" className="text-md mb-2 block">Special Instructions (Optional)</label>
          <textarea id="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full rounded-lg border bg-zinc-800 p-3 text-white"></textarea>
        </div>
        {message && <p className="text-center text-lg text-rose-400">{message}</p>}
        <button type="submit" disabled={loading} className="w-full bg-rose-500 hover:bg-rose-600 rounded-lg text-md px-5 py-2.5">
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
      )}
             
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
