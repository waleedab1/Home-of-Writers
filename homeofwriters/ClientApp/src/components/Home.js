import React, { Component } from 'react';
import { Searchbar, NovelCarousel, NovelCardList } from './';

import './styles/Home.css'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className='home-page-wrapper'>
                <hr />
                <NovelCarousel />
                <div className='novel-section-wrapper'>
                    <h1 className='novel-section-header'>Action Novels</h1>
                </div>
                <NovelCardList />
                <div className='novel-section-wrapper'>
                    <h1 className='novel-section-header'>Fantasy Novels</h1>
                </div>
                <NovelCardList />
                <div className='novel-section-wrapper'>
                    <h1 className='novel-section-header'>Romance Novels</h1>
                </div>
                <NovelCardList />
            </div>
        );
    }
}
