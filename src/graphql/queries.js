/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameAccount = /* GraphQL */ `
  query GetGameAccount($id: ID!) {
    getGameAccount(id: $id) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const listGameAccounts = /* GraphQL */ `
  query ListGameAccounts(
    $filter: ModelGameAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
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
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchPlayers = /* GraphQL */ `
  query SearchPlayers(
    $filter: SearchablePlayerFilterInput
    $sort: [SearchablePlayerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePlayerAggregationInput]
  ) {
    searchPlayers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTournamentPlayer = /* GraphQL */ `
  query GetTournamentPlayer($id: ID!) {
    getTournamentPlayer(id: $id) {
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
export const listTournamentPlayers = /* GraphQL */ `
  query ListTournamentPlayers(
    $filter: ModelTournamentPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        playerID
        tournament {
          id
          region
          name
          description
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
          points
          title
          createdAt
          updatedAt
          playerFriendsId
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamMember = /* GraphQL */ `
  query GetTeamMember($id: ID!) {
    getTeamMember(id: $id) {
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
export const listTeamMembers = /* GraphQL */ `
  query ListTeamMembers(
    $filter: ModelTeamMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          points
          title
          createdAt
          updatedAt
          playerFriendsId
        }
        team {
          id
          creator
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        creator
      }
      nextToken
    }
  }
`;
