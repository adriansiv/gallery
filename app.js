const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

  const numberOfColumns = 4;
/*
!!! HINT: REMEMBER THE STRUCTURE !!!
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)

OR directly 

fetch('url').then(ResolveFuntion, RejectFuntion)

*/



const app = document.getElementById('app');

const divRow = document.createElement("div");
divRow.className = 'row';

const columns = [];

const createColumns = () => {
  for (let i = 0; i <= numberOfColumns -1; i++) {
    const divColumn = document.createElement("div");
    divColumn.className = "column";
    divRow.appendChild(divColumn);
    columns.push(divColumn);
  }
}
createColumns();

fetch(URL)
.then(response => onSuccessFetch(response))
.then(error => console.log('this is an error: ', error));

const onSuccessFetch = (resolve) => {
  resolve.json()
  .then((photos) => {
    for (indexOfThePhoto in photos) {

      const { author, url, pubdate } = photos[indexOfThePhoto]
      
      const img = document.createElement("img");
      img.src = url;

      const p = document.createElement("p");
      p.innerText = `Author: ${author}`;

      columns[indexOfThePhoto % numberOfColumns].appendChild(img);
      columns[indexOfThePhoto % numberOfColumns].appendChild(p);

      app.appendChild(divRow);
    }
  })
};
