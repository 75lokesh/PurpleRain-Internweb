import React from 'react';
import DocumentButton from '../DocumentButton/DocumentButton';
import './InternCard.css';

const statusColors = {
    Completed: '#00a859',
    'Pending Docs': '#ff9933',
    Onboarding: '#7a00cc',
};

export default function InternCard({ intern, onDocumentUpload }) {
    const { name, email, department, startDate, status, documentsStatus, avatar } = intern;

    // Format date (e.g. May 15, 2023)
    const formattedDate = new Date(startDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="internCardContainer" >
            <header className="internCardHeader">
                <img src={avatar} alt={`${name} avatar`} className="internAvatar" />
                <div className="internInfo">
                    <h3 className="internName">{name}</h3>
                    <span
                        className="internStatus"
                        style={{ color: statusColors[status] }}
                    >
                        {status}
                    </span>
                    <div className="internEmail">{email}</div>
                </div>
            </header>
            <div className="internDetails">
                <div className="internDept">
                    <span className="icon" >🏢</span> {department}
                </div>
                <div className="internStartDate">
                    <span className="icon" >📅</span> Started: {formattedDate}
                </div>
            </div>

            <div className="documentsSection">
                <strong>Documents</strong>
                <div className="documentsButtonsGroup">
                    {['Resume', 'Gov ID', 'Agreement', 'Joining Letter'].map(docName => (
                        <DocumentButton
                            key={docName}
                            internId={intern.id}
                            docName={docName}
                            isUploaded={documentsStatus[docName]}
                            onUpload={onDocumentUpload}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}