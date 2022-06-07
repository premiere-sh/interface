/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        name
        platform
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        name
        platform
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        name
        platform
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const createGameAccount = /* GraphQL */ `
  mutation CreateGameAccount(
    $input: CreateGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    createGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const updateGameAccount = /* GraphQL */ `
  mutation UpdateGameAccount(
    $input: UpdateGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    updateGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const deleteGameAccount = /* GraphQL */ `
  mutation DeleteGameAccount(
    $input: DeleteGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    deleteGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTournamentPlayer = /* GraphQL */ `
  mutation CreateTournamentPlayer(
    $input: CreateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    createTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          name
          platform
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTournamentPlayer = /* GraphQL */ `
  mutation UpdateTournamentPlayer(
    $input: UpdateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    updateTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          name
          platform
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTournamentPlayer = /* GraphQL */ `
  mutation DeleteTournamentPlayer(
    $input: DeleteTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    deleteTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          name
          platform
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTeamMember = /* GraphQL */ `
  mutation CreateTeamMember(
    $input: CreateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    createTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
export const updateTeamMember = /* GraphQL */ `
  mutation UpdateTeamMember(
    $input: UpdateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    updateTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
export const deleteTeamMember = /* GraphQL */ `
  mutation DeleteTeamMember(
    $input: DeleteTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    deleteTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
