import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    const character = req.url.searchParams.get("character");

    const characterQuote = [
      {
        quote: "I hope I didn't brain my damage.",
        character: "Homer Simpson",
        image: "/static/media/homer.cfa369b39b5dd6795d7e.png",
        characterDirection: "Right",
      },
    ];

    const quote = [
      {
        quote: "Eat my shorts",
        character: "Bart Simpson",
        image: "/static/media/bart.cfa369b39b5dd6795d7e.png",
        characterDirection: "Right",
      },
    ];

    if (character) {
      return res(ctx.status(200), ctx.json(characterQuote));
    }

    return res(ctx.status(200), ctx.json(quote));
  }),
];
