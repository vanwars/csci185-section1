/* 
cat:  https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg
dog:  https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg
bird: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg
fish: https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg'
*/


function showCat() {
    // your code here...
    console.log('update the image to show a cat!');
};

function showDog() {
    // your code here...
    console.log('update the image to show a dog!');
};

function showBird() {
    // Goal: target the img element and change it's src to point
    // to an image of a bird.
    document.querySelector('#image-demo').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg";
};

function showFish() {
    // your code here...
    document.querySelector('#image-demo').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU';
};

