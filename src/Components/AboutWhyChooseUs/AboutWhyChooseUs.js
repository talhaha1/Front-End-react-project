import React from 'react';
import img from "../../assets/AbourWhyChooseUs/img.jpeg";
import Nav from "../NavBar/nav"
// import Footer from "../Footer/Footer"

const WhyChooseUs = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '20px',
    };

    const imageStyle = {
        width: '40%',
    };

    const textContainerStyle = {
        width: '60%',
        marginLeft: '40px', // Increased space between image and text
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '20px',
    };

    const listContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        marginTop: '20px',
    };

    const listItemStyle = {
        fontSize: '16px',
        width: '30%',
        textAlign: 'left',
        marginBottom: '20px',
    };

    const lastItemStyle = {
        ...listItemStyle,
        width: '100%',
        marginLeft: '30%',
    };

    return (<div>
        <div>
            <Nav />
        </div>
        <div style={containerStyle}>
            <div style={contentStyle}>
                <div style={imageStyle}>
                    <img 
                        src={img}
                        alt="Business Meeting"
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={textContainerStyle}>
                    <div style={headerStyle}>Why Choose Us?</div>
                    <p style={paragraphStyle}>
                        We partner with our clients, take full ownership of their business needs and devise
                        tailored solutions for their unique requirements. Our solutions are result-oriented,
                        technology driven, with end-to-end implementations including Digital Marketing, BI
                        frameworks, and strategic consultancy.
                    </p>
                </div>
            </div>
            <div style={listContainerStyle}>
                <div style={listItemStyle}>▸ Business Intelligence</div>
                <div style={listItemStyle}>▸ Digital Marketing</div>
                <div style={listItemStyle}>▸ Data Analytics & Visualization</div>
                <div style={listItemStyle}>▸ Automation and Integrations</div>
                <div style={lastItemStyle}>▸ Data Management & Data Engineering</div>
            </div>
        </div>
        </div>
    );
};

export default WhyChooseUs;
