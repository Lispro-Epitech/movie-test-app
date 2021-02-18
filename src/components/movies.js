const movies = [
    {
      id: '1',
      image: 'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      image: 'https://jcsatanas.fr/wp-content/uploads/2018/11/les-indestructibles-2.jpg',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      image: 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/016/sans-un-bruit-affiche-francaise-1016471.jpg',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81rpB-3qwoL._AC_SL1500_.jpg',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      image: 'https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/11/IMG_2704.jpeg',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      image: 'https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      image: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      image: 'http://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster.jpg',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))