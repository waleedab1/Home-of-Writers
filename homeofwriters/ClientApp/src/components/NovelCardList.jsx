import React from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

import './styles/NovelCardList.css';

const TopActionNovels = [
    {
        title: 'The Hobbit',
        subtitle: 'By J. R. R. Tolkien',
        img: 'https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg',
        text: ''
    },
    {
        title: 'Fire and Blood',
        subtitle: 'By George R.R. Martin',
        img: 'https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/fire_and_blood_by_george_r_r_martin.jpg',
        text: ''
    },
    {
        title: 'The 6:20 Man: A Thriller',
        subtitle: 'By David Baldacci',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91BXi9rjZzquSjYr4oQ0hFWL4m7Wp8PHMT8EKiJla5yneXar3',
        text: ''
    },
    {
        title: 'The Big Dark Sky',
        subtitle: 'By Dean Koontz',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGttC1TcwoojAggg4HuKJkiCFrxuKahKT9hvSUPV-wPd0SOBQ',
        text: ''
    },
    {
        title: 'Soul Taken: Mercy Thompson: Book 13',
        subtitle: 'By Patricia Briggs',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPGT7xEcf63g6L9zyV7IlierE7twVNPO2Twle8uTHSqwYSOlR6',
        text: ''
    },
    {
        title: 'A Game of Thrones',
        subtitle: 'By George R. R. Martin',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XDS947cBPKA-WHnGqT8b6p71MF3zsi6kQCE0U0jcQzp7oeTW',
        text: ''
    },
    {
        title: 'The Great Train Robbery',
        subtitle: 'By Michael Crichton',
        img: 'https://d3525k1ryd2155.cloudfront.net/f/891/011/9780224011891.OL.0.m.jpg',
        text: ''
    },
    {
        title: `Harry Potter and the Sorcerer's Stone`,
        subtitle: 'By J.K. Rowling',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYGx6w4wW7xmC8h_UdhyzyxhOV4QZofI0lrgZ7JgMkCyqGG5M_',
        text: ''
    },
];

const NovelCardList = () => {
    return (
        <div>
            <CardGroup>
                {TopActionNovels.map((item) => {
                    return (
                        <Card className='novel-card-wrapper'>
                            <CardImg
                                className='novel-img'
                                alt="Card image cap"
                                src={item.img}
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h6">
                                    {item.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h7"
                                >
                                    {item.subtitle}
                                </CardSubtitle>
                                </CardBody>
                       </Card>
                    );
                })}
            </CardGroup>
        </div>
    );
}

export default NovelCardList;