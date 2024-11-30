import Link from 'next/link';
import React from 'react';
import { FaUserTie, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const SingleTeam1 = ({ team }) => {
    const { id, designation, name, pastLinks } = team;

    return (
        <div
            className="team-card"
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                background: '#fff',
            }}
            className="hover:shadow-xl hover:transform hover:scale-105"
        >
            <div
                className="icon"
                style={{
                    fontSize: '40px',
                    color: '#0070f3',
                    marginBottom: '15px',
                    transition: 'color 0.3s ease',
                }}
            >
                <FaUserTie />
            </div>
            <div className="info">
                <span
                    style={{
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    {designation}
                </span>
                <h4>
                    <Link
                        href={`/team-details/${id}`}
                        style={{
                            color: '#0070f3',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                        className="hover:text-blue-700"
                    >
                        {name}
                    </Link>
                </h4>
            </div>
            <div
                className="past-links"
                style={{ marginTop: '15px' }}
            >
                <h5
                    style={{
                        fontSize: '0.9rem',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Past Links
                </h5>
                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        color: '#0070f3',
                    }}
                >
                    {pastLinks?.map((link, index) => (
                        <li key={index} style={{ marginBottom: '5px' }}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none',
                                    color: '#0070f3',
                                    transition: 'color 0.3s ease',
                                }}
                                className="hover:text-blue-700"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className="social"
                style={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                }}
            >
                <a
                    href="#"
                    style={{
                        color: '#3b5998',
                        fontSize: '1.5rem',
                        transition: 'color 0.3s ease',
                    }}
                    title="Facebook"
                    className="hover:text-blue-600"
                >
                    <FaFacebook />
                </a>
                <a
                    href="#"
                    style={{
                        color: '#00acee',
                        fontSize: '1.5rem',
                        transition: 'color 0.3s ease',
                    }}
                    title="Twitter"
                    className="hover:text-blue-500"
                >
                    <FaTwitter />
                </a>
                <a
                    href="#"
                    style={{
                        color: '#0e76a8',
                        fontSize: '1.5rem',
                        transition: 'color 0.3s ease',
                    }}
                    title="LinkedIn"
                    className="hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SingleTeam1;
