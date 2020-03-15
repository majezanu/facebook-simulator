import React from 'react';
import Loading from 'atoms/Loading/Loading';

const styles = ['text-primary', 'text-secondary', 'text-success', 'text-danger'];
const MultipleLoading = (props) => {
    const loaders = styles.map((style, index) => <Loading key={index} style={style}></Loading>);   
    return (
        loaders
    )
};

export default MultipleLoading;