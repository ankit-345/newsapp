import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalize(props.category)} - NewsMonkey`;

    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }


    const update = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(50);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }
    
    useEffect(() => {
      update();
    }, []);


    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);

    }

        return (
            <>
                <h1 className='text-center' style={{marginTop: '80px'}}>News - Top Headline - {capitalize(props.category)}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >

                    <div className='container my-4 px-5'>
                        <div className='row'>
                            {/* LOOPING THROUGH THE ARTICLES */}
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
}

News.defaultProps = {
    country: "us",
    page: 5,
    category: 'general',
    totalResults: 0
}

News.propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    category: PropTypes.string
}

export default News;