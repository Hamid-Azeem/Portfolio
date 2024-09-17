import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //  carousel styles
//projects-images
import login from "../Assets/projectsImg/LoginForm.png";
import pantryProImage from "../Assets/projectsImg/pantryPro.png"
import eMart from "../Assets/projectsImg/ecommerce.png";
import notes from "../Assets/projectsImg/note.png";
import Dashboard from "../Assets/projectsImg/Dashboard.png";

const projects = [
    // {
    //     title: 'Dynamic Stopwatch Application',
    //     description: 'Experience precision with this dynamic stopwatch built using React and Tailwind CSS.',
    //     imageUrl: stopwatch,
    //     details: 'This application provides seamless start, pause, and reset functionalities. It boasts a modern and intuitive interface, showcasing the power of React for real-time updates and Tailwind CSS for stylish, responsive design. Track your laps effortlessly and enjoy the sleek user experience.'
    // },
    // {
    //     title: 'Interactive Tic Tac Toe Game',
    //     description: 'Engage in a classic yet futuristic Tic Tac Toe game with both single and multiplayer modes.',
    //     imageUrl: tiktak,
    //     details: 'This Tic Tac Toe game brings a modern twist to a timeless classic. Built with React and styled with Tailwind CSS, it features captivating animations, score tracking, and a challenging CPU opponent. Whether playing solo or with friends, the stylish design and responsive interface ensure a fun experience.'
    // },
    {
        title: 'Advanced Admin Dashboard',
        description: 'A sophisticated admin dashboard for managing eCommerce operations, designed with HTML, CSS, and JavaScript.',
        imageUrl: Dashboard,
        details: 'This admin dashboard offers comprehensive tools for managing an eCommerce site. With an elegant layout and intuitive navigation, it is built using pure HTML, CSS, and JavaScript. It includes features for tracking sales, monitoring inventory, and analyzing user behavior, all presented in a clean, professional interface.'
    },
    {
        title: 'Elegant Note-Keeping Application',
        description: 'Organize your thoughts with this elegant and functional note-keeping app, built with React and Tailwind CSS.',
        imageUrl: notes,
        details: 'KeepNotes offers a sleek interface for creating, editing, and managing notes. Utilizing the power of React for dynamic functionality and Tailwind CSS for a clean, modern design, this application ensures your notes are always at your fingertips, presented in a visually appealing manner.'
    },
    {
        title: 'Comprehensive eCommerce Platform',
        description: 'A robust and user-friendly eCommerce site crafted with HTML, CSS, and JavaScript.',
        imageUrl: eMart,
        details: 'eMart is a fully functional eCommerce platform featuring product listings, categories with a seamless design. Built with pure HTML, CSS, and JavaScript, it demonstrates effective design and development practices. The platform is designed to be intuitive and user-centric, providing a smooth shopping experience.'
    },
    {
        title: "Pantry Pro Inventory Management",
        description: "A modern and efficient inventory management system built with React, Vite, and Firebase Firestore for seamless tracking and organization of pantry items.",
        imageUrl: pantryProImage,
        details: "Pantry Pro is a cutting-edge inventory management app designed to help users keep track of their pantry items effortlessly. Developed with React and Vite for fast and responsive performance, it leverages Firebase Firestore for real-time database operations and Firebase Authentication for secure user login. The app offers essential features like adding, editing, searching, and deleting items, all while providing a smooth user experience. With its intuitive interface and mobile responsiveness, Pantry Pro makes managing pantry inventory easier than ever."
    },
    {
        title: 'Responsive Login Form',
        description: 'A user-friendly and secure login form designed with pure HTML, CSS, and JavaScript.',
        imageUrl: login,
        details: 'This project showcases a clean, simple, and responsive login form. Designed with attention to detail using HTML, CSS, and JavaScript, it includes form validation and an intuitive layout. The form adapts beautifully to various screen sizes, ensuring a smooth user experience on any device.'
    },
    // {
    //     title: 'Efficient To-Do List Manager',
    //     description: 'Stay organized with this efficient task management app, built with React and Tailwind CSS.',
    //     imageUrl: toDo,
    //     details: 'This to-do list app offers a simple and effective way to manage tasks. Features include adding, editing, and deleting tasks, with a clean interface that adapts to any device. Built with React for dynamic functionality and styled with Tailwind CSS, it ensures a smooth and visually appealing user experience.'
    // },
    // {
    //     title: 'Real-Time Weather Application',
    //     description: 'Get accurate weather updates with this real-time weather app, powered by React and Tailwind CSS.',
    //     imageUrl: weather,
    //     details: 'The Weather App fetches and displays current weather information based on user input. Built with React, it integrates seamlessly with a weather API to provide real-time data. Tailwind CSS ensures a modern and responsive design, making it easy to get weather updates on the go.'
    // },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsAnimating(true);
    };

    const handleCloseModal = () => {
        setIsAnimating(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section id='projects' className="projects-section py-[3rem] px-8 mt-[1.8rem] bg-white text-gray-900">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-center text-[#353535] font-bold pb-5 mb-8">Projects</h1>

                    {/* Carousel for smaller screens */}

                    <div className="block md:hidden">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                            showIndicators={false}
                            swipeable={true}
                            emulateTouch={true}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            stopOnHover={true}
                            className="custom-carousel"
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className=" project-card bg-gradient-to-r from-white to-gray-100 border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                    onClick={() => handleOpenModal(project)}
                                    data-aos="fade-up"
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-48 object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#dc143c]">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 line-clamp-2 transition-all duration-300 hover:text-gray-700">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>







                    {/* Grid for larger screens */}
                    {/* <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                onClick={() => handleOpenModal(project)}
                                data-aos="fade-up"
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-500">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Pagination */}
                    {/* <div className="hidden md:flex justify-center mt-8">
                        <nav>
                            <ul className="flex items-center space-x-4">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => paginate(index + 1)}
                                            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-[#dc143c] text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div> */}


                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                onClick={() => handleOpenModal(project)}
                                data-aos="fade-up"
                            >
                                <div className="relative group">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110  rounded-t-lg"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                                </div>
                                <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#dc143c] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="hidden md:flex justify-center mt-8">
                        <nav>
                            <ul className="flex items-center space-x-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => paginate(index + 1)}
                                            className={`px-4 py-2 rounded-full ${currentPage === index + 1
                                                    ? 'bg-[#dc143c] text-white shadow-lg'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>


                </div>
            </section>

            {selectedProject && (
                <div
                    className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative transform transition-transform duration-300 ease-in-out ${isAnimating ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={handleCloseModal}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                        <img
                            src={selectedProject.imageUrl}
                            alt={selectedProject.title}
                            className="w-full h-48 object-cover mb-4"
                        />
                        <p>{selectedProject.details}</p>
                        <button onClick={handleCloseModal} className='bg-[#dc143c] hover:text-[#dc143c] hover:bg-transparent inline-block text-white text-[12px] py-3 px-7 mt-[20px] rounded-[30px] border-2 border-[#dc143c] transition-all duration-300'>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
