import Card from './Card'
import { useState } from 'react'

function CardGroups() {
    const [expandedCard, setExpandedCard] = useState(null)

    const cardData = [
        {
            type: 'little',
            backgroundImage: '/images/portfolio/Achievement1.jpeg',
            index: 1
        },
        {
            type: 'big',
            backgroundImage: '/images/instagram.jpg',
            link: 'https://www.instagram.com/billions_design?igsh=emRoNTcydWd6anI=',
            index: 2
        },
        {
            type: 'little',
            backgroundImage: '/images/portfolio/Achievement2.jpeg',
            index: 3
        },
        {
            type: 'big',
            backgroundImage: '/images/linkedin.jpg',
            link: 'https://www.linkedin.com/in/olatunji-charles-billion-514340225',
            index: 4
        },
        {
            type: 'little',
            backgroundImage: '/images/portfolio/Achievement3.jpeg',
            index: 5
        },
        {
            type: 'big',
            backgroundImage: '/images/whatsapp.png',
            link: 'https://wa.me/2348167451667?text=Hi%20Billion!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%20Are%20you%20available%3F',
            index: 6
        },
        {
            type: 'little',
            backgroundImage: '/images/portfolio/Achievement4.jpeg',
            index: 7
        }
    ]

    const handleLittleCardClick = (index) => {
        setExpandedCard(index)
        // Auto-collapse after 2 seconds
        setTimeout(() => {
            setExpandedCard(null)
        }, 2000)
    }

    return (
        <div className="card-groups">
            <div className="card-group" data-index="0" data-status="active">
                {cardData.map((card, idx) => (
                    <Card
                        key={idx}
                        type={card.type}
                        backgroundImage={card.backgroundImage}
                        link={card.link}
                        index={card.index}
                        isExpanded={expandedCard === card.index}
                        onLittleCardClick={() => card.type === 'little' && handleLittleCardClick(card.index)}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <p>Scroll to see completed work</p>
                <div className="scroll-arrow">↓</div>
            </div>
        </div>
    )
}

export default CardGroups
