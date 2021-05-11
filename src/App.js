import "./App.css";
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import {  Form, FormControl, Button } from "react-bootstrap";
import Add from "./component/add";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const data = [
    {
      title: "Demon Slayer the Movie: Mugen Train",
      src: "https://i.egycdn.com/pic/WmFwZndlY21ZVExjdk52bWpFY3htenhheGxtYm1t.jpg",
      rating: 4 ,
      text:
        "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
    },
    {
      title: "Joker",
      src: "https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg",
      rating: 4,
      text:
        "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
    },
    {
      title: "Birds of prey",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21MdE5qbVlqdmNFY2xtRW1ibWJjd3h2Y21t.jpg",
      rating: "1",
      text:
        "The film follows Harley Quinn, who after breaking up with the Joker, is threatened by Gotham City crime lord Roman Sionis, and joins forces with Helena Bertinelli, Dinah Lance, and Renee Montoya (who go on to form the Birds of Prey) to save Cassandra Cain.",
    },
    {
      title: "The Invisible guest",
      src: "https://i.egycdn.com/pic/WmFwZndlY21idmNtbW1qbWp2Y0VjdmNQdk5FYW1tbXpQ.jpg",
      rating: 5,
      text:
        "A young businessman wakes up in a locked hotel room next to the body of his dead lover. He hires a prestigious lawyer to defend him, and over the course of one night, they work together to find out what happened.",
    },
    {
      title: "The Perks of Being a Wallflower",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21FdmNtb051Y21tbUhjUHZORXZOdg.jpg",
      rating: 5,
      text:
        "Fifteen-year-old Charlie is coping with the suicide of his friend, Michael. To lessen the fear and anxiety of starting high school alone, Charlie starts writing letters to a stranger, someone he heard was nice but has never met in person.",
    }, 
    {
      title: "The Body",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21UWW1tcG9SY21ZcHZheG1wemE.jpg",
      rating: 4,
      text:
        "A detective searches for the body of a femme fatale which has gone missing from a morgue",
    },
    
  ];
  const starList = [
    {
      id: 1,
      icon: "★",
      isColored: false,
    },
    {
      id: 2,
      icon: "★",
      isColored: false,
    },
    {
      id: 3,
      icon: "★",
      isColored: false,
    },
    {
      id: 4,
      icon: "★",
      isColored: false,
    },
    {
      id: 5,
      icon: "★",
      isColored: false,
    },
  ];

  const [tabStar, setTabStar] = useState(starList);

  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");

  const movieAdd = (title, src, rating, text) =>
    setMovieList([...movieList, { title, src, rating, text }]);
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id ? { ...el, isColored: !el.isColored } : el
      )
    );
  };
  return (
    
    <div className="App">
      <h1 style={{color:'white',fontFamily:'Abril Fatface' ,padding:'20px'}}>Movie app</h1>
      <div style={{display:'flex' ,justifyContent:'center'}}>
  <Form style={{display:'flex'}}>
  <Button variant="outline-info" style={{fontFamily:'Cookie',fontSize:'25px',borderRadius:' 10px'}}>Filter by title</Button>
      <FormControl onChange={(search) => setSearch(search.target.value)} type="text" placeholder="Search" style={{width:'50%'}} />'
      
    </Form>
 <Button variant="outline-info" style={{fontFamily:'Cookie',fontSize:'25px',borderRadius:' 10px'}}>Filter by rating</Button>
  {tabStar.map((star) => (
  
              <span className={star.isColored?"gold":"black"} onClick={() => changeColor(star.id)}>{star.icon}</span>
              
            ))}
   </div>
      <MovieList movieList={movieList} search={search} tabStar={tabStar} />
  
      <Add movieAdd={movieAdd} />
    </div>
  );
}

export default App;
