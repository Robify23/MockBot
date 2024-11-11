import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StudentRanking.css";

const students = [
    { name: "John Doe", score: 12500 },
    { name: "Jane Smith", score: 10900 },
    { name: "Alice Johnson", score: 9300 },
    { name: "Robert Brown", score: 8700 },
    { name: "Emily Davis", score: 6900 },
    { name: "Michael Wilson", score: 5300 },
    { name: "Sophia Taylor", score: 4100 },
    { name: "Liam Anderson", score: 3700 },
    { name: "Isabella Thomas", score: 2200 },
    { name: "Oliver Jackson", score: 1400 },
];

const universities = [
    { name: "Riphah International University", totalScore: 65000 },
    { name: "Air University", totalScore: 60000 },
    { name: "National University", totalScore: 58000 },
    { name: "Bahria University", totalScore: 54000 },
    { name: "LUMS University", totalScore: 50000 },
    { name: "Nust University", totalScore: 48000 },
];

// Sort universities by total score and calculate rank
const sortedUniversities = universities
    .sort((a, b) => b.totalScore - a.totalScore)
    .map((university, index) => ({ ...university, rank: index + 1 }));

const StudentRanking = () => {
    const { universityName } = useParams();
    const navigate = useNavigate();

    // Find university rank based on name
    const university = sortedUniversities.find(uni => uni.name === universityName);
    const universityRank = university ? university.rank : "N/A";

    return (
        <div className="ranking-container">
            <div className="left-panel">
                <button className="back-button" onClick={() => navigate(-1)}>
                    &#8592;
                </button>
                <div className="university-name">{universityName}</div>
                <div className="university-rank">
                    Rank in Country: <span>{universityRank}</span>
                </div>
            </div>
            <div className="right-panel">
                <div className="ranking-header">TOP STUDENTS</div>
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Student Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentRanking;