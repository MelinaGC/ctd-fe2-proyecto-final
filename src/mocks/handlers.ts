import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    const quote = {
      quote: "Eat my shorts",
      character: "Bart Simpson",
      image: "/static/media/bart.cfa369b39b5dd6795d7e.png",
      characterDirection: "Right",
    };
    const mockResponse = [quote];

    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];
