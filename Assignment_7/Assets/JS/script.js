function initMap() {

	/*! 20 museum - name, location, lat and long */

	/*! The broad Museum */
	var thebroad = {
		info: '<strong>The Broad</strong><br>\
					221 S Grand Ave<br> Los Angeles, CA 90012<br>\
					<a href="https://goo.gl/maps/aohD3UoKL1A2">Get Directions</a>',
		lat: 34.054467,
		long: -118.250561
	};

	/*! Metropolitan Museum of Art */
	var met = {
		info: '<strong>Metropolitan Museum of Art</strong><br>\
					1000 5th Ave<br> New York, NY 10028<br>\
					<a href="https://goo.gl/maps/UfmZRgc7L8u">Get Directions</a>',
		lat: 40.779165,
		long: -73.962928
	};

	/*! Los Angeles County Museum of Art */
	var lacma = {
		info: '<strong>Los Angeles County Museum of Art</strong><br>\r\
					5905 Wilshire Blvd<br> Los Angeles, CA 90036<br>\
					<a href="https://goo.gl/maps/cq8kVyjteBN2">Get Directions</a>',
		lat: 34.063791,
		long: -118.358885
	};

		/*! Art Institute of Chicago */
	var artchicago = {
		info: '<strong>Art Institute of Chicago</strong><br>\r\
					111 S Michigan Ave<br> Chicago, IL 60603<br>\
					<a href="https://goo.gl/maps/M2qGr3TTKQw">Get Directions</a>',
		lat: 41.880682,
		long: -87.624215
	};
		/*! Museum of Fine Arts, Boston */
	var artboston = {
		info: '<strong>Museum of Fine Arts, Boston</strong><br>\r\
					465 Huntington Ave<br> Boston, MA 02115<br>\
					<a href="https://goo.gl/maps/kSPPLa4Q9To">Get Directions</a>',
		lat: 42.339383,
		long: -71.093964
	};

		/*! Museum of Fine Arts, Houston */
	var arthouston = {
		info: '<strong>Museum of Fine Arts, Houston</strong><br>\r\
					1001 Bissonnet St<br> Houston, TX 77005<br>\
					<a href="https://goo.gl/maps/6AL7DaHJrqJ2">Get Directions</a>',
		lat: 29.725680,
		long: -95.390482
	};
		/*! Philadelphia Museum of Art */
	var artphilly = {
		info: '<strong>Philadelphia Museum of Art</strong><br>\r\
					2600 Benjamin Franklin Pkwy<br>  Philadelphia, PA 19310<br>\
					<a href="https://goo.gl/maps/LBWfFCboAXS2">Get Directions</a>',
		lat: 39.965806,
		long: -75.181158
	};
		/*! National Gallery of Art */
	var gallery = {
		info: '<strong>National Gallery of Art</strong><br>\r\
					6th & Constitution Ave NW<br> Washington, DC 20565<br>\
					<a href="https://goo.gl/maps/Z4cfeejH2XR2">Get Directions</a>',
		lat: 38.892077,
		long: -77.019912
	};

		/*! San Francisco Museum of Modern Art */
	var sfma = {
		info: '<strong>San Francisco Museum of Modern Art</strong><br>\r\
					151 3rd St<br> San Francisco, CA 94103<br>\
					<a href="https://goo.gl/maps/HebxMZWKh1F2">Get Directions</a>',
		lat: 37.785718,
		long: -122.401051
	};
		/*Detroit Institute of Arts*/
	var detroit = {
		info: '<strong>Detroit Institute of Arts</strong><br>\r\
					5200 Woodward Ave<br> Detroit, MI 48202<br>\
					<a href="https://goo.gl/maps/i1LK3wZZk4L2">Get Directions</a>',
		lat: 42.359420,
		long: -83.064576
	};
		/*North Carolina Museum of Art*/
	var ncmo = {
		info: '<strong>North Carolina Museum of Art</strong><br>\r\
					2110 Blue Ridge Rd<br> Raleigh, NC 27607<br>\
					<a href="https://goo.gl/maps/hU2NEiy5vwj">Get Directions</a>',
		lat: 35.810435,
		long: -78.702139
	};

		/*Museum of Contemporary Art of Georgia*/
	var georgia = {
		info: '<strong>Museum of Contemporary Art of Georgia</strong><br>\r\
					75 Bennett St NW<br> Atlanta, GA 30309<br>\
					<a href="https://goo.gl/maps/96Y2qdUsqto">Get Directions</a>',
		lat: 33.812105,
		long: -84.395204
	};

		/*Saint Louis Art Museum*/
	var louis = {
		info: '<strong>Saint Louis Art Museum</strong><br>\r\
					1 Fine Arts Dr<br> St. Louis, MO 63110<br>\
					<a href="https://goo.gl/maps/8KeG9JRv2aF2">Get Directions</a>',
		lat: 38.639306,
		long: -90.294491
	};

	/*create an array in a variable*/

	var locations = [
      [thebroad.info, thebroad.lat, thebroad.long, 0],
      [met.info, met.lat, met.long, 1],
      [lacma.info, lacma.lat, lacma.long, 2],
      [artchicago.info, artchicago.lat, artchicago.long, 3],
      [artboston.info, artboston.lat, artboston.long, 4],
      [arthouston.info, arthouston.lat, arthouston.long, 5],
      [artphilly.info, artphilly.lat, artphilly.long, 6],
      [gallery.info, gallery.lat, gallery.long, 7],
      [sfma.info, sfma.lat, sfma.long, 8],
      [detroit.info, detroit.lat, detroit.long, 9],
      [ncmo.info, ncmo.lat, ncmo.long, 10],
      [georgia.info, georgia.lat, georgia.long, 11],
      [louis.info, louis.lat, louis.long, 11],
    ];

    /*call the map, zoom and center the map*/
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4.5,
		center: new google.maps.LatLng(38.639306, -90.294491),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	/*dynamically update based on the locations variable*/
	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}