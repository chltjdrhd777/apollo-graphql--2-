import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { DataType } from "../type";
import Movie from "../components/Movie";

//gql = translate the object to the thing which GraphQl can understand
//useQuery(gql) = send reformed query to graphql server and get an object which contains data,loading....

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

//width = the width of content
//display:flex <--- keyword that "I want to use flex option"
//flex-direction : default is row
//align-items : the reversed direction of flex direction
//justify-content : right direction of flex direction

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

//linear-gradient(angle,startcolor,finishcolor)
//angle = clock position (ex, 0deg = from bottom to top, 45deg = from left-bottom to right-top)
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-size: 20px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo accompanied by GraphQL</Title>
        <Subtitle>Practice it</Subtitle>
        {loading && <Loading>Loading...</Loading>}
        {!loading &&
          data.movies &&
          data.movies.map((everyData: DataType) => (
            <Movie key={everyData.id} id={everyData.id} />
          ))}
      </Header>
    </Container>
  );
};
