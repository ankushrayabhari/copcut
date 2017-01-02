import React from 'react'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		$(function(){

	        $("#typed").typed({
	            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
	            stringsElement: $('#typed-strings'),
	            typeSpeed: 75,
	            backDelay: 500,
	            loop: true,
	            contentType: 'html', // or text
	            // defaults to false for infinite loop
	            loopCount: false,
	            callback: function(){ foo(); },
	            resetCallback: function() { newTyped(); }
	        });

	        $(".reset").click(function(){
	            $("#typed").typed('reset');
	        });

    	});
	}

	render() {
		return (
			<div>
				<link rel="stylesheet" type="text/css" href="/typed.css"/>
				<script src="/typed.js" type="text/javascript"></script>
				<div id="changingtext" className="initial-bg-img">
				<div className="container-fluid initial-bg">
				<div className="container header-width-left" style={{"position": "relative", "top": "-30%", "left": "-10%", "marginTop": "-10%"}}>
					<h1 className="initial-bg-heading" style={{"display": "inline"}}>COP A </h1>
					<div id="typed-strings">
						<h1>HAIRSTYLE</h1>
						<h1>HAIRCUT</h1>
						<h1>LIFESTYLE</h1>
					</div>
					<h1 id="typed" className="initial-bg-heading" style={{"whiteSpace": "pre","display": "inline"}}></h1>
					<h3 className='tab'>Search for a barber most suitable for your needs.</h3>
						<div className="form-group">
						  <select className="form-control" id="sel1">
						    <option value="0">Men's Haircut</option>
						    <option value="1">Men's Bang</option>
						    <option value="2">Men's Fade</option>
						    <option value="4">Normal Haircut (default)</option>
						  </select>
						</div>
						<br/>
				 		<md-button className="md-raised md-primary">Search</md-button>
				</div>
				</div>
				</div>

				<div className="container-fluid" id="steps">
					<div className="container-fluid" id="instructions">
						<div className="instruct-text">
							<img src="pics/question-mark.png" />
							<h2>Answer a few Questions!</h2>
							<p>We will match you with a barber that best suits your needs and wants!</p>
						</div>
						<div className="instruct-text">
							<img src="pics/search.png" />
							<h2>Pick a Barber!</h2>
							<p>Choose the barber who you like most! You'll be provided with a wide variety of information.</p>
						</div>
						<div className="instruct-text">
							<img src="pics/barber-pole.png" />
							<h2>Book A Session!</h2>
							<p>It's as simple as that! Make sure to leave a review, and upload pictures of your cuts to promote your new barber.</p>
						</div>
					</div>
					<div className="container-fluid" id="img-instruct">
						<img src="pics/temp.jpg" />
					</div>
				</div>

				<div id="reviews">
					<h1>CUTS THAT SATISFIED MANY</h1>
					<article><img src="pics/h1.jpg" /><p>'I really enjoyed getting a cut from CopCut! He lined up my taper forreaaaalz'<br/> -Nick Zeta, Sophomore '19</p></article>
					<article><img src="pics/h2.jpg" /><p>'Campus Cuts never really took my hair seriously, so I decided to turn to CopCut. Now I can finally line up my fade with a ruler.'<br/> -Moby Larryhill, Senior '16</p></article>
					<article><img src="pics/h3.jpg" /><p>'I was always insecure about my yellow hair, but CopCut helped me find the right barber that brought my confidence right back!'<br/> -Danisha Cowdirt, Junior '18</p></article>
				</div>
			</div>
		);
	}
}	

export default Home;
