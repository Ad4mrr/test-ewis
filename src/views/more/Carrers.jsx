import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainFooter from '../../components/footer/MainFooter';
import ContactUsCom from '../../components/common/ContactUsCom';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { BriefcaseIcon, BuildingOfficeIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        toast.error('Failed to fetch jobs. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setName('');
    setEmail('');
    setCv(null);
  };

  const handleApply = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('cv', cv);
    formData.append('jobId', selectedJob._id);
    formData.append('jobTitle', selectedJob.jobTitle); // Include jobTitle in the form data

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (response.ok) {
        toast.success('Application submitted successfully!');
        closeModal();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to submit application: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Set loading state to false after submission completes
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="Join our team. Explore job opportunities and apply now." />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className='w-full flex flex-col lg:flex-row items-center'>
            <div className="basis-1/2 text-center lg:text-right flex flex-col gap-3">
              <h1 className="font-bold font-Poppins text-3xl">Join Our Team</h1>
              <p className="text-lg font-Poppins">We're always looking for talented individuals to join our team.</p>
            </div>
            <div className="basis-1/2">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-taking-interview-4616024-3846825.png" alt="Join Our Team" />
            </div>
          </div>

          <div className="rounded-lg p-6">
            <h2 className="text-2xl font-Poppins font-bold mb-4">Current Job Openings:</h2>
            <div className='columns-1 gap-1 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8'>
              {jobs.length > 0 ? (
                jobs.map(job => (
                  <div key={job._id} className="p-5 bg-primarygray rounded-xl flex flex-col gap-3 ring-1 space-y-2 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md relative ">
                    <Link to={`/job/${job._id}`} className="text-xl font-semibold font-Poppins text-primary hover:underline">{job.jobTitle}</Link>
                    <div className='flex flex-wrap items-center justify-start gap-10 font-Poppins '>
                      <div className='flex flex-row gap-2'><div className='w-5'><BriefcaseIcon /></div><p>{job.jobType}</p></div>
                      <div className='flex flex-row gap-2'><div className='w-5'><BuildingOfficeIcon /></div><p className="">{job.modality}</p></div>
                    </div>
                    <p className="text-gray-700 font-Poppins text-lg leading-6">{job.jobSummary}</p>
                    <div className='flex flex-wrap items-start justify-start gap-3'>
                      {job.skills.map(skill => (
                        <span key={skill} className='bg-primarygray px-4 py-1 rounded-full ring-1 ring-white text-xs font-Rubik font-thin text-blackFooter'>{skill}</span>
                      ))}
                    </div>
                    {/* <p className="text-gray-700 font-Poppins text-base">{job.employmentType}</p> */}
                    <button onClick={() => openModal(job)} className="bg-primary text-white px-7 py-2 rounded-3xl group-hover:bg-white group-hover:text-primary font-Poppins transition-all duration-300 group-hover:translate-x-2 flex flex-row items-center justify-center gap-2">
                      <span>Apply Now</span>
                      <div className='w-5'><PaperClipIcon /></div>
                    </button>
                  </div>

                ))
              ) : (
                <p className="text-gray-700 font-Poppins">No job openings available at the moment. Please check back later.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Apply for Job"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-Poppins"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob?.jobTitle}</h2>
          <form onSubmit={handleApply} className="flex flex-col gap-4">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <p className='font-Poppins text-lg font-medium text-center py-6 capitalize'>Submiting your Resume...</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <input
                  type="file"
                  onChange={(e) => setCv(e.target.files[0])}
                  required
                  className="border p-2 rounded"
                />
                <div className="flex justify-end gap-4">
                  <button type="button" onClick={closeModal} className="bg-red text-white px-4 py-2 rounded">
                    Cancel
                  </button>
                  <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </Modal>

      <ToastContainer />
      <ContactUsCom />
      <MainFooter />
    </>
  );
}

export default Careers;