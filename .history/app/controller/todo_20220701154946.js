const Controller = require("egg").Controller;

class TodoController extends Controller {
  async create() {
    const { ctx, service } = this;
    ctx.body = await service.todo.create(ctx.request.body);
  }
}
