
import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Basic validation check
      if (name && email && message) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        // Reset form after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
         // Reset error state after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Ready to <span className="text-cyan-400">Gamify</span> Your Growth?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Let's build something exciting together. Fill out the form below to get in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-center text-green-400">
              Message sent successfully! We'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-400">
              Something went wrong. Please fill out all fields and try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
