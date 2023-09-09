import React from "react";
import styled from "styled-components/native";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
`;

const Message = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT376ucIVA8Ki80a2KR5fKXtKA1iatlvOLUQQ&usqp=CAU",
    ],
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjU4N2wzLjY2OCA3LjU2OCA4LjMzMiAxLjE1MS02LjA2NCA1LjgyOCAxLjQ4IDguMjc5LTcuNDE2LTMuOTY3LTcuNDE3IDMuOTY3IDEuNDgxLTguMjc5LTYuMDY0LTUuODI4IDguMzMyLTEuMTUxeiIvPjwvc3ZnPg==" />
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjU4N2wzLjY2OCA3LjU2OCA4LjMzMiAxLjE1MS02LjA2NCA1LjgyOCAxLjQ4IDguMjc5LTcuNDE2LTMuOTY3LTcuNDE3IDMuOTY3IDEuNDgxLTguMjc5LTYuMDY0LTUuODI4IDguMzMyLTEuMTUxeiIvPjwvc3ZnPg==" />
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjU4N2wzLjY2OCA3LjU2OCA4LjMzMiAxLjE1MS02LjA2NCA1LjgyOCAxLjQ4IDguMjc5LTcuNDE2LTMuOTY3LTcuNDE3IDMuOTY3IDEuNDgxLTguMjc5LTYuMDY0LTUuODI4IDguMzMyLTEuMTUxeiIvPjwvc3ZnPg==" />
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjU4N2wzLjY2OCA3LjU2OCA4LjMzMiAxLjE1MS02LjA2NCA1LjgyOCAxLjQ4IDguMjc5LTcuNDE2LTMuOTY3LTcuNDE3IDMuOTY3IDEuNDgxLTguMjc5LTYuMDY0LTUuODI4IDguMzMyLTEuMTUxeiIvPjwvc3ZnPg==" />
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Message variant="label" style={{ color: "red" }}>
                Closed Temporarily
              </Message>
            )}
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: icon[0] }}
            />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
