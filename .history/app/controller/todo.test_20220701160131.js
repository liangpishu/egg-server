// // test/app/controller/todo.test.js
// const { app, mock, assert } = require("egg-mock/bootstrap");

// describe("test/app/controller/todo.test.js", () => {
//   if (
//     ("should add todo",
//     () => {
//       return app
//         .httpRequest()
//         .post("/api/todo")
//         .send({ title: "add" })
//         .expect("Content-Type", "/json/")
//         .expect("X-Response-Time", /\d+ms/)
//         .expect(201)
//         .expect((res) => {
//           assert(res.body.id);
//           assert(res.body.title === "Add one");
//           assert(res.body.completed === false);
//         });
//     })
//   );
// });
