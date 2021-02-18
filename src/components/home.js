import React from 'react';
import { movies$ } from './movies';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './home.css';
import DeleteIcon from '@material-ui/icons/Delete';




  class Home extends React.Component {

    
    constructor(props){
        super(props);
      this.state = { movies: [] }
      movies$.then( movies => {
          this.setState({movies : movies})
          console.log(movies)
      })
    };

render(){
    
return(
    <div className="home-body-style" >
<Container className="cardGrid">
          
          {/* End hero unit */}
          <Grid container >
            {this.state.movies.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4} className="Wrapper">
                <Card className="card">
                  <img alt="" className="cardMedia" src={item.image} style={{ maxWidth: 'auto' }}/>
                  <CardContent className="cardContent">
                    <p className="titre-films">
                    {item.title}
                    </p>
                    <Typography>
                    {item.category}
                    </Typography>
                  </CardContent>
                  <CardActions className="Button-action">
                    <Button variant="outlined" color="primary">
                    {item.likes} <div className="likes-button"><i class="far fa-thumbs-up"></i></div>
                    </Button>
                    <Button variant="outlined" color="secondary">
                    {item.dislikes} <div className="likes-button"><i class="far fa-thumbs-down"></i></div>
                    </Button>
                    <Button onClick={() => this.deleteComment(item._id)} variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
    )
}
}
export default Home;