// @flow
import { request } from '../../utils';

it('should fetch a community', async () => {
  const query = /* GraphQL */ `
    {
      community(id: "ce2b4488-4c75-47e0-8ebc-2539c1e6a191") {
        id
        createdAt
        name
        slug
        description
        website
        profilePhoto
        coverPhoto
      }
    }
  `;

  expect.assertions(1);
  const result = await request(query);

  expect(result).toMatchSnapshot();
});

it('should fetch a list of communities by slugs', async () => {
  const query = /* GraphQL */ `
    {
      communities(slugs: ["spectrum"]) {
        id
        createdAt
        slug
        description
        website
        profilePhoto
        coverPhoto
      }
    }
  `;

  expect.assertions(1);
  const result = await request(query);

  expect(result).toMatchSnapshot();
});