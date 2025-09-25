import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    emailjs.send(
      'service_l3p2k19', // Service ID
      'template_qm5s1vb', // Template ID
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      },
      'vIOl7YBtxHk_jd_9Q' // Public Key
    )
    .then((result) => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setSuccess(false);
    })
    .finally(() => setSending(false));
  };

  const contactInfo = [
    {
      icon: 'fas fa-user',
      title: 'Name',
      value: 'Isha Bhole'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ishabhole001@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Talk</h3>
            <p className="text-slate-400 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <i className={`${item.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-slate-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/IshaBhole" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ishabhole/" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
            {success === true && (
              <div className="mb-4 text-green-400 font-semibold">Message sent successfully!</div>
            )}
            {success === false && (
              <div className="mb-4 text-red-400 font-semibold">Failed to send message. Please try again.</div>
            )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none text-white"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none text-white"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none resize-none text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full font-medium gradient-btn"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;