function Card({ type, backgroundImage, link, index, isExpanded, onLittleCardClick }) {
    const cardClass = `${type === 'big' ? 'big-card' : 'little-card'} card ${isExpanded ? 'expanded' : ''}`

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`
    }

    if (type === 'big' && link) {
        return (
            <div className={cardClass} style={cardStyle}>
                <a href={link} className="fill-div" target="_blank" rel="noopener noreferrer"></a>
            </div>
        )
    }

    // Little cards with click handler
    if (type === 'little') {
        return (
            <div
                className={cardClass}
                style={cardStyle}
                onClick={onLittleCardClick}
            ></div>
        )
    }

    return <div className={cardClass} style={cardStyle}></div>
}

export default Card
