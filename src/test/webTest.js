import { fetchAPI, submitAPI } from "../mockApi";

test("Api test", () => {
  return fetchAPI("2023-09-09").then((res) => {
    expect(res).toEqual(["10:00", "11:00", "12:00"]);
  });
});

test("Api test2", () => {
  return fetchAPI("2023-09-09").then((res) => {
    expect(res).toEqual(["10:00", "11:00", "12:00"]);
  });
});

test("submit Api", () => {
  return submitAPI({ date: "2023-09-09", time: "11:00" }).then((res) => {
    expect(res).toBe("reservado con exito");
  });
});