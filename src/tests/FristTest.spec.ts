import { User } from '@models/User'

test('ok', () => {
  const user = new User()
  user.name = 'Marcio'
  expect(user.name).toEqual('Marcio')
})
