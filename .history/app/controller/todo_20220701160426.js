const Controller = require("egg").Controller;

// app/controller/todo.js
class TodoController extends Controller {
  // `GET /api/todo`
  async index() {}

  // `POST /api/todo`
  async create() {
    // const { ctx, service } = this;
    // // params validate, need `egg-validate` plugin
    // // ctx.validate({ title: { type: 'string' } });
    // ctx.status = 201;
    // ctx.body = await service.todo.create(ctx.request.body);
  }

  // `PUT /api/todo`
  async update() {}

  // `DELETE /api/todo`
  async destroy() {}
}
