import React from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import Avatar from '../images/Avatar.png';



class ContactUs extends React.Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hamza Rhaib</h2>
                        <img 
                        src={Avatar}
                        alt="avatar"
                        className="img-style"/>
                        <p>


                        Fraîchement diplomé de la Coding Academy "Epitech Paris", je déborde de motivation et de curiosité et je suis prêt à faire partie de votre équipe.
                        Si mon travail vous plait, n'hésitez pas à prendre contact avec moi, afin que l'on puisse passer à l'étape suivante.
                        Croyez moi, vous n'allez pas le regretter. Autonome, débordant d'énergie et doté d'une facilité d'adaptation, je ne pourrai apporter que du plus au sein d'une équipe.
                        
                        En attendant votre retour!


                        </p>
                    </Cell>
            
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr />
                    <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '2em'}}>
                            <i class="fas fa-mobile fa-2x" ></i>
                                +33-695-51-25-70
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '2em'}}>
                            <i class="fas fa-envelope fa-2x"></i>
                                hamzarhaib@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '2em'}}>
                            <i class="fab fa-skype fa-2x"></i>
                                Hamza Rhaib
                            </ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default ContactUs;