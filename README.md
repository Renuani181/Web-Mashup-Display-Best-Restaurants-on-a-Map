You need to edit the HTML file yelp.html and the JavaScript file yelp.js. Your HTML web page must have 3 sections:

a search text area to put search terms with a button "Find"
a Google map of size 600*500 pixels, initially centered at (32.75, -97.13) with zoom level 16
a text display area
When you write some search terms in the search text area, say "Indian buffet", it will find the 10 best restaurants in the map area that match the search terms. They may be less than 10 (including zero) sometimes. The map will display the location of these restaurants as map overlay markers with labels from 1 to 10. The text display area will display various information about these restaurants. It will be an ordered list from 1 to 10 that correspond to the best 10 matches. Each list item in the display area will include the following information about the restaurant: the image "image_url", the "name" as a clickable "url" to the Yelp page of this restaurant, and the rating (a number between 1-5). When you search for new terms, it will clear the display area and all the map overlay markers, and will create new ones based on the new search.

How do you find the latitude and longitude of a restaurant to put an overlay marker on the map? Each restaurant returned by Yelp has a "coordinate" which contains a "latitude" and a "longitude".
How do you tell Yelp to search only on the displayed map? You set the latitude, longitude, and radius on your Yelp search, which can be derived from the map bounding box from the Google Map. You can get the bounding box of the map using the getBounds (Links to an external site.) method (it returns 4 numbers).
Note that everything should be done asynchronously and your web page should never be redrawn completely. You need only one XMLHttpRequest object for sending a request to Yelp, since Google Maps is already asynchronous. You should not use any JavaScript library, such as JQuery.
