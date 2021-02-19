import React, {useState} from 'react';
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
import Search from './Search'




  class Home extends React.Component {

    
    constructor(props){
        super(props);
      this.state = { movies: [], likes: [], dislikes: [], count: 0}
      this.state.count = []
      movies$.then( movies => { this.setState({movies : movies})
          console.log(movies)
      })

    };

    

    deleteMovie = (id) => {
    let moviesdelete = this.state.movies.filter(movie => movie.id !== id);
      this.setState({movies : moviesdelete})
    }

    likeMovie = (id) => {
      let movieslikes = this.state.likes.filter(like => like.id !== id);
      this.setState({likes : movieslikes})
    }

    dislikeMovie = (id) => {
      let moviesdislikes = this.state.dislikes.filter(dislikes => dislikes.id !== id);
      this.setState({dislikes : moviesdislikes})
    }

  

render(){
  //console.log("test", this.state.likes) 
  //console.log("test", this.state.movies)  
return(
    <div className="home-body-style" >
      <Search SearchCategory={this.findCategory} />
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
                    <Button variant="outlined" color="primary" onClick={() => this.likeMovie(item.id)}>
                    {item.likes} <div className="likes-button"><i class="far fa-thumbs-up"></i></div>
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => this.dislikeMovie(item.id)}>
                    {item.dislikes} <div className="likes-button"><i class="far fa-thumbs-down"></i></div>
                    </Button>
                    <Button onClick={() => this.deleteMovie(item.id)} variant="contained"
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