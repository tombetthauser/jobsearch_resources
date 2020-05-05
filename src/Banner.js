import React from 'react';
import {robots} from './robots.js';

const imgArr = [
	{	
		img: 'https://www.metmuseum.org/toah/images/hb/hb_19.164.jpg', 
		imgLink: 'https://www.metmuseum.org/art/collection/search/435809', 
		text: '"The Harvesters" by Peter Bruegel, 1565 (Met Museum)',
		isLight: true
	},{	
		img: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg', 
		imgLink: 'https://artsandculture.google.com/asset/hunters-in-the-snow-winter/WgFmzFNNN74nUg', 
		text: '"Hunters in the Snow" by Peter Bruegel, 1565 (Kunsthistorisches Museum)',
		isLight: false
	},{	
		img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg', 
		imgLink: 'https://artsandculture.google.com/asset/-/WQGNMu-P7sedsg?childAssetId=zAH3mePrkISgzA', 
		text: '"The Oxbow" by Thomas Cole, 1836 (Met Museum)',
		isLight: false
	},{	
		img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Albert_Bierstadt_-_Among_the_Sierra_Nevada%2C_California_-_Google_Art_Project.jpg', 
		imgLink: 'https://americanart.si.edu/artwork/among-sierra-nevada-california-2059', 
		text: '"Among the Sierra Nevada California" by Albert Bierstadt, 1868 (Smithsonian)',
		isLight: true
	},{	
		img: 'https://images.metmuseum.org/CRDImages/ad/original/DT2961.jpg', 
		imgLink: 'https://www.metmuseum.org/art/collection/search/10150', 
		text: '"Merced River, Yosemite Valley" by Albert Bierstadt, 1866 (Met Museum)',
		isLight: true
	},{	
		img: 'https://images.metmuseum.org/CRDImages/ad/original/DT216681.jpg', 
		imgLink: 'https://www.metmuseum.org/art/collection/search/10496?searchField=All&amp;sortBy=relevance&amp;ft=thomas+cole&amp;offset=0&amp;rpp=20&amp;pos=7', 
		text: '"The Mountain Ford" by Thomas Cole, 1846 (Met Museum)',
		isLight: true
	}
	// ,{	
	// 	img: 'http://archeologie.culture.fr/chauvet/sites/all/themes/chauvet/assets/img/ours-chauvet.jpg', 
	// 	text: 'Paleolithic Painting, c. 35,000 BCE (Chauvet Cave, France)',
	// 	isLight: true
	// },{	
	// 	img: 'https://d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1205/Price_Talpa.jpg', 
	// 	text: '"Talpa" by Ken Price, Ceramic Sculpture 2009',
	// 	isLight: true
	// }
]

const textB = [
	' and more on the way',
	' and counting',
	' with ' + Math.round(Math.random()*100)
		+ ','
		+ Math.round(Math.random()*9) 
		+ Math.round(Math.random()*9) 
		+ Math.round(Math.random()*9)
		+ ','
		+ Math.round(Math.random()*9) 
		+ Math.round(Math.random()*9) 
		+ Math.round(Math.random()*9) 
		+ ' to go'
]

const txtNum = Math.round(Math.random()*(textB.length - 1));

const imgNum = Math.round(Math.random()*(imgArr.length - 1));

const bannerClass = () => {
	if (imgArr[imgNum].isLight === false) {
		return 'bannerLight'
	} else {
		return 'bannerDark'
	}
}

const Banner = (props) => {
	return (
		<div>
			<meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=1.0, user-scalable=no" />
			<div id='spacer'>
				{
					// robots.length + ' resources' + textB[txtNum] + '...'
				}
			</div>
			<a className='imgATag' href={imgArr[imgNum].imgLink}>
				<div 
					className={bannerClass()}
					style={
						{backgroundImage: 'url(\"' + imgArr[imgNum].img + '\")'}
					}
				>
					<a><span id='imgSpan'>{imgArr[imgNum].text}</span></a>
				</div>
			</a>
		</div>
	);
}

export default Banner;