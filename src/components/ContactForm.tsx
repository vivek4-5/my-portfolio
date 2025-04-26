// src/components/ContactForm.tsx
import React, { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react'; // Added useEffect
import { useForm, ValidationError } from '@formspree/react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

interface EmailJSError { text?: string; }

const ContactForm = () => {
  const formspreeId: string = import.meta.env.VITE_FORMSPREE_ID || '';
  const emailJsServiceId: string | undefined = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId: string | undefined = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey: string | undefined = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [formspreeState, handleFormspreeSubmit] = useForm(formspreeId);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailJsStatus, setEmailJsStatus] = useState<'sending' | 'success' | 'error' | ''>('');

  // State to control overall submission success display
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setEmailJsStatus('sending');

    // --- Try Formspree First ---
    // The useForm hook handles the submission internally when called like this
    // It updates formspreeState.succeeded on success
    await handleFormspreeSubmit(event);

    // --- Then Try EmailJS (if Formspree didn't handle it or if you want both) ---
    // Check if Formspree already succeeded - if so, maybe skip EmailJS or handle differently?
    // For now, let's assume we always try EmailJS if env vars are present.
    if (!formspreeState.succeeded && emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      const templateParams = { name, email, subject, message };
      try {
        await emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams, emailJsPublicKey);
        setEmailJsStatus('success');
        // Don't reset form here if Formspree might succeed later or handle reset itself
      } catch (error) {
        const err = error as EmailJSError;
        console.log('EmailJS FAILED...', err.text);
        setEmailJsStatus('error');
      }
    } else if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
        console.error("EmailJS env vars missing, skipping EmailJS.");
        // If formspree didn't succeed either, mark EmailJS as error? Or just rely on formspreeState?
        if (!formspreeState.succeeded) setEmailJsStatus('error');
    }
  };

  // --- Effect to handle showing success message and resetting form ---
  useEffect(() => {
    // Show success if either service succeeded
    if (formspreeState.succeeded || emailJsStatus === 'success') {
      setShowSuccessMessage(true);
      resetForm();
      // Optionally clear the specific emailjs status if formspree takes precedence
      if (formspreeState.succeeded && emailJsStatus) {
        setEmailJsStatus('');
      }
      // Optional: Hide success message after a delay
      // const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
      // return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded, emailJsStatus]);
  // -------------------------------------------------------------------

  // --- Determine Status Message (Focus on errors/sending when form is visible) ---
  let statusMessage: string = '';
  let statusClasses: string = 'form-status min-h-[1.25rem]';
  const isSubmitting: boolean = formspreeState.submitting || emailJsStatus === 'sending';

  // Show errors only if not already showing the main success message
  if (!showSuccessMessage) {
    if (Object.keys(formspreeState.errors || {}).length > 0 || emailJsStatus === 'error') {
      statusMessage = "Error sending message.";
      statusClasses += ' error';
    } else if (isSubmitting) {
      statusMessage = "Sending...";
    }
  }
  // ---------------------------------------------------------

  // --- CONDITIONAL RENDERING FOR SUCCESS ---
  if (showSuccessMessage) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 px-4" // Add some padding/styling
      >
        <h3 className="text-xl font-semibold font-display text-primary mb-3">Thank You!</h3>
        <p className="text-text-muted">Your message has been sent successfully.</p>
        {/* Optional: Add a button to send another message */}
        {/* <button onClick={() => setShowSuccessMessage(false)} className="mt-4 btn btn-outline">Send Another Message</button> */}
      </motion.div>
    );
  }
  // ----------------------------------------

  // --- Render the form if not successful yet ---
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} >
      <h3 className="text-xl font-semibold font-display text-text-main mb-5">Send a Message</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Input Fields (remain the same) */}
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" type="text" name="name" required placeholder="Your Name" className="form-input" disabled={isSubmitting}
                 value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-red-600 text-sm mt-1"/>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" type="email" name="email" required placeholder="Your Email" className="form-input" disabled={isSubmitting}
                 value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
          <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-red-600 text-sm mt-1"/>
        </div>
        <div>
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input id="subject" type="text" name="subject" required placeholder="Subject" className="form-input" disabled={isSubmitting}
                 value={subject} onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
          <ValidationError prefix="Subject" field="subject" errors={formspreeState.errors} className="text-red-600 text-sm mt-1"/>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows={5} required placeholder="Your Message" className="form-input" disabled={isSubmitting}
                    value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}></textarea>
          <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-red-600 text-sm mt-1"/>
        </div>
        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <FaPaperPlane />}
          </button>
        </div>
        {/* Form Status (only show errors/sending here) */}
        <ValidationError errors={formspreeState.errors} className="text-red-600 text-sm text-center"/>
        <p className={`mt-4 text-center text-sm font-medium ${statusClasses}`}> {statusMessage} </p>
      </form>
    </motion.div>
  );
}
export default ContactForm;