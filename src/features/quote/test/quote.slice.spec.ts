import citaReducer, { EstadoCita, limpiar } from "../citaSlice";
import { ESTADO_FETCH } from "../constants";

describe("Reducer", () => {
  const initialState: EstadoCita = {
    data: null,
    estado: ESTADO_FETCH.INACTIVO,
  };

  describe("as default", () => {
    it("should return initial state", () => {
      const actual = citaReducer(initialState, { type: "any" });
      expect(actual).toEqual(initialState);
    });
  });

  describe("on limpiar", () => {
    it("returns default initial state", () => {
      const actual = citaReducer(initialState, limpiar);
      expect(actual).toEqual(initialState);
    });
  });
});
