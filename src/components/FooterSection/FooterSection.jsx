import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function FooterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Newsletter subscription:', email);
      setEmail('');
    };
  
    const footerLinks = {
      about: {
        title: 'About',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Jobs', href: '#' },
          { name: 'In Press', href: '#' },
          { name: 'Gallery', href: '#' },
        ],
      },
      support: {
        title: 'Support',
        links: [
          { name: 'Contact us', href: '#' },
          { name: 'Online Chat', href: '#' },
          { name: 'Whatsapp', href: '#' },
          { name: 'Telegram', href: '#' },
          { name: 'Ticketing', href: '#' },
          { name: 'Call Center', href: '#' },
        ],
      },
      faq: {
        title: 'FAQ',
        links: [
          { name: 'Account', href: '#' },
          { name: 'Booking', href: '#' },
          { name: 'Payments', href: '#' },
          { name: 'Returns', href: '#' },
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms & Condition', href: '#' },
        ],
      },
    };
  
    const socialLinks = [
      { Icon: InstagramIcon, href: 'https://www.instagram.com/' },
      { Icon: FacebookIcon, href: 'https://web.facebook.com/' },
      { Icon: YouTubeIcon, href: 'https://www.youtube.com/' },
    ];
  return (
    <footer className="bg-black text-gray-400 py-16">
    <div className="max-w-7xl mx-auto px-4">

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h3 className="text-white text-xl font-semibold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Newsletter</h3>
          <p className="mb-6">
            Don't miss out on the exciting world of travel – subscribe now and embark on a journey of discovery with us.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 border rounded-full border-gray-700 p-1">
            <div className="flex-grow relative">
              <MailOutlineIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent py-2 pl-10 pr-4 focus:outline-none transition-colors duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          <div className="flex gap-4 mt-8 justify-end">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p>©2023 Indotravi, All Rights Reserved</p>
      </div>
    </div>
  </footer>
  )
}

export default FooterSection