import React from 'react';

import './CharacterCard.scss';

const CharacterCard = ({image, name, id, species, status, type, gender}) => {
    return (
        <div class="clash-card">
            <div class="clash-card__image clash-card__image">
                <img src={image} alt="Character" />
            </div>
            <div class="clash-card__level clash-card__level">id {id}</div>
            <div class="clash-card__unit-name">{name}</div>
            <div class="clash-card__unit-description">
                {species}
            </div>

        <div class="clash-card__unit-stats clash-card__unit-stats clearfix">
            <div class="one-third">
                <div class="stat">{status}</div>
                <div class="stat-value">Status</div>
            </div>

            <div class="one-third">
                <div class="stat">{type}</div>
                <div class="stat-value">Type</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">{gender}</div>
                <div class="stat-value">gender</div>
            </div>
        </div>

    </div>
    )
}

export default CharacterCard;