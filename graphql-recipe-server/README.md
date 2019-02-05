This is the app created by following along with the blogpost at:

<https://scotch.io/tutorials/super-simple-graphql-with-node>

It's a simple GraphQL recipe server using apollo-server and node with sequelize
to manage the sqlite database.

You can run the app with `node src/index.js` and you get the GraphQL interface
on <http://localhost:4000/>.  You can then create a new user with:

```
mutation {
  createUser(
    name: "Lewis",
    email:"LLC@acm.org",
    password:"secret"
  ) {
    id,
    name,
    email
  }
}
```

And a new recipe with:

```
# create a new recipe

mutation {
  createRecipe(
    userId: 1
    title: "Sample 2"
    ingredients: "Salt, Pepper"
    directions: "Add salt, Add pepper"
  ) {
    id
    title
    ingredients
    directions
    user {
      id
      name
      email
    }
  }
}
```

To list all recipes, try:

```
{
  allRecipes {
    id,
    title,
    ingredients,
    directions
  }
}
```

This will query your one user:

```
{
  user(id: 1) {
    id,
    name
  }
}
```

And when I tried this, somehow my recipe 1 got null as user, so I was getting
"Cannot return null for non-nullable field Recipe.user".  My recipe 2 was fine,
so I was able to fetch it like this:

```
{
  recipe(id: 2) {
    title,
    ingredients,
    directions,
    user {
      name,
      email
    }
  }
}
```
