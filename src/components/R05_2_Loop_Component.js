import React from "react";

//리액트에 가장 잘 맞는 반복문 메서드: map()
//  - JS 배열객체 메서드 map() 사용
//  - 배열의 값을 편집하고, 배열로 생성하여, 따로 배열에 담는 작업 생략 가능
//  - 리액트가 구별할 수 있도록 key 값을 설정해야 함
//    : data 자체에 유니크한 값이면 사용 가능하며, 만약 없다면 
//      map((item,index)=>{}) : index를 활용해도 됨
const MovieList = () => {
  const movies2025 = [
    { id: 1, title: "좀비딸", year: 2025 },
    { id: 2, title: "F1더무비", year: 2025 },
    { id: 3, title: "미션임파서블", year: 2025 },
    { id: 4, title: "야당", year: 2025 },
  ];
  
  const movies2024 =[
    { title: "파묘", year: 2024 },
    { title: "범죄도시4", year: 2024 },
    { title: "인사이드아웃2", year: 2024 },
    { title: "베테랑2", year: 2024 },
  ]
  return (
    <div>
      <h2>2025영화 순위</h2>
      <ul>
        {movies2025.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.year}
          </li>
        ))}
      </ul>
      <h2>2024영화 순위</h2>
      <ul>
        {movies2024.map((movie,index) => (
          <li key={index}>
            {movie.title} - {movie.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
