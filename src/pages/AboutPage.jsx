import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        Royal Trip is your trusted partner for unforgettable travel experiences around the world. Our mission is to create memories that last a lifetime by offering curated tours, premium hotels, and comprehensive visa services.
      </p>
      <p className="text-gray-700 mb-8">
        Founded in 2010, Royal Trip began as a small team of passionate travelers who wanted to share the joy of discovery with others. Over the years, we have grown into a leading travel agency, helping thousands of adventurers explore new destinations with confidence and ease. Our team is dedicated to providing personalized service, expert guidance, and unique experiences tailored to every traveler's dream.
      </p>
      <p className="text-gray-700 mb-8">
        We value integrity, transparency, and a relentless commitment to customer satisfaction. Our partnerships with top hotels, airlines, and local guides ensure that every journey is safe, comfortable, and enriching. Whether you're planning a family vacation, a romantic getaway, or a solo adventure, we're here to make your travel dreams a reality.
      </p>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-8">
        To inspire and enable people to explore the world with ease, comfort, and confidence. We believe travel broadens horizons and brings people together.
      </p>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Meet the Team</h2>
      <ul className="space-y-4">
        <li>
          <span className="font-bold">Sarah Lee</span> – Founder & CEO
        </li>
        <li>
          <span className="font-bold">David Kim</span> – Head of Tours
        </li>
        <li>
          <span className="font-bold">Maria Garcia</span> – Customer Experience
        </li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default AboutPage; 