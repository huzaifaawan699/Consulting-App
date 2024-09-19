import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';
import Image from 'next/image';
import SingleTeamList from './SingleTeamList';
import SkillProgress from '../progress/SkillProgress';

const TeamDetailsContent = ({ teamInfo }) => {
    const { memberThumb, name, designation, email, memberData, skillProgress } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding-top">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-lg-5 left-info">
                                <div className="thumb">
                                    <Image src={`/assets/img/team/${[memberThumb]}`} alt="Thumb" width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info">
                                <h2>{[name]}</h2>
                                <span>{[designation]}</span>
                                <p>
                               <h2> Vision Statement:</h2>
                                      To be a globally recognized leader in providing expert consultancy and content / academic writing services that empower individuals and organizations to achieve their highest potential in the fields of management and marketing.

                               <h3> Mission Statement: </h3>
                                    To deliver exceptional consultancy and academic writing services that are grounded in rigorous research, innovative thinking, and a deep understanding of management and marketing principles, thereby enabling our clients to excel in their academic and professional endeavors.
                                </p>

                                <ul>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href={`mailto:${email}`}> {email}</a>
                                    </li>
                                    <li>
                                        <strong>Phone:</strong>
                                        <a href="+60102926997">+60102926997</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <a className="btn circle btn-sm btn-dark animation" href="#">Contact Me</a>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt"></i>
                                        <ul>
                                            <SocialShareStyle3 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info bg-gray default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="team-single-list">
                                    {memberData.map(list =>
                                        <SingleTeamList list={list} key={list.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill-items">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;