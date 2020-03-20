type Config = {
  port: string | number;
  LINE_ENDPOINT: string;
}
const configs:Config = {
  port: process.env.PORT || 8100,
  LINE_ENDPOINT: 'http://line.bot'
}

export default configs
