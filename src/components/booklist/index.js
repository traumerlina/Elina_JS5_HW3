import React from 'react';
import {connect} from 'react-redux';
import classes from "./styles.module.scss"

const Booklist = ({books}) => {
  return (
    <ul className={classes.book_list}>
        {books.map(({id,title}) => {
            return <li key = {`books-${id}`}>{title}</li>
        })}
    </ul>
  )
};

const mapStateToProps = ({books}) => {
    return {
        books,
    };
};

export default connect(mapStateToProps) (Booklist);