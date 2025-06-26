import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">We'd love to hear from you! Fill out the form below or reach us directly.</p>
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2 text-gray-700"><Phone className="h-5 w-5 text-blue-600" /> +1 (555) 123-4567</div>
          <div className="flex items-center gap-2 text-gray-700"><Mail className="h-5 w-5 text-blue-600" /> info@Royal Trip.com</div>
          <div className="flex items-center gap-2 text-gray-700"><MapPin className="h-5 w-5 text-blue-600" /> 123 Travel Street, Adventure City, AC 12345</div>
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 transition-colors" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="h-6 w-6 text-gray-400 hover:text-red-600 transition-colors" /></a>
          </div>
        </div>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">Thank you for contacting us! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2" rows={5} />
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 