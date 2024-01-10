export const listen = (app) => {
  const port = process.env.APP_PORT;

  app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  });
}
