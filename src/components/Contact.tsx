import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using EmailJS to send email directly from frontend
      // You'll need to replace these with your actual EmailJS credentials
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_b0xfv0z', // Replace with your EmailJS service ID
          template_id: 'template_wqwhprc', // Replace with your EmailJS template ID
          user_id: 'p1aBvJGhgIZiFBPgC', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'kanishksinghmaurya@gmail.com'
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 bg-white dark:bg-[#161b22]">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:kanishksinghmaurya@gmail.com" 
                    className="text-[#0969da] dark:text-[#58a6ff] hover:underline"
                  >
                    kanishksinghmaurya@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Noida, India</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-3">Social Profiles</h4>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/kanishk466" 
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0969da] dark:hover:text-[#58a6ff]"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/kanishk007" 
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0969da] dark:hover:text-[#58a6ff]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 bg-white dark:bg-[#161b22]">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-md flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-green-800 dark:text-green-200">Message sent successfully!</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-md flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                <span className="text-red-800 dark:text-red-200">Failed to send message. Please try again.</span>
              </div>
            )}
            
          <form  onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Name
    </label>
    <input 
      type="text" 
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#0d1117] focus:outline-none focus:ring-2 focus:ring-[#0969da] dark:focus:ring-[#58a6ff]" 
      required
    />
  </div>
  
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input 
      type="email" 
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#0d1117] focus:outline-none focus:ring-2 focus:ring-[#0969da] dark:focus:ring-[#58a6ff]" 
      required
    />
  </div>
  
  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Subject
    </label>
    <input 
      type="text" 
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleInputChange}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#0d1117] focus:outline-none focus:ring-2 focus:ring-[#0969da] dark:focus:ring-[#58a6ff]" 
    />
  </div>
  
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Message
    </label>
    <textarea 
      id="message"
      name="message"
      rows={4}
      value={formData.message}
      onChange={handleInputChange}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#0d1117] focus:outline-none focus:ring-2 focus:ring-[#0969da] dark:focus:ring-[#58a6ff]" 
      required
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    disabled={isSubmitting}
    className="px-4 py-2 bg-[#2da44e] text-white font-medium rounded-md hover:bg-[#2c974b] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        Sending...
      </>
    ) : (
      <>
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </>
    )}
  </button>
</form>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;