import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    //  CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Typography,
    Avatar,
    IconButton    
} from '@material-ui/core';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { FavoriteIcon,
        //  BookmarkIcon,
        //  MessageIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),

    },
    subheader:{
        display: 'flex',
        alignItems: 'center',
    },
    caption:{
        marginRight: theme.spacing(1),
    },
    message:{
        height:'auto',
        marginBottom: theme.spacing(2),
        pading: '0 24px',
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto',

    }
}));

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" className={classes.caption}>
                        {post.date}
                    </Typography>
                    </div>

                }
            />
            <CardContent className={classes.content}>
                <Typography 
                    className={classes.message}
                    variant="body1" >
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image} alt="imagem"></img>
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography
                        style={{cursor:'pointer'}}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <Message />
                    <Typography
                      className={classes.reactions}                        
                        color="textSecondary"
                        variant="body2"
                    >
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon />                                        
            </IconButton>*/}
            </CardActions>
        </Card>
    )

}

export default PostCard;
