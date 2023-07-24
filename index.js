const bcrypt = require('bcrypt')

module.exports.templateTags = [
  {
    name: 'bcrypt',
    displayName: 'BCrypt',
    description: 'Encrypts a password using bcrypt',
    args: [
      {
        displayName: 'Rounds',
        description: 'See bcrypt documentation',
        type: 'number',
        defaultValue: 10,
      },
      {
        displayName: 'Password',
        type: 'string',
      },
      {
        displayName: 'Salt',
        type: 'string',
      },
    ],
    run(context, rounds, password, salt) {
      const hash = bcrypt.hashSync(password, salt)

      return hash
    }
  }
]
