import React from 'react';

import './CharacterCard.scss';

const CharacterCard = ({image, name, id, species, status, type, gender}) => {
    return (
        <div className="clash-card">
            <div className="clash-card__image clash-card__image">
                <img src={image} alt="Character" />
            </div>
            <div className="clash-card__level clash-card__level">id {id}</div>
            <div className="clash-card__unit-name">{name}</div>
            <div className="clash-card__unit-description">
                {species}
            </div>

        <div className="clash-card__unit-stats clash-card__unit-stats clearfix">
            <div className="one-third">
                <div className="stat">{status}</div>
                <div className="stat-value">Status</div>
            </div>

            <div className="one-third">
                <div className="stat">{type}</div>
                <div className="stat-value">Type</div>
            </div>

            <div className="one-third no-border">
                <div className="stat">{gender}</div>
                <div className="stat-value">gender</div>
            </div>
        </div>

    </div>
    )
}

export default CharacterCard;