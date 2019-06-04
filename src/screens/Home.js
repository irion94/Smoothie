import * as  React from 'react'
import ContentItem from "../components/ContentItem";
import faker from 'faker'

export class Home extends React.Component {

    render() {
        return (
            <div>
                <ContentItem photo={'https://unsplash.it/500/300?random'} imageRight/>
                <ContentItem photo={'https://unsplash.it/500/300?random'}/>
                <ContentItem photo={'https://unsplash.it/500/300?random'} imageRight/>
                <ContentItem photo={faker.image.food()}/>
                <ContentItem photo={faker.image.food()} imageRight/>
                <ContentItem photo={faker.image.food()} />
                <ContentItem photo={faker.image.food()} imageRight/>
                <ContentItem photo={faker.image.food()} />
                <ContentItem photo={faker.image.food()} imageRight/>
                <ContentItem photo={faker.image.food()} />
            </div>
        );
    }
}