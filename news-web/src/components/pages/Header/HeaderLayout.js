import React from 'react';

// files & pages
import '../../sass/homePage.scss';
import Header from './Header';
import Navigation from '../../layout/Navigation/Navigation';

const HeaderLayout = () => {
    return (
        <div>
            <div className="fixed">
                <Header></Header>
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default HeaderLayout;