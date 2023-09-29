import classes from './Post.module.css';

function Post(props) {
    return (<>
        <p className={classes.post}>{props.author}</p>
        <p>{props.body}</p>
    </>
    )
}


export default Post;