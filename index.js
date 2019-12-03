const bcrypt = require('bcryptjs')

const POST_ACTION_BASE64 = 'base64'

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
        displayName: 'Post-Action',
        description: 'Action after encryption',
        type: 'enum',
        defaultValue: 'none',
        options: [
          {
            displayName: 'none',
            value: 'none',
            description: 'No further action',
          },
          {
            displayName: 'Base64 -> Encode',
            value: POST_ACTION_BASE64,
            description: 'Encode the string after encryption',
          },
        ],
      },
      {
        displayName: 'Password',
        type: 'string',
      },
    ],
    async run(context, rounds, post_action, password) {
      const hash = await bcrypt.hash(password, rounds)

      switch (post_action) {
        case POST_ACTION_BASE64:
          return btoa(hash)
      }

      return hash
    }
  }
]
