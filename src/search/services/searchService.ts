import { User } from "../types/user";

export type SearchResults = {
  userCount: number;
  nodes: Array<User>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string | null;
  };
};

export const searchUsers = async (
  searchTerm: string
): Promise<SearchResults> => {
  return new Promise((resolve) => {
    if (searchTerm.trim() === "") {
      return resolve({
        userCount: 0,
        nodes: [],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: null,
        },
      });
    }

    return resolve({
      userCount: 1068,
      nodes: [
        {
          name: "Ovidiu Curcan",
          login: "ovidiu",
          id: "MDQ6VXNlcjYzODQ3",
          url: "https://github.com/ovidiu",
          email: "",
          company: null,
          location: "Amsterdam, NL",
          bio: null,
          avatarUrl:
            "https://avatars0.githubusercontent.com/u/63847?u=4d62a73a474980e391b256df9568f0b052e86ccb&v=4",
        },
        {
          name: "Ovidiu Cherecheș",
          login: "skidding",
          id: "MDQ6VXNlcjI1MDc1MA==",
          url: "https://github.com/skidding",
          email: "skidding@gmail.com",
          company: null,
          location: null,
          bio: "",
          avatarUrl:
            "https://avatars3.githubusercontent.com/u/250750?u=a319381da667765b93b82820d33bfd1d8636ede4&v=4",
        },
        {
          name: "Belciug Ovidiu-Mihai",
          login: "ovidiumihaibelciug",
          id: "MDQ6VXNlcjI1NDAwOTE1",
          url: "https://github.com/ovidiumihaibelciug",
          email: "ovidiumihaibelciug@gmail.com",
          company: null,
          location: "Iasi, Romania",
          bio: "",
          avatarUrl:
            "https://avatars0.githubusercontent.com/u/25400915?u=952889485268a706060465f63054775de1c9a392&v=4",
        },
        {
          name: "Ovidiu Bute",
          login: "ovidiubute",
          id: "MDQ6VXNlcjQ2MjU2MQ==",
          url: "https://github.com/ovidiubute",
          email: "",
          company: null,
          location: "Bucharest, Romania",
          bio: "Passionate about building large scale web apps.",
          avatarUrl:
            "https://avatars2.githubusercontent.com/u/462561?u=91c2d2087ac57ae0ec480525b47844612a82fa97&v=4",
        },
        {
          name: "Ovidiu Giorgi",
          login: "ovidiugiorgi",
          id: "MDQ6VXNlcjE2NDA1MjEw",
          url: "https://github.com/ovidiugiorgi",
          email: "",
          company: null,
          location: "Bucharest",
          bio: "",
          avatarUrl:
            "https://avatars1.githubusercontent.com/u/16405210?u=dd81cb7edb83f20ea4d4a3fc82aa2c37ac4cd349&v=4",
        },
        {
          name: "Ovidiu Predescu",
          login: "ovidiucp",
          id: "MDQ6VXNlcjkwODk3NQ==",
          url: "https://github.com/ovidiucp",
          email: "",
          company: "@Jollyturns ",
          location: "San Francisco Bay Area",
          bio:
            "@Jollyturns. Previously at Google. Full-stack developer: mobile (iOS, Android), web (JavaScript, AngularJS), server-side (Python, C++, Java).",
          avatarUrl:
            "https://avatars1.githubusercontent.com/u/908975?u=81d19752bdb4cb6e5a36e194e528673241059904&v=4",
        },
        {
          name: "Ovidiu Anca",
          login: "ovidiuanca",
          id: "MDQ6VXNlcjEzNjEyODc3",
          url: "https://github.com/ovidiuanca",
          email: "mihaiovidiuanca@gmail.com",
          company: "@toptal",
          location: "Cluj-Napoca, Romania",
          bio: "Ruby Developer",
          avatarUrl:
            "https://avatars3.githubusercontent.com/u/13612877?u=86a3fa4f3552fb4b99e082c022e3fa49a1103e5e&v=4",
        },
        {
          name: "Ovidiu Cincheza",
          login: "ovicin",
          id: "MDQ6VXNlcjI3NDI2NTM=",
          url: "https://github.com/ovicin",
          email: "",
          company: null,
          location: "Barcelona",
          bio: null,
          avatarUrl: "https://avatars3.githubusercontent.com/u/2742653?v=4",
        },
        {
          name: "Ovidiu Popoviciu",
          login: "ovidiup13",
          id: "MDQ6VXNlcjQ5MjA1NzI=",
          url: "https://github.com/ovidiup13",
          email: "",
          company: "@YieldifyLabs",
          location: "London",
          bio: "'sup",
          avatarUrl:
            "https://avatars2.githubusercontent.com/u/4920572?u=772e4d06a399890d7f76c12bd997c67d6ed2ce72&v=4",
        },
        {
          name: "Ovidiu Pârvu",
          login: "ovidiuparvu",
          id: "MDQ6VXNlcjY1NjIzOA==",
          url: "https://github.com/ovidiuparvu",
          email: "",
          company: null,
          location: "London, United Kingdom",
          bio: "",
          avatarUrl:
            "https://avatars2.githubusercontent.com/u/656238?u=465e9bf2f12ed5d44a6b7bf2c47c2d06093b0ae9&v=4",
        },
      ],
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        endCursor: "Y3Vyc29yOjEw",
      },
    });
  });
};
