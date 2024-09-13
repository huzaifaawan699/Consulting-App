import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const TagsWidget = () => {
    return (
        <>
            <div className="sidebar-item tags">
                <h4 className="title">tags</h4>
                <div className="sidebar-info">
                    <ul>
                        <li><Link href="#" onClick={handleSmoothScroll}>Writing</Link>
                        </li>
                        <li><Link href="#" onClick={handleSmoothScroll}>Education</Link>
                        </li>
                        <li><Link href="#" onClick={handleSmoothScroll}>nation</Link>
                        </li>
                        <li><Link href="#" onClick={handleSmoothScroll}>study</Link>
                        </li>
                        <li><Link href="#" onClick={handleSmoothScroll}>Seo</Link>
                        </li>
                        <li><Link href="#" onClick={handleSmoothScroll}>Web Development</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TagsWidget;