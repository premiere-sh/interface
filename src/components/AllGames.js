import Image from "next/image"
import styled from "styled-components"
import { Grid, Cell } from "styled-css-grid"
import GameTile from "components/GameTile"
import { Subheading, Row, Container } from "components/common"
import GradientDropdown from "components/GradientDropdown"

export default function AllGames() {
  return (
    <Container>
      <Row style={{ justifyContent: "space-between" }}>
        <Subheading>ALL GAMES</Subheading>
        <GradientDropdown text="FILTER BY PLATFORM" />
      </Row>
      <Grid columns="repeat(auto-fit, minmax(210px, 1fr))" gap="45px">
        <Cell style={{ display: "flex", justifyContent: "center" }}>
          <GameTile game={null} caption={null} />
        </Cell>
      </Grid>
    </Container>
  )
}
