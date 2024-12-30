import { Hono } from 'hono';
const app = new Hono();

app.get('/', c => {
	return c.json({message: "Hello Hono!"})
})
app.get('/:name', c => {
	console.log(c.req.param('name'));
	const name = c.req.param('name').slice(0, 1).toUpperCase() + c.req.param('name').slice(1).toLowerCase();
	return c.json({message: `Hello ${name}!`});
});

export default app;
