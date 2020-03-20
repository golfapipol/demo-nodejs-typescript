import express from 'express'
import bodyParser from 'body-parser'
import configs from './configs'

class Application {
  public init () {
    const app = express()
    app.set('port', configs.port)
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/', (_req, res) => {
      return res.json({
        message: 'Welcome to Artisan API'
      })
    })

    app.listen(app.get('port'), () => {
      console.log(`Server running on port: ${app.get('port')}`)
    })
    return app
  }
}

export const app = new Application().init()
