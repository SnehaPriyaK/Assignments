class Movie{
    constructor(movieName,studioName, rating="PG"){
        this.movieName=movieName;
        this.studioName=studioName;
        this.rating=rating;
    }
    getPG(movieList){
      let result=[];
        for(let i=0; i<movieList.length; i++){
            if(movieList[i].rating=="PG"){
                result.push(movieList[i]);
            }
        }
        return result;
    }
}

let movie1=new Movie("Casino Royale","Eon Productions","PG13");
let movie2=new Movie("The Shawshank Redemption","Castle Rock Entertainment","R");
let movie3=new Movie("The Godfather","Alfran Productions", "R");
let movie4=new Movie("Hocus Pocus"," Walt Disney Pictures","PG");
let movie5=new Movie("Avatar","20th Century Studios");
let movieList=[movie1,movie2,movie3,movie4,movie5];
console.log(movie1.getPG(movieList));
