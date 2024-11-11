import React, { useState } from 'react';
import { FaThumbsUp, FaBookmark, FaShareAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import navigate for back button
import './Questionbank.css';

const Questionvault = () => {
    const questionsData = [
        { id: 1, company: "Google", question: "Why should we hire you?", category: "Behavioral", date: "a day ago", difficulty: "Easy", reactions: 58 },
        { id: 2, company: "Meta (Facebook)", question: "Tell me about a mistake you made, and any lessons you learnt.", category: "Behavioral", date: "2 days ago", difficulty: "Medium", reactions: 43 },
        { id: 3, company: "Amazon", question: "Describe a situation where you showed leadership skills.", category: "Behavioral", date: "3 days ago", difficulty: "Hard", reactions: 32 },
        { id: 4, company: "Netflix", question: "Explain the concept of closure in JavaScript.", category: "Technical", date: "5 days ago", difficulty: "Medium", reactions: 25 },
        { id: 5, company: "Apple", question: "What are the primary differences between REST and GraphQL?", category: "Technical", date: "6 days ago", difficulty: "Hard", reactions: 18 },
        { id: 6, company: "Microsoft", question: "How do you handle tight deadlines?", category: "Behavioral", date: "a week ago", difficulty: "Easy", reactions: 40 },
    ];

    const [questions, setQuestions] = useState(questionsData);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 10;
    const navigate = useNavigate(); // Initialize navigate

    // Filter questions based on search term
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredQuestions = questionsData.filter((q) =>
            q.question.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setQuestions(filteredQuestions);
        setCurrentPage(1); // Reset to the first page on new search
    };

    // Pagination logic
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="question-bank-container">
            {/* Back Arrow */}
            <div className="navigation-panel">
                <button className="navigation-back-button" onClick={() => navigate(-1)}>
                    &#8592; 
                </button>
            </div>

            <h2 className="question-bank-title">Question Bank</h2>
            
            {/* Search Bar */}
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Your Questions"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {/* List of Questions */}
            <div className="question-list">
                {currentQuestions.map((q) => (
                    <div key={q.id} className="question-card">
                        <h3 className="question-text">{q.question}</h3>
                        <div className="question-meta">
                            <span className="category">{q.category}</span>
                            <div className="difficulty-icons">
                                <span className={`difficulty ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <span>Showing {indexOfFirstQuestion + 1} - {Math.min(indexOfLastQuestion, questions.length)} of {questions.length} Questions</span>
                <div className="pagination-buttons">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="page-button"
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="page-button"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Questionvault;