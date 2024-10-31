import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { PiTiktokLogo } from "react-icons/pi";

const digitalMarketingOffers = [
    {
        title: "THE DIGITAL WEALTH ACADEMY",
        description: "Learn exactly how I make $$$ online. Digital Marketing Course w/ Master Resell Rights.",
        price: 497,
        callToAction: "LET’S GO!",
        image: "c1.jfif", // Use .jfif extension
        section: "Start Digital Marketing", // New property to categorize the offer
    },
    {
        title: "FREE THIRTY UNDER 30 EBOOK",
        description: "30 ideas you can earn an income with in less than 30 days!",
        formFields: [
            { field: "name", placeholder: "Enter your name" },
            { field: "email", placeholder: "Enter your email" }
        ],
        callToAction: "DOWNLOAD",
        image: "c2.jfif", // Use .jfif extension
        section: "Start Digital Marketing", // Categorization
    },
    {
        title: "THE ULTIMATE BRANDING COURSE",
        description: "220+ Modules on building an INFECTIOUS business & how to master the art of marketing.",
        price: 499,
        callToAction: "LEARN MORE",
        image: "c3.jfif", // Use .jfif extension
        section: "Elevate Your Brand & Business", // New property
    },
    {
        title: "THE ULTIMATE DM SCRIPTS",
        price: 67,
        callToAction: "BUY NOW",
        image: "c4.jfif", // Use .jfif extension
        section: "Elevate Your Brand & Business", // New property
    },
    {
        title: "CATALYST COLLECTIVE",
        description: "Lifetime access to the #1 accelerator for Instagram Entrepreneurs!",
        callToAction: "I WANT IN",
        image: "c5.jfif", // Use .jfif extension
        section: "Things I Love (Affiliate Links)", // New property
    },
    {
        title: "THREADS UNLEASHED",
        price: 17,
        callToAction: "BUY NOW",
        image: "c6.jfif", // Use .jfif extension
        section: "Things I Love (Affiliate Links)", // New property
    },
    {
        title: "FREE STAN STORE 14 DAY TRIAL",
        description: "Try the service for free for 14 days!",
        callToAction: "START TRIAL",
        image: "c7.jfif", // Use .jfif extension
        section: "Things I Love (Affiliate Links)", // New property
    }
];

const SalesPage = () => {
    // Get unique sections from offers
    const sections = [...new Set(digitalMarketingOffers.map(offer => offer.section))];

    return (
        <div className='container'>
            <div className='sub-container'>
                <div className='profile'>
                    <img src='pro.jfif' alt='profile' />
                    <h2>John Doe</h2>
                    <p>Sharing My Journey To 6 Figures w/ Digital Products</p>
                    <div className='social-icons'>
                        <IoLogoInstagram size={50} className='point' color='black' />
                        <PiTiktokLogo size={50} className='point' color='black' />
                    </div>
                </div>
                <div className='sales-section'>
                    {sections.map((section, idx) => (
                        <div key={idx} className='brand-card'>
                            <h2 className='brand-name'>{section}</h2>
                            <div className='services-cards'>
                                {digitalMarketingOffers.filter(offer => offer.section === section).map((offer, index) => (
                                    <div className='card' key={index}>
                                        <div className='card-details'>
                                            <img src={offer.image} alt={offer.title} />
                                            <div className='text'>
                                                <h3>{offer.title}</h3>
                                                {offer.description && <p>{offer.description}</p>}
                                                {offer.price && <p>Price: ${offer.price}</p>}
                                            </div>
                                        </div>
                                        <button className='btn'>{offer.callToAction}</button>
                                        {offer.formFields && (
                                            <form>
                                                {offer.formFields.map((field, idx) => (
                                                    <input 
                                                        key={idx}
                                                        type="text"
                                                        placeholder={field.placeholder}
                                                        className='input-field'
                                                    />
                                                ))}
                                            </form>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesPage;
