//var element =
//  React.createElement('div', {},
//    React.createElement('h1', {}, 'Lista filmów'),
//    React.createElement('ul', {},
//      React.createElement('li', {},
//        React.createElement('h2', {}, 'Harry Potter'),
//        React.createElement('p', {}, 'Film o czarodzieju')
//      ),
//      React.createElement('li', {},
//        React.createElement('h2', {}, 'Król Lew'),
//        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//      )
//    )
//  );
//ReactDOM.render(element, document.getElementById('app'));

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?cs=srgb&dl=beats-book-design-1005012.jpg&fm=jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=animal-big-big-cat-247502.jpg&fm=jpg'
	},
	{
		id: 3,
		title: 'Szybcy i wściekli',
		desc: 'o nielegalnych wyścigach',
		img: 'https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?cs=srgb&dl=action-automobile-automotive-50704.jpg&fm=jpg'
  	},
	{
		id: 4,
		title: 'Jaś Fasola',
		desc: 'o zabawnych przygodach Pana Jasia',
		img: 'https://images.pexels.com/photos/768093/pexels-photo-768093.jpeg?cs=srgb&dl=bean-food-green-768093.jpg&fm=jpg'
  	}
	
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', { src: movie.img })
	);
});

var element =
  	React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));